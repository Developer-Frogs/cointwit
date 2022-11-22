import React, { useState } from "react";
import useModal from "../../configs/hooks/useModal";
import Login from "../UI/Login";
import Modal from "../UI/Modal";
import SignUpButton from "../UI/SignUpButton";
import SignUpContent from "../UI/SignUpContent";

function Footer() {
  const { isModalVisible, openModal, closeModal } = useModal();
  const [clickedButton, setClickedButton] = useState(null);

  //TODO: Check the event type
  const handleButton = (event: any) => {
    setClickedButton(event.target.id);

    openModal();
  };

  return (
    <>
      <footer className="absolute flex bottom-0 w-full h-20 bg-twitBlue items-center justify-center">
        <div className="w-10/12 justify-between flex">
          <div className="hidden sm:inline w-3/4">
            <h1 className="text-2xl font-bold">Don’t miss what’s happening</h1>
            <p>People on Twitter are the first to know.</p>
          </div>
          <div
            className="flex space-x-4 w-full sm:w-1/4 items-center"
            onClick={handleButton}
          >
            <button
              id="login"
              className="border-2 border-white rounded-3xl px-4 py-2 min-w-fit w-1/2"
            >
              Log in
            </button>
            <div className="min-w-fit w-1/2">
              <SignUpButton text="Sign up" />
            </div>
          </div>
        </div>
      </footer>
      <Modal isModalVisible={isModalVisible} closeModal={closeModal}>
        {clickedButton === "signUp" ? <SignUpContent /> : <Login />}
      </Modal>
    </>
  );
}

export default Footer;
