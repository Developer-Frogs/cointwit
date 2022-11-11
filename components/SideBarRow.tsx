import React, { SVGProps } from "react";

interface ISideBar {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
}

function SideBarRow({ Icon, title }: ISideBar) {
  return (
    <div className="w-fit flex my-1 items-center p-2 cursor-pointer hover:bg-gray-800 rounded-2xl">
      <Icon className="w-6 h-6 mr-2" />
      <p className="font-normal">{title}</p>
    </div>
  );
}

export default SideBarRow;
