import React from "react";

interface ISInput {
  name: string;
  placeholder?: string;
  register: any;
  [x: string]: any;
}

function SInput({ name, placeholder, register, ...rest }: ISInput) {
  return (
    <input
      name={name}
      className="w-full h-14 p-3 bg-black border-2 border-slate-700 rounded-md"
      type="text"
      placeholder={placeholder}
      {...register(name)}
      {...rest}
    />
  );
}

export default SInput;
