import { React, useState } from "react";
import "./TodoListProject.css";

function TodoListProject() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const Submit = () => {
    setData([...data, { text }]);
    setText("");
  };

  const Remove = (index) => {
    data.splice(index, 1);
    setData([...data]);
  };

  return (
    <>
      <div className="heading">
        <h1>Todo List</h1>
      </div>
      <div className="flex">
        <input
          className="text"
          type="text"
          placeholder="Enter Some Text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button className="add_btn" onClick={Submit}>
          +
        </button>
      </div>
      {data.map((element, index) => {
        return (
          <div className="flex" key={index}>
            <h4 className="my_heading" index={index}>
              {element.text}
            </h4>
            <button className="add_btn btn" onClick={() => Remove(index)}>
              X
            </button>
          </div>
        );
      })}
    </>
  );
}

export default TodoListProject;
