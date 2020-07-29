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

const hideDone = false;

function App() {
  return (
    <Container>

      <Header title="Lista zadań" />

      <Form />

      <Buttons tasks={tasks} hideDone={hideDone} />

      <Tasks tasks={tasks} hideDone={hideDone} />

    </Container>
  );
};

export default App;
