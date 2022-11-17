import { useState } from "react";

export default function useModal() {
  const [isModalVisible, setModalState] = useState<boolean>(false);

  const openModal = () => {
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
  };

  return { isModalVisible, openModal, closeModal };
}
