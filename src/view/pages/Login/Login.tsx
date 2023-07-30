import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export const Login = () => {
  return (
    <>
      <header className="align-center flex flex-col justify-center gap-4 text-center">
        <h1 className="text-2xl font-bold leading-8">Enter your account</h1>

        <p className="space-x-2 tracking-[-0.5px]">
          <span className="text-gray-700">Are you new here?</span>

          <Link to="/register" className="font-medium text-blue-900">
            Create an account
          </Link>
        </p>
      </header>

      <form className="mt-[60px] flex flex-col gap-4">
        <Input type="email" name="email" id="email" placeholder="Email" />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />

        <Button>Enter</Button>
      </form>
    </>
  );
};
