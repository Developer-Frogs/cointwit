import React from "react";
import SideBarRow from "../UI/SideBarRow";
import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  EnvelopeIcon,
  UserIcon,
  BugAntIcon,
} from "@heroicons/react/24/solid";
import TweetButton from "../UI/TweetButton";
import TweetBox from "../UI/TweetBox";
import Modal from "../UI/Modal";
import useModal from "../../configs/hooks/useModal";

function SideBar() {
  const { isModalVisible, openModal, closeModal } = useModal();

  return (
    <>
      <div className="col-span-2 flex flex-col mx-auto items-center lg:items-baseline">
        <BugAntIcon className="w-11 h-11 my-3 cursor-pointer fill-twitBlue" />
        <SideBarRow Icon={HomeIcon} title="Home" direction="" />
        <SideBarRow Icon={HashtagIcon} title="Explore" direction="explore" />
        <SideBarRow Icon={UserIcon} title="Profile" direction="profile" />
        <div className="mt-4 w-full">
          <TweetButton onClick={openModal} />
        </div>
      </div>
      <Modal isModalVisible={isModalVisible} closeModal={closeModal}>
        <TweetBox />
      </Modal>
    </>
  );
}

export default SideBar;
