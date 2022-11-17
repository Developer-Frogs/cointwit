import React, { useState } from "react";

import TweetButton from "./TweetButton";
import { UserCircleIcon } from "@heroicons/react/24/solid";

function TweetBox() {
  const [value, setValue] = useState<string>("");

  const handleOnClick = () => {
    console.log("value", value);
  };

  return (
    <div>
      <div className="flex m-5">
        <UserCircleIcon className="w-14 h-14" />
        <div className="p-2 w-full flex items-center">
          <input
            type="text"
            placeholder="What's happening?"
            className="text-white bg-transparent h-14 w-10/12 outline-0"
            onChange={(e) => setValue(e.target.value)}
          />
          <div className="w-2/12">
            <TweetButton onClick={handleOnClick} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetBox;
