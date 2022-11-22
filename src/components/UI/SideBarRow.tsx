import Link from "next/link";
import React, { SVGProps } from "react";

interface ISideBar {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  direction: string;
}

function SideBarRow({ Icon, title, direction }: ISideBar) {
  return (
    <Link href={`/${direction}`}>
      <div className="w-fit flex my-1 items-center p-2 cursor-pointer hover:bg-gray-800 rounded-2xl">
        <Icon className="w-6 h-6" />
        <p className="font-normal hidden ml-2 lg:inline">{title}</p>
      </div>
    </Link>
  );
}

export default SideBarRow;
