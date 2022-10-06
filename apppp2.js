import "./common.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const todoInitialState = { title: "", content: "" };
  const [todo, setTodo] = useState(todoInitialState);
  const [todoList, setTodoList] = useState([
    { id: uuidv4(), title: "운동", content: "스쿼트 10세트", isDone: false },
    { id: uuidv4(), title: "공부", content: "자바스크립트", isDone: false },
    { id: uuidv4(), title: "면접", content: "카카오 원격면접", isDone: true },
  ]);

  const handleClickAddTodo = () => {
    setTodoList([...todoList, { ...todo, id: uuidv4() }]);
  };

  const handleChangeInput = (event) => {
    setTodo({
      ...todo,
      [event.target.name]: event.target.value,
    });
  };

  const handleClickRemoveTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const handleClickDoneChange = (id) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          todo.isDone = !todo.isDone;
        }

        return todo;
      })
    );
  };

  return (
    <section>
      <h1 className="app-title">TODO APP</h1>

      <hr />

      <div className="todo-container">
        <div className="box-area">
          <h2>ADD TODO ⭐️</h2>
          <div className="input-controls">
            <label htmlFor="todo-title-input">제목</label>
            <input
              id="todo-title-input"
              type="text"
              name="title"
              placeholder="제목을 입력하세요.."
              onChange={handleChangeInput}
            />
          </div>

          <div className="input-controls">
            <label htmlFor="todo-content-input">내용</label>
            <input
              id="todo-content-input"
              type="text"
              name="content"
              placeholder="내용을 입력하세요.."
              onChange={handleChangeInput}
            />
          </div>

          <button
            type="button"
            className="add-btn"
            onClick={handleClickAddTodo}
          >
            등록
          </button>
        </div>

        <div className="box-area">
          <h2>Working 🔍</h2>

          <ul className="todo-list">
            {todoList
              .filter((todo) => !todo.isDone)
              .map((todo) => {
                return (
                  <li className="todo-item">
                    <strong className="todo-title">{todo.title}</strong>
                    <p className="todo-content">{todo.content}</p>
                    <div className="btn-group">
                      <button
                        type="button"
                        className="remove-btn"
                        onClick={() => handleClickRemoveTodo(todo.id)}
                      >
                        삭제
                      </button>
                      <button
                        type="button"
                        className="done-btn"
                        onClick={() => handleClickDoneChange(todo.id)}
                      >
                        완료
                      </button>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>

        <div className="box-area">
          <h2>Done 👍🏻</h2>
          <ul>
            {todoList
              .filter((todo) => todo.isDone)
              .map((todo) => {
                return (
                  <li className="todo-item">
                    <strong className="todo-title">{todo.title}</strong>
                    <p className="todo-content">{todo.content}</p>
                    <div className="btn-group">
                      <button
                        type="button"
                        className="remove-btn"
                        onClick={() => handleClickRemoveTodo(todo.id)}
                      >
                        삭제
                      </button>
                      <button
                        type="button"
                        className="cancel-btn"
                        onClick={() => handleClickDoneChange(todo.id)}
                      >
                        취소
                      </button>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default App;