import React from "react";
import Task from "./task";
import { Container, Draggable } from "react-smooth-dnd";
export default function Column({ column, onCardDrop }) {
  return (
    <div className="scrool-bar-custom overflow-y-auto max-h-[calc(100vh-100px)] mx-[20px] bg-[#ebecf0] w-[272px] px-[8px] rounded-[4px] first:ml-0 ">
      <p className="py-[8px] pl-[8px] text-[#208ac7] text-[14px] font-semibold column-drag-handle">
        {column?.title}
      </p>
      <ul className=" flex flex-col gap-y-[10px]">
        <Container
          className="bg-[#9696c81a] border-[1px] border-[#abc] mx-[5px] my-[5px]"
          // onDragStart={(e) => console.log("drag started", e)}
          // onDragEnd={(e) => console.log("drag end", e)}
          // onDragEnter={() => {
          //   console.log("drag enter:", column.id);
          // }}
          // onDragLeave={() => {
          //   console.log("drag leave:", column.id);
          // }}
          // onDropReady={(p) => console.log("Drop ready: ", p)}
          groupName="col"
          onDrop={(dropResult) => onCardDrop(dropResult, column.id)}
          getChildPayload={(index) => column.cards[index]}
          dragClass="card-ghost"
          dropClass="card-ghost-drop"
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: "card-drop-preview",
          }}
          dropPlaceholderAnimationDuration={200}
        >
          {column.cards &&
            column.cards.length > 0 &&
            column.cards.map((item) => (
              <Draggable key={item.id}>
                <Task task={item} />
              </Draggable>
            ))}
        </Container>
        <li className="flex text-[#5e6c84] items-center justify-between pb-[4px] ">
          <span className="flex items-center gap-x-[4px]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 1024 1024"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M482 152H542C547.333 152 550 154.667 550 160V864C550 869.333 547.333 872 542 872H482C476.667 872 474 869.333 474 864V160C474 154.667 476.667 152 482 152Z"
                fill="#5e6c84"
              />
              <path
                d="M176 474H848C853.333 474 856 476.667 856 482V542C856 547.333 853.333 550 848 550H176C170.667 550 168 547.333 168 542V482C168 476.667 170.667 474 176 474Z"
                fill="#5e6c84"
              />
            </svg>
            Thêm thẻ
          </span>
          <span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 4C0 3.46957 0.210714 2.96086 0.585786 2.58579C0.960859 2.21071 1.46957 2 2 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V12C16 12.5304 15.7893 13.0391 15.4142 13.4142C15.0391 13.7893 14.5304 14 14 14H2C1.46957 14 0.960859 13.7893 0.585786 13.4142C0.210714 13.0391 0 12.5304 0 12V4ZM2.5 5C2.36739 5 2.24021 5.05268 2.14645 5.14645C2.05268 5.24021 2 5.36739 2 5.5V6.5C2 6.63261 2.05268 6.75979 2.14645 6.85355C2.24021 6.94732 2.36739 7 2.5 7H4.5C4.63261 7 4.75979 6.94732 4.85355 6.85355C4.94732 6.75979 5 6.63261 5 6.5V5.5C5 5.36739 4.94732 5.24021 4.85355 5.14645C4.75979 5.05268 4.63261 5 4.5 5H2.5ZM2.5 8C2.36739 8 2.24021 8.05268 2.14645 8.14645C2.05268 8.24021 2 8.36739 2 8.5C2 8.63261 2.05268 8.75979 2.14645 8.85355C2.24021 8.94732 2.36739 9 2.5 9H7.5C7.63261 9 7.75979 8.94732 7.85355 8.85355C7.94732 8.75979 8 8.63261 8 8.5C8 8.36739 7.94732 8.24021 7.85355 8.14645C7.75979 8.05268 7.63261 8 7.5 8H2.5ZM2.5 10C2.36739 10 2.24021 10.0527 2.14645 10.1464C2.05268 10.2402 2 10.3674 2 10.5C2 10.6326 2.05268 10.7598 2.14645 10.8536C2.24021 10.9473 2.36739 11 2.5 11H3.5C3.63261 11 3.75979 10.9473 3.85355 10.8536C3.94732 10.7598 4 10.6326 4 10.5C4 10.3674 3.94732 10.2402 3.85355 10.1464C3.75979 10.0527 3.63261 10 3.5 10H2.5ZM5.5 10C5.36739 10 5.24021 10.0527 5.14645 10.1464C5.05268 10.2402 5 10.3674 5 10.5C5 10.6326 5.05268 10.7598 5.14645 10.8536C5.24021 10.9473 5.36739 11 5.5 11H6.5C6.63261 11 6.75979 10.9473 6.85355 10.8536C6.94732 10.7598 7 10.6326 7 10.5C7 10.3674 6.94732 10.2402 6.85355 10.1464C6.75979 10.0527 6.63261 10 6.5 10H5.5ZM8.5 10C8.36739 10 8.24021 10.0527 8.14645 10.1464C8.05268 10.2402 8 10.3674 8 10.5C8 10.6326 8.05268 10.7598 8.14645 10.8536C8.24021 10.9473 8.36739 11 8.5 11H9.5C9.63261 11 9.75979 10.9473 9.85355 10.8536C9.94732 10.7598 10 10.6326 10 10.5C10 10.3674 9.94732 10.2402 9.85355 10.1464C9.75979 10.0527 9.63261 10 9.5 10H8.5ZM11.5 10C11.3674 10 11.2402 10.0527 11.1464 10.1464C11.0527 10.2402 11 10.3674 11 10.5C11 10.6326 11.0527 10.7598 11.1464 10.8536C11.2402 10.9473 11.3674 11 11.5 11H12.5C12.6326 11 12.7598 10.9473 12.8536 10.8536C12.9473 10.7598 13 10.6326 13 10.5C13 10.3674 12.9473 10.2402 12.8536 10.1464C12.7598 10.0527 12.6326 10 12.5 10H11.5Z"
                fill="#5e6c84"
              />
            </svg>
          </span>
        </li>
      </ul>
    </div>
  );
}
