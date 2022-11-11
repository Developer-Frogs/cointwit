import React from "react";
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

function SideBar() {
  return (
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
      <TweetButton />
    </div>
  );
}

export default SideBar;
