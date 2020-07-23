import React from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "Zrobić pranie", done: true },
  { id: 2, content: "Zrobić jedzienie", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <Container>

      <Header title="Lista zadań" />

      <Form />

      <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />

      <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />

    </Container>
  );
};

export default App;
