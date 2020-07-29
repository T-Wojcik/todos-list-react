import React from 'react';
import "./style.css";

const Tasks = ({tasks, hideDone, removeTask, toggleTaskDone}) => (
    <ul className="taskList">
        {tasks.map(task => (
            <li className={`taskList__element ${task.done && hideDone ? "taskList__element--hide" : ""}`}>

                {
                    <>
                        <button 
                        onClick={() => toggleTaskDone(task.id)}
                        className="taskList__button taskList__button--green">
                            {`${task.done ? "✔" : ""}`}
                        </button>

                        <span className={`"taskList__content" ${task.done ? "taskList__content--crossed" : ""} `}>
                            {task.content}
                        </span>

                        <button 
                        onClick={() => removeTask(task.id)}
                        className="taskList__button taskList__button--red">
                            🗑
                        </button>
                    </>
                }

            </li>
        ))}
    </ul>
);

export default Tasks;