export const initData = {
  boards: [
    {
      id: "board-1",
      columnOrder: ["column-1", "column-2", "column-3"],
      columns: [
        {
          id: "column-1",
          boardId: "board-1",
          title: "Todo 1",
          cardOrder: [
            "card-1",
            "card-2",
            "card-3",
            "card-4",
            "card-5",
            "card-6",
            "card-7",
          ],
          cards: [
            {
              id: "card-1",
              boardId: "board-1",
              columnId: "column-1",
              title: "Title of card 1",
            },
            {
              id: "card-2",
              boardId: "board-1",
              columnId: "column-1",
              title: "Title of card 2",
            },
            {
              id: "card-3",
              boardId: "board-1",
              columnId: "column-1",
              title: "Title of card 3",
            },
            {
              id: "card-4",
              boardId: "board-1",
              columnId: "column-1",
              title: "Title of card 4",
            },
            {
              id: "card-5",
              boardId: "board-1",
              columnId: "column-1",
              title: "Title of card 5",
            },
            {
              id: "card-6",
              boardId: "board-1",
              columnId: "column-1",
              title: "Title of card 6",
            },
            {
              id: "card-7",
              boardId: "board-1",
              columnId: "column-1",
              title: "Title of card 7",
            },
          ],
        },
        {
          id: "column-2",
          boardId: "board-1",
          title: "Todo 2",
          cardOrder: ["card-8", "card-9", "card-10", "card-11"],
          cards: [
            {
              id: "card-8",
              boardId: "board-1",
              columnId: "column-2",
              title: "Title of card 8",
            },
            {
              id: "card-9",
              boardId: "board-1",
              columnId: "column-2",
              title: "Title of card 9",
            },
            {
              id: "card-10",
              boardId: "board-1",
              columnId: "column-2",
              title: "Title of card 10",
            },
            {
              id: "card-11",
              boardId: "board-1",
              columnId: "column-2",
              title: "Title of card 11",
            },
          ],
        },
        {
          id: "column-3",
          boardId: "board-1",
          title: "Todo 3",
          cardOrder: ["card-12", "card-13", "card-14"],
          cards: [
            {
              id: "card-12",
              boardId: "board-1",
              columnId: "column-3",
              title: "Title of card 12",
            },
            {
              id: "card-13",
              boardId: "board-1",
              columnId: "column-3",
              title: "Title of card 13",
            },
            {
              id: "card-14",
              boardId: "board-1",
              columnId: "column-3",
              title: "Title of card 14",
            },
          ],
        },
      ],
    },
  ],
};
