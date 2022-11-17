import React from "react";

interface IModal {
  children: React.ReactNode;
  isModalVisible: boolean;
  closeModal: () => void;
}

function Modal({ children, isModalVisible, closeModal }: IModal) {
  const handleWindowClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };
  return (
    <div
      id="modal_overlay"
      className="fixed z-20 pt-32 bg-slate-500/40 top-0 left-0 w-full h-full"
      style={{ display: isModalVisible ? "block" : "none" }}
      onClick={handleWindowClick}
    >
      <div className="z-40 flex p-4 w-5/6 lg:w-1/3 h-auto bg-black rounded-2xl m-auto">
        <span className="cursor-pointer h-fit" onClick={closeModal}>
          X
        </span>
        <div className="w-11/12">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
