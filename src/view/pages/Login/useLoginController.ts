import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z.string().nonempty().email(),
  password: z.string().nonempty().min(8),
});

type FormData = z.infer<typeof schema>;

export const useLoginController = () => {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleSubmit = hookFormHandleSubmit((data) => {
    console.info("data", data);
  });

  return { handleSubmit, register, errors };
};
