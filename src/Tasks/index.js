import React from 'react';
import "./style.css";

const Tasks = (props) => (
    <ul className="taskList">
        {props.tasks.map(task => (
            <li className={`taskList__element ${task.done && props.hideDone ? "taskList__element--hide" : ""}`}>

                {
                    <>
                        <button className="taskList__button taskList__button--green">
                            {`${task.done ? "✔" : ""}`}
                        </button>

                        <span className={`"taskList__content" ${task.done ? "taskList__content--crossed" : ""} `}>
                            {task.content}
                        </span>

                        <button className="taskList__button taskList__button--red">
                            🗑
                        </button>
                    </>
                }

            </li>
        ))}
    </ul>
);

export default Tasks;