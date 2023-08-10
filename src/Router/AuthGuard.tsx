import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../app/hooks/useAuth";

interface AuthGuardProps {
  isPrivate: boolean;
}

export const AuthGuard = ({ isPrivate }: AuthGuardProps) => {
  const { signedIn } = useAuthContext();

  if (!signedIn && isPrivate) {
    return <Navigate to="/login" replace />;
  }

  if (signedIn && !isPrivate) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
