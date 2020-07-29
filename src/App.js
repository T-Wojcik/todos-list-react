import React, { useState } from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "Zrobić pranie", done: false },
  { id: 2, content: "Zrobić jedzienie", done: true },
];

const hideDone = false;

function App() {


  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  }

  return (
    <Container>

      <Header title="Lista zadań" />

      <Form />

      <Buttons
        tasks={tasks}
        hideDone={hideDone}
        toggleHideDone={toggleHideDone}
      />

      <Tasks tasks={tasks} hideDone={hideDone} />

    </Container>
  );
};

export default App;
