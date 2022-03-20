import React from "react";
import Column from "./column";
import { initData } from "../../action/initData";
import { useEffect, useState } from "react";
import { Container, Draggable } from "react-smooth-dnd";
import { applyDrag } from "../../utilities/dragDrop";
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
    let newColumns = [...columns];
    newColumns = applyDrag(newColumns, dropResult);
    let newBoard = { ...board };
    newBoard.columnOrder = newColumns.map((column) => column.id);
    newBoard.columns = newColumns;
    setBoard(newBoard);
    setColumns(newColumns);
  };

  const onCardDrop = (dropResult, columnId) => {
    if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
      console.log("card ", dropResult);

      let newColumns = [...columns];

      let currentColumn = newColumns.find((column) => column.id === columnId);
      currentColumn.cards = applyDrag(currentColumn.cards, dropResult);
      currentColumn.cardOrder = currentColumn.cards.map((card) => card.id);
      setColumns(newColumns);
    }
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
              <Column column={item} onCardDrop={onCardDrop} />
            </Draggable>
          ))}
      </Container>
    </div>
  );
}
