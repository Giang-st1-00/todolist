import logo from "./logo.svg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  useContext,
  useMemo,
  useReducer,
  useRef,
  useState,
  useEffect,
} from "react";
// import Content from './Content';
import "./App.css";
import { Context } from "./store/Context";
import { useStore } from "./store/hooks";
import { removeTodo, setTodoInput, addTodo } from "./store/actions";

function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;

  const handleAdd = () => {
    dispatch(addTodo(todoInput));
    dispatch(setTodoInput(""));
  };

  const handleRemove = (todo, index) => {
    dispatch(removeTodo(todo, index));
  };

  function focus_edit(index) {
    console.log(index);
    var input_job = document.querySelector(`.input_job${index}`);
    Object.assign(input_job.style , {
        
    })
    document.querySelector(`.input_job${index}`).focus();
  }

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "10% 0",
        backgroundImage: "linear-gradient(#ffb0b0, #e3e39a)",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <input
            style={{
              fontSize: "25px",
              padding: "10px",
              margin: "0 20px",
              borderRadius: "20px",
            }}
            value={todoInput}
            placeholder="Enter todo..."
            onChange={(e) => {
              dispatch(setTodoInput(e.target.value));
            }}

          />
          <button
            onClick={handleAdd}
            style={{
              fontSize: "25px",
              padding: "10px",
              margin: "0 20px",
              borderRadius: "20px",
            }}
          >
            ADD
          </button>
        </div>
        <div>
          {todos.map((todo, index) => (
            <div
              key={index}
              style={{
                margin: "20px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <input 
              className={`input_job${index}`}
              style={{
                listStyle: "none",
                backgroundColor: "#fff",
                width: "80%",
                fontSize: "25px",
                padding: "10px 30px",
                margin: "0 20px",
                borderRadius: "20px",
              }}
              value={todo}
            //   disabled
              />
                <div style={{backgroundColor : 'white', borderRadius : '10px',display : 'flex', justifyContent: 'center', alignItems : 'center'}}>
                    <div onClick={() => focus_edit(index)} style={{padding : '0 20px',fontSize : '25px'}}>
                        EDIT
                    </div>
                </div>
              <div
                onClick={() => handleRemove(todo, index)}
                style={{ display: "flex", alignItems: "center" ,padding: "0 20px"}}
              >
                <i
                  style={{ fontSize: "25px" }}
                  class="fa-solid fa-circle-xmark"
                ></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
