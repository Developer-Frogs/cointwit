import React from "react";

interface ISignUpButton {
  //openModal: () => void;
  text: string;
}

function SignUpButton({ text }: ISignUpButton) {
  return (
    <button
      id="signUp"
      className="bg-white text-black w-full px-4 py-2 font-bold rounded-3xl"
      //onClick={openModal}
    >
      {text}
    </button>
  );
}

export default SignUpButton;
