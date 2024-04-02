import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  Auth,
  reauthenticateWithCredential,
  EmailAuthProvider,
  updatePassword as editPassword,
} from "firebase/auth";
import { Dispatch, SetStateAction } from "react";
import { v4 as uuid } from "uuid";
import { getDatabase, ref, get, onValue, child, set } from "firebase/database";

import {
  getStorage,
  ref as uploadRef,
  uploadBytes,
  getDownloadURL,
  StorageReference,
  uploadBytesResumable,
} from "firebase/storage";
import {
  ClientProps,
  ImageBlob,
  ProfileOption,
  SignUpType,
} from "../utils/interfaces";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
};

interface ClientId {
  client?: string;
}

// type
type DispatchType = Dispatch<SetStateAction<User | null>>;
type SetLoadingType = Dispatch<SetStateAction<boolean>>;
type ImageType = FileList | null | undefined;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase(app);
const storage = getStorage(app);

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

/** User State */
export async function loginEmail(
  email: string,
  password: string
): Promise<undefined | UserCredential> {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    throw new Error(getErrorMessage(e));
  }
}

export async function login(): Promise<undefined | UserCredential> {
  try {
    return await signInWithPopup(auth, provider);
  } catch (e) {
    console.log(e);
  }
}

export async function logout(): Promise<void> {
  await signOut(auth).catch(console.error);
}

export function onUserStateChange(
  callback: DispatchType,
  setLoading: SetLoadingType
) {
  onAuthStateChanged(auth, (user: User | null) => {
    if (user) {
      adminUser(user)
        .then((res) => {
          callback(res);
          setLoading(false);
        })
        .catch(console.log);
    } else {
      callback(null);
      setLoading(false);
    }
  });
}

async function adminUser(user: User) {
  return await get(ref(database, "admins")) //
    .then((snapshot: any) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user?.uid);
        return { ...user, isAdmin };
      }
      return user;
    });
}

export async function reauthenticate(
  email: string,
  currentPassword: string,
  newPassword: string
) {
  const user = auth.currentUser;
  if (user) {
    const cred = EmailAuthProvider.credential(email, currentPassword);
    await reauthenticateWithCredential(user, cred)
      .then(async () => {
        return await updatePassword(newPassword);
      })
      .catch((e) => {
        throw new Error(getErrorMessage(e));
      });
  }
}

async function createUser(auth: Auth, email: string, password: string) {
  return await createUserWithEmailAndPassword(auth, email, password);
}

async function uploadData(storageRef: StorageReference, image: ImageBlob) {
  return await uploadBytes(storageRef, image);
}

async function uploadImage(image: ImageType): Promise<string> {
  if (image) {
    const storageRef = uploadRef(storage, `users/${image[0].name}`);
    const upload = await uploadData(storageRef, image[0]);
    return await getDownloadURL(upload.ref);
  }
  return "default";
}

export async function editUser(name: string, image: ImageType) {
  const currentUser = auth.currentUser;

  if (currentUser) {
    const profileOption: ProfileOption = {
      ...(image && { photoURL: await uploadImage(image) }),
      displayName: name,
    };

    await updateProfile(currentUser, profileOption)
      .then((res) => res)
      .catch((e) => {
        throw new Error(getErrorMessage(e));
      });
  }
}

async function updatePassword(password: string) {
  onAuthStateChanged(auth, (user: User | null) => {
    if (user) {
      editPassword(user, password)
        .then((res) => res)
        .catch((e) => {
          throw new Error(getErrorMessage(e));
        });
    }
  });
}

async function updateUserProfile(user: User, option: ProfileOption) {
  await updateProfile(user, option);
}

export async function signUp({ email, name, password, image }: SignUpType) {
  try {
    const userCredential = await createUser(auth, email, password);

    const profileOption: ProfileOption = {
      ...(image && { photoURL: await uploadImage(image) }),
      displayName: name,
    };

    return await updateUserProfile(userCredential.user, profileOption);
  } catch (e) {
    throw new Error(getErrorMessage(e));
  }
}

// Clients Functionality
export async function allclientsAlbums() {
  return new Promise((resolve, reject) => {
    const clientsDataRef = ref(database, "albums");
    const results: ClientProps[] = [];
    onValue(
      clientsDataRef,
      (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const childData = childSnapshot.val();
          results.push(childData);
        });

        resolve(results);
      },
      (error) => {
        reject(error);
      }
    );
  });
}

export async function clientAlbum({ client }: ClientId) {
  const clientAlbum = ref(database);
  try {
    const snapshot = await get(child(clientAlbum, `/albums/${client}`));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log(`No client with the id ${client}`);
      return null;
    }
  } catch (error) {
    console.log("error fetching data:", error);
    throw error;
  }
}

function generateFileName(originalFileName: string): string {
  const timestamp = new Date().getTime();
  const randomNumber = Math.floor(Math.random() * 1000);
  const fileName = `${originalFileName}_${timestamp}_${randomNumber}`;
  return fileName;
}

async function uploadFile(file: File, folderPath: string): Promise<string> {
  try {
    const fileName = generateFileName(file.name);
    const storageRef = uploadRef(storage, `${folderPath}/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Wait for the upload to complete
    await uploadTask;

    // Get the download URL
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
}

export async function addNewAlbum(
  files: File[],
  name: string,
  password: string,
  coverImage: File
) {
  try {
    const coverImageUrl = await uploadFile(coverImage, "cover-images");
    const albumImageUrls = await Promise.all(
      files.map(async (file) => {
        return uploadFile(file, `${name}/images`);
      })
    );
    const id: string = uuid();
    const albumDataRef = ref(database, `albums/${id}`);
    await set(albumDataRef, {
      id,
      name,
      password,
      coverImageUrl,
      albumImageUrls,
    });
    return { coverImageUrl, albumImageUrls };
  } catch (error) {
    console.error("Error adding new album:", error);
    throw error;
  }
}
