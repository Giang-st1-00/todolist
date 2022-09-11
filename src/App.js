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
import { editTodoInput, removeTodo, setTodoInput, addTodo } from "./store/actions";

function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;
  const [inputEdit , setInputEdit] = useState("");

  const handleAdd = () => {
    dispatch(addTodo(todoInput));
    dispatch(setTodoInput(""));
  };

  const handleRemove = (todo, index) => {
    dispatch(removeTodo(todo, index));
  };

  function focus_edit(index) {
      Object.assign(document.querySelector(`.li_job_${index} .input_job`).style , {
        display : 'flex',
      })

      document.querySelector(`.div_${index} .li_job_${index} .input_job`).focus();

      var edit = document.querySelector(`.div_${index} .edit`);
      Object.assign(edit.style , {
        display : 'none',
      })
      var ok = document.querySelector(`.div_${index} .OK`);
      Object.assign(ok.style , {
        display : 'flex',
      })

      // document.querySelector(`.input_job`).onChange = (e) => {
      //   dispatch(setTodoInput(e.target.value));
      // };
  }

  function sc_edit(index) {
    Object.assign(document.querySelector(`.li_job_${index} .input_job`).style , {
      display : 'none',
    })

    var edit = document.querySelector(`.div_${index} .edit`);
    Object.assign(edit.style , {
      display : 'flex',
    })

    var ok = document.querySelector(`.div_${index} .OK`);
    Object.assign(ok.style , {
      display : 'none',
    })

    dispatch(editTodoInput(inputEdit,index));

    setInputEdit("")
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
            // disabled
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
              className={`div_${index}`}
              key={index}
              style={{
                margin: "20px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <li
                className={`li_job_${index}`}
                style={{
                  display: 'flex',
                  backgroundColor: "#fff",
                  width: "80%",
                  fontSize: "25px",
                  padding: "10px 30px",
                  margin: "0 20px",
                  borderRadius: "20px",
                  position : 'relative',
                }}
              >
                {todo}  
                  <input 
                    className={`input_job`}
                    style={{
                      position : 'absolute',
                      top : '0',
                      left : '0',
                      display: 'none',
                      backgroundColor: "#fff",
                      width: "80%",
                      fontSize: "25px",
                      padding: "10px 30px",
                      borderRadius: "20px",
                    }}
                    value = {inputEdit}
                    onChange = {(e) => setInputEdit(e.target.value)}
                  />
              </li>
                <div onClick={() => sc_edit(index)} className="OK" style={{borderRadius : '20px',backgroundColor : 'white',margin : '0 20px',padding : '0 30px',fontSize : '25px',display: 'none',alignItems : 'center'}}>
                  <div>
                    OK
                  </div>
                </div>
                <div style={{display : 'flex',backgroundColor : 'white', borderRadius : '10px', justifyContent: 'center', alignItems : 'center'}}>
                    <div className="edit" onClick={() => focus_edit(index)} style={{padding : '0 20px',fontSize : '25px'}}>
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
