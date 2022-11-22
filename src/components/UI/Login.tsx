import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import SMailInput from "../FormElements/SMailInput";
import SPassword from "../FormElements/SPassword";

interface IFormInput {
  email: string;
  password: string;
}

function Login() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form className="m-5 space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-2xl font-bold mb-1">Sign In to your account</h1>
      <SMailInput
        name="email"
        placeholder="email"
        register={register}
        required
      />
      <SPassword
        name="password"
        placeholder="Password"
        register={register}
        required
      />
      <div className="w-full text-center">
        <button type="submit" className="bg-twitBlue w-2/3 h-14 rounded-full">
          Login
        </button>
      </div>
    </form>
  );
}

export default Login;
