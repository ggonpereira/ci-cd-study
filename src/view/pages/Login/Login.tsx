import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FormHeader } from "../../components/FormHeader";
import { FormRoot } from "../../components/FormRoot";
import { useLoginController } from "./useLoginController";

export const Login = () => {
  const { handleSubmit, register, errors } = useLoginController();

  return (
    <>
      <FormHeader
        ctaHelperText="Are you new here?"
        ctaLink="/register"
        ctaText="Create an account"
        title="Enter your account"
      />

      <FormRoot onSubmit={handleSubmit}>
        <Input
          type="email"
          id="email"
          placeholder="Email"
          error={errors?.["email"]?.message}
          {...register("email")}
        />
        <Input
          type="password"
          id="password"
          placeholder="Password"
          error={errors?.["password"]?.message}
          {...register("password")}
        />

        <Button>Enter</Button>
      </FormRoot>
    </>
  );
};
