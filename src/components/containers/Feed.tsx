import React from "react";
import TweetBox from "../UI/TweetBox";

function Feed() {
  return (
    <div className="col-span-7 md:col-span-6 lg:col-span-4 border-x-2 border-slate-600">
      <div className="hidden sm:block border-b-2 border-slate-600">
        <TweetBox />
      </div>
    </div>
  );
}

export default Feed;
