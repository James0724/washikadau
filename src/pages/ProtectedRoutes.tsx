import { useAuthContext } from "../context/AuthContext";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { IdentificationIcon } from "@heroicons/react/24/outline";
import Modal from "../components/ui/Modal";

interface RouteProps {
  children: ReactNode;
  requireAdmin?: boolean;
}

export default function ProtectedRoute({ children, requireAdmin }: RouteProps) {
  const { ...contextData } = useAuthContext();
  const { user, loading } = contextData;

  const userData = user ?? null;
  const isAdmin = userData?.isAdmin;

  const navigate = useNavigate();

  const moveToHome = () => {
    navigate("/", { replace: true });
  };

  if (loading) return null;

  if (!userData || (requireAdmin && !isAdmin)) {
    return (
      <Modal
        open={true}
        setOpen={moveToHome}
        title="PASSWORD PROTECTED PAGE"
        content={"To access this feature, you'll need to log in"}
        IdentificationIcon={IdentificationIcon}
        bg="bg-violet-100"
        color="text-violet-500"
        firstOnClick={() => navigate("/login")}
        secondOnClick={() => navigate("/register")}
      />
    );
  }

  return <>{children}</>;
}
