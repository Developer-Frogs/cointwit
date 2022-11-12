import Image from "next/image";
import React, { useState } from "react";
import {
  PhotoIcon,
  GifIcon,
  FaceSmileIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import TweetButton from "./TweetButton";

function TweetBox() {
  const [value, setValue] = useState<string>("");

  const handleOnClick = () => {
    console.log("value", value);
  };

  return (
    <div>
      <div className="flex m-5">
        <img
          src="/1634638713027.jpeg"
          className="rounded-full mr-2 w-14 h-14"
        />
        <div className="p-2 w-full">
          <input
            type="text"
            placeholder="What's happening?"
            className="text-white bg-transparent w-10/12 h-14 outline-0"
            onChange={(e) => setValue(e.target.value)}
          />
          <div className="flex w-full mt-2">
            <div className="flex cursor-pointer space-x-2 w-10/12">
              <PhotoIcon className="w-5 h-5 fill-twitBlue" />
              <GifIcon className="w-5 h-5 fill-twitBlue" />
              <FaceSmileIcon className="w-5 h-5 fill-twitBlue" />
              <MapPinIcon className="w-5 h-5 fill-twitBlue" />
            </div>
            <div className="float-right w-2/12">
              <TweetButton onClick={handleOnClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetBox;
