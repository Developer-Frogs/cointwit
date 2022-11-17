import Link from "next/link";
import React from "react";

interface ILinkedText {
  text: string;
  direction: string;
}

function LinkedText({ text, direction }: ILinkedText) {
  return (
    <Link className="text-twitBlue" href={`/${direction}`} target="_blank">
      <span>{text}</span>
    </Link>
  );
}

export default LinkedText;
