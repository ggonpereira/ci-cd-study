import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { useAuthContext } from "../../../app/hooks/useAuth";
import { authService } from "../../../app/services/authService";
import { SignInParams } from "../../../app/services/authService/signIn";

const schema = z.object({
  email: z.string().nonempty().email(),
  password: z.string().nonempty().min(8),
});

type FormData = z.infer<typeof schema>;

export const useLoginController = () => {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { signIn } = useAuthContext();

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: async (data: SignInParams) => {
      return authService.signIn(data);
    },
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    const { accessToken } = await mutateAsync(data);
    signIn(accessToken);

    toast.success("Successfully logged in.");
  });

  return { handleSubmit, register, errors, isValid, isLoading };
};
