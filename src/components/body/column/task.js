import React from "react";

export default function Task({ task }) {
  return (
    <li className="bg-[#fff] my-[4px]  px-[8px] py-[5px] shadow-sm shadow-[#091e4240] rounded-[4px] text-[14px] text-[#172b4d]">
      {task.title}
    </li>
  );
}
