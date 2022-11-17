import React from "react";

interface ITweetButton {
  onClick: () => void;
}

function TweetButton({ onClick }: ITweetButton) {
  return (
    <button
      className="bg-twitBlue rounded-3xl p-2 my-2 w-full -top-4 min-w-fit"
      onClick={onClick}
    >
      Tweet
    </button>
  );
}

export default TweetButton;
