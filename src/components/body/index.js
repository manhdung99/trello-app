import React from "react";
import Menu from "./Menu";
import Content from "./Content";
export default function Body() {
  return (
    <div className="px-[8px]">
      <Menu />
      <Content />
    </div>
  );
}
