import React from 'react';
import "./style.css";

const Buttons = (props) => {
    if (props.tasks.length === 0) {
        return (
            <div className="taskSection">
                <h2 className="container__header container__header--white">Lista zadań</h2>
            </div>
        );
    };

    return (
        <div className="taskSection">
            <h2 className="container__header container__header--white">Lista zadań</h2>
            <ul className="buttonList">

                <li className="buttonList__item">
                    <button className="buttonList__button">
                        {props.hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
                    </button>
                </li>

                <li className="buttonList__item">
                    <button
                        className="buttonList__button"
                        disabled={props.tasks.every(({ done }) => done)}>
                        Ukończ wszystkie
                        </button>
                </li>

            </ul>
        </div>
    );
};

export default Buttons;