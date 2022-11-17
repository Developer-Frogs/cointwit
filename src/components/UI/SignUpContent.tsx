import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import SInput from "../FormElements/SInput";

interface IFormInput {
  email: string;
  password: string;
}

function SignUpContent() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form className="m-5 space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-2xl font-bold mb-1">Create your account</h1>
      <SInput name="email" placeholder="email" register={register} />
      {/* <input
        className="w-full h-14 p-3 bg-black border-2 border-slate-700 rounded-md"
        type="text"
        placeholder="email"
        {...register("email")}
      />
      <input
        className="w-full h-14 p-3  bg-black border-2 border-slate-700 rounded-md"
        type="text"
        placeholder="password"
        {...register("password")}
      /> */}
      <div className="w-full text-center">
        <button type="submit" className="bg-twitBlue w-2/3 h-14 rounded-full">
          Create
        </button>
      </div>
    </form>
  );
}

export default SignUpContent;
