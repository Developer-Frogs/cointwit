import React, { useState } from "react";
import SideBarRow from "./SideBarRow";
import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  EnvelopeIcon,
  UserPlusIcon,
  BookmarkIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
  BugAntIcon,
} from "@heroicons/react/24/solid";
import TweetButton from "./TweetButton";
import TweetBox from "./TweetBox";

function SideBar() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleOnClick = () => {
    setIsVisible(true);
  };

  const handleOnClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      <div
        className="absolute w-full h-full z-10 bg-slate-500/40"
        style={{ display: isVisible ? "block" : "none" }}
      ></div>
      <div className="col-span-2 flex flex-col mx-auto">
        <BugAntIcon className="w-11 h-11 my-3 cursor-pointer fill-twitBlue" />
        <SideBarRow Icon={HomeIcon} title="Home" />
        <SideBarRow Icon={HashtagIcon} title="Mentions" />
        <SideBarRow Icon={UserPlusIcon} title="Communities" />
        <SideBarRow Icon={BellIcon} title="Notifications" />
        <SideBarRow Icon={EnvelopeIcon} title="Messages" />
        <SideBarRow Icon={BookmarkIcon} title="Bookmarks" />
        <SideBarRow Icon={UserIcon} title="Profile" />
        <SideBarRow Icon={EllipsisHorizontalCircleIcon} title="More" />
        <div className="mt-4">
          <TweetButton onClick={handleOnClick} />
        </div>
      </div>
      <div
        style={{ display: isVisible ? "block" : "none" }}
        className="absolute z-20 left-1/3 top-5 w-1/2 h-1/4 bg-black -translate-x-1/3 rounded-3xl"
      >
        <span className="p-4 cursor-pointer" onClick={handleOnClose}>
          X
        </span>
        <TweetBox />
      </div>
    </>
  );
}

export default SideBar;
