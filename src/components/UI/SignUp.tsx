import React from "react";
import useModal from "../../configs/hooks/useModal";
import LinkedText from "./LinkedText";
import Modal from "./Modal";
import SignUpButton from "./SignUpButton";
import SignUpContent from "./SignUpContent";

function SignUp() {
  const { isModalVisible, openModal, closeModal } = useModal();

  return (
    <>
      <div className="w-3/4 p-4 space-y-4 h-60 border-slate-800 border-2 ml-7 my-5 rounded-2xl">
        <h1 className="text-lg font-bold">Join CoinTwit</h1>
        <p className="text-xs text-slate-500">
          Sign up now to get your own personalized timeline!
        </p>
        {/* <button
          className="bg-white text-black w-11/12 p-3 font-bold rounded-3xl"
          onClick={openModal}
        >
          Sign up with email
        </button> */}
        <div className="w-11/12">
          <SignUpButton openModal={openModal} text="Sign up with email" />
        </div>
        <p className="text-xs">
          By signing up, you agree to the{" "}
          <LinkedText text="Terms of Service" direction="termsofservices" /> and{" "}
          <LinkedText text="Privacy Policy" direction="privacypolicy" />,
          including <LinkedText text="Cookie Use" direction="cookieuse" />
        </p>
      </div>
      <Modal isModalVisible={isModalVisible} closeModal={closeModal}>
        <SignUpContent />
      </Modal>
    </>
  );
}

export default SignUp;
