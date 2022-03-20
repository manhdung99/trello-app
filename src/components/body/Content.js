import React from "react";
import Column from "./column";
import { initData } from "../../action/initData";
import { useEffect, useState } from "react";
import { Container, Draggable } from "react-smooth-dnd";
export default function Content() {
  const [board, setBoard] = useState({});
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const boardInitData = initData.boards.find((item) => item.id === "board-1");
    if (boardInitData) {
      setBoard(boardInitData);
      //Sort Columns
      boardInitData.columns.sort(
        (a, b) =>
          boardInitData.columnOrder.indexOf(a.id) -
          boardInitData.columnOrder.indexOf(b.id)
      );
      setColumns(boardInitData.columns);
    }
  }, []);

  const onColumnDrop = (dropResult) => {
    console.log("dropresult ", dropResult);
  };

  return (
    <div className="flex gap-x-[10px]">
      <Container
        orientation="horizontal"
        onDrop={onColumnDrop}
        getChildPayload={(index) => columns[index]}
        dragHandleSelector=".column-drag-handle"
        dropPlaceholder={{
          animationDuration: 150,
          showOnTop: true,
          className: "column-drop-preview",
        }}
      >
        {columns &&
          columns.length > 0 &&
          columns.map((item) => (
            <Draggable key={item.id}>
              <Column column={item} />
            </Draggable>
          ))}
      </Container>
    </div>
  );
}
