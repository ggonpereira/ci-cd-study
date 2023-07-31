import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FormHeader } from "../../components/FormHeader";
import { FormRoot } from "../../components/FormRoot";
import { useRegisterController } from "./useRegisterController";

export const Register = () => {
  const { register, errors, handleSubmit, isValid, isLoading } =
    useRegisterController();

  return (
    <>
      <FormHeader
        title="Create your account"
        ctaHelperText="Already has an account?"
        ctaLink="/login"
        ctaText="Login"
      />

      <FormRoot onSubmit={handleSubmit}>
        <Input
          type="text"
          id="name"
          placeholder="Name"
          error={errors?.name?.message}
          {...register("name")}
        />
        <Input
          type="email"
          id="email"
          placeholder="Email"
          error={errors?.email?.message}
          {...register("email")}
        />
        <Input
          type="password"
          id="password"
          placeholder="Password"
          error={errors?.password?.message}
          {...register("password")}
        />
        <Input
          type="password"
          id="confirmPassword"
          placeholder="Confirm Password"
          error={errors?.confirmPassword?.message}
          {...register("confirmPassword")}
        />

        <Button disabled={!isValid} isLoading={isLoading}>
          Create account
        </Button>
      </FormRoot>
    </>
  );
};
