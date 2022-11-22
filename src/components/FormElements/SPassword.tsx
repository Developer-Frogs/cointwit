import React from "react";

interface ISPassword {
  name: string;
  placeholder?: string;
  register: any;
  [x: string]: any;
}

function SPassword({ name, placeholder, register, ...rest }: ISPassword) {
  return (
    <input
      name={name}
      className="w-full h-14 p-3 bg-black border-2 border-slate-700 rounded-md"
      type="password"
      placeholder={placeholder}
      {...register(name)}
      {...rest}
    />
  );
}

export default SPassword;
