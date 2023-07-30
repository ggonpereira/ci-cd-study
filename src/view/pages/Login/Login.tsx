import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FormHeader } from "../../components/FormHeader";
import { FormRoot } from "../../components/FormRoot";

export const Login = () => {
  return (
    <>
      <FormHeader
        ctaHelperText="Are you new here?"
        ctaLink="/register"
        ctaText="Create an account"
        title="Enter your account"
      />

      <FormRoot>
        <Input type="email" name="email" id="email" placeholder="Email" />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />

        <Button>Enter</Button>
      </FormRoot>
    </>
  );
};
