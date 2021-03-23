import { Box, Container, Paper, Typography } from "@material-ui/core";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";

// console.log(typeof uuid());
const data = [
  {
    id: 1,
    name: "item one",
  },
  {
    id: 2,
    name: "item two",
  },
  {
    id: 3,
    name: "item three",
  },
  {
    id: 4,
    name: "item four",
  },
  {
    id: 5,
    name: "item five",
  },
  {
    id: 6,
    name: "item six",
  },
];

const DragAndDrop = () => {
  const [list, setList] = useState(data);

  const onEnd = (result) => {
    console.log(result);
  };

  return (
    // <Container component={Box} m={3} maxWidth="sm">
    //   <Paper component={Box} p={2}>
        <DragDropContext onDragEnd={onEnd}>
          <Droppable droppableId="12345">
            {(provided, snapshot) => (
              <div ref={provided.innerRef}>
                {list.map((item, index) => (
                  <Draggable draggableId={item.id} key={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div>{item.name}</div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
    //   </Paper>
    // </Container>
  );
};

export default DragAndDrop;
