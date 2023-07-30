import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FormHeader } from "../../components/FormHeader";
import { FormRoot } from "../../components/FormRoot";

export const Register = () => {
  return (
    <>
      <FormHeader
        title="Create your account"
        ctaHelperText="Already has an account?"
        ctaLink="/login"
        ctaText="Login"
      />

      <FormRoot>
        <Input type="text" name="name" id="name" placeholder="Name" />
        <Input type="email" name="email" id="email" placeholder="Email" />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />

        <Button>Create account</Button>
      </FormRoot>
    </>
  );
};
