import React from "react";

interface ITweetButton {
  onClick: () => void;
}

function TweetButton({ onClick }: ITweetButton) {
  return (
    <button
      className="bg-twitBlue rounded-3xl p-2 my-2 w-full relative -top-4"
      onClick={onClick}
    >
      Tweet
    </button>
  );
}

export default TweetButton;
