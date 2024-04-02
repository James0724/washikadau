import { useMutation } from "@tanstack/react-query";
import {
  loginEmail,
  signUp,
  //onUserStateChange,
  logout,
  login,
  reauthenticate,
  editUser,
  onUserStateChange,
} from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

interface IProps {
  email: string;
  name: string;
  password: string;
}

interface LoginProps {
  email: string;
  password: string;
}

interface EditPasswordProps {
  email: string;
  currentPassword: string;
  password: string;
}

interface EditAccountProps {
  name: string;
  image: FileList | null;
}

export default function useUser() {
  const { ...contextData } = useAuthContext();
  const { setUser, setLoading } = contextData;

  const signUpQuery = useMutation({
    mutationFn: async (data: IProps) => await signUp(data),
    onSuccess: async () => onUserStateChange(setUser, setLoading),
  });

  const loginGoogleQuery = useMutation({
    mutationFn: async () => await login(),
    onSuccess: async () => onUserStateChange(setUser, setLoading),
  });

  const loginQuery = useMutation({
    mutationFn: async (data: LoginProps) =>
      await loginEmail(data.email, data.password),
    onSuccess: async () => onUserStateChange(setUser, setLoading),
  });

  const logOutQuery = useMutation({
    mutationFn: async () => await logout(),
    onSuccess: async () => onUserStateChange(setUser, setLoading),
  });

  const editPasswordQuery = useMutation({
    mutationFn: async (data: EditPasswordProps) =>
      await reauthenticate(data.email, data.currentPassword, data.password),
    onSuccess: async () => onUserStateChange(setUser, setLoading),
  });

  const editAccount = useMutation({
    mutationFn: async (data: EditAccountProps) => {
      return await editUser(data.name, data.image);
    },
    onSuccess: async () => onUserStateChange(setUser, setLoading),
  });

  return {
    loginGoogleQuery,
    loginQuery,
    signUpQuery,
    logOutQuery,
    editPasswordQuery,
    editAccount,
  };
}
