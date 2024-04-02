// Account
type imageType = FileList | null;
export interface AccountInputs {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
  image: imageType;
}

export interface UserFormTypes {
  email: string;
  firstName: string;
  lastName: string;
}

// Firebase

export type ImageType = FileList | null | undefined;
export type ImageBlob = Blob | Uint8Array | ArrayBuffer;
export interface SignUpType {
  email: string;
  password: string;
  name: string;
  image?: ImageType;
}

export interface ProfileOption {
  displayName?: string;
  photoURL?: string;
}

export const EMAIL_REGEX =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

export interface ClientProps {
  name: string;
  id?: string;
  coverImageUrl: string;
  clientName: string;
  password: string;
  albumImageUrls: {
    [key: string]: any;
  };
}

export interface ImageData {
  [index: number]: {
    name: string;
    size: number;
    type: string;
  };
}

export interface UploadData {
  name: string;
  password: string;
  coverImage?: File;
  files?: File[];
}
export interface UploadData {
  name: string;
  password: string;
  coverImage?: File;
  files?: File[];
}
