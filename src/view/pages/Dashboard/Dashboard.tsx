import { useAuthContext } from "../../../app/hooks/useAuth";

export const Dashboard = () => {
  const { signOut } = useAuthContext();

  return (
    <div>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
};
