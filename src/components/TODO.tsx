import { useState } from "react";

const TODO = () => {
    const [task, setTask] = useState("");
    const [TODO_list, setTODO_list] = useState([""]);

    const handleSubmit = () => {
        console.log("Submitted");
    };

    return (
        <>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    if (task.length != 0) {
                        setTODO_list([...TODO_list, task]);
                    }
                    setTask("");
                }}
            >
                <input
                    type="text"
                    value={task}
                    className="form-control"
                    placeholder="Task"
                    onChange={(e) => setTask(e.target.value)}
                ></input>
                <br />
                <button type="submit" className="btn btn-primary">
                    Add to TODO list
                </button>
            </form>

            <ul className="list-group">
                {TODO_list.map(
                    (currtask, index) =>
                        currtask.length != 0 && (
                            <li className={"list-group-item"} key={currtask}>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="flexCheckDefault"
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault"
                                >
                                    {currtask}
                                </label>
                                <button
                                    className="btn btn-danger"
                                    onClick={() =>
                                        setTODO_list(
                                            TODO_list.filter(
                                                (task) => task != currtask
                                            )
                                        )
                                    }
                                >
                                    Delete Task
                                </button>
                            </li>
                        )
                )}
            </ul>
        </>
    );
};

export default TODO;
