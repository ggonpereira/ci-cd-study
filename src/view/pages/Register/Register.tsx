import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export const Register = () => {
  return (
    <>
      <header className="align-center flex flex-col justify-center gap-4 text-center">
        <h1 className="text-2xl font-bold leading-8">Create your account</h1>

        <p className="space-x-2 tracking-[-0.5px]">
          <span className="text-gray-700">Already has an account?</span>

          <Link to="/login" className="font-medium text-blue-900">
            Login
          </Link>
        </p>
      </header>

      <form className="mt-[60px] flex flex-col gap-4">
        <Input type="text" name="name" id="name" placeholder="Name" />
        <Input type="email" name="email" id="email" placeholder="Email" />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />

        <Button>Create account</Button>
      </form>
    </>
  );
};
