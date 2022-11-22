import React from "react";

interface ISMailInput {
  name: string;
  placeholder?: string;
  register: any;
  [x: string]: any;
}

function SMailInput({ name, placeholder, register, ...rest }: ISMailInput) {
  return (
    <input
      name={name}
      className="w-full h-14 p-3 bg-black border-2 border-slate-700 rounded-md"
      type="email"
      placeholder={placeholder}
      {...register(name)}
      {...rest}
    />
  );
}

export default SMailInput;
