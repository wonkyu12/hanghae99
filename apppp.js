// import React, { useState } from "react";

// 1. useState 를 사용하여 할일 목록 만들기
// 2. 할일 목록을 map 함수를 사용하여 렌더링하기
// 3. 등록 버튼을 통해 새로운 할일 목록 추가하기

// const Home = () => {
//   const [text, setText] = useState("");
//   const [todoList, setTodoList] = useState([
//     "데이트",
//     "헬스",
//     "공부",
//     "여행",
//     "업무",
//   ]);

//   const handleClickAdd = () => {
//     const newTodoList = [...todoList, text];
//     setTodoList(newTodoList);
//   };

//   const handleChangeText = (e) => {
//     setText(e.target.value);
//   };

//   return (
//     <div>
//       <input type="text" onChange={handleChangeText} />
//       <button type="button" onClick={handleClickAdd}>
//         등록
//       </button>
//       <ul>
//         {todoList.map(function (item) {
//           return <li>{item}</li>;
//         })}
//       </ul>
//     </div>
//   );
// };

// export default Home;


// import React, { useState } from "react";

// // 1. useState 를 사용하여 할일 목록 만들기
// // 2. 할일 목록을 map 함수를 사용하여 렌더링하기
// // 3. 등록 버튼을 통해 새로운 할일 목록 추가하기

// const Home = () => {
//   const [todoList, setTodoList] = useState([
//     {
//       title: "헬스",
//       content: "스쿼트",
//       isDone: false,
//     },
//     {
//       title: "공부",
//       content: "자바스크립트",
//       isDone: true,
//     },
//     {
//       title: "데이트",
//       content: "에버랜드",
//       isDone: false,
//     },
//   ]);

//   return (
//     <>
//       <div>
//         <h1>미완료</h1>
//         {todoList
//           .filter((todo) => !todo.isDone)
//           .map((todo) => {
//             return (
//               <div>
//                 <strong>{todo.title}</strong>
//                 <p>{todo.content}</p>
//               </div>
//             );
//           })}
//       </div>
//       <div>
//         <h1>완료</h1>
//         {todoList
//           .filter((todo) => todo.isDone)
//           .map((todo) => {
//             return (
//               <div>
//                 <strong>{todo.title}</strong>
//                 <p>{todo.content}</p>
//               </div>
//             );
//           })}
//       </div>
//     </>
//   );
// };

// export default Home;


import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [todo, setTodo] = useState({ title: "", content: "" });
  const [todoList, setTodoList] = useState([
    { id: uuidv4(), title: "제목", content: "상세내용", isDone: false },
    { id: uuidv4(), title: "제목", content: "상세내용", isDone: true },
    { id: uuidv4(), title: "제목", content: "상세내용", isDone: false },
  ]);

  const handleChangeTodo = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickAddTodo = () => {
    const newTodoList = [...todoList, { ...todo, isDone: false, id: uuidv4() }];
    setTodoList(newTodoList);
  };

  const handleClickCompleteState = (id) => {
    // 현재 클릭한 할일 -> id 로 구별 할 수 있다.
    // isDone 이 false 이면 true 로 변경한다.
    //  현재 isDone의 상태값에 반대로 변경한다.
    const newTodoList = todoList.map((item) => {
      if (item.id === id) {
        item.isDone = !item.isDone;
      }

      return item;
    });
    setTodoList(newTodoList);
  };

  return (
    <>
      <div>
        <h1>Todo List</h1>
        <input type="text" name="title" onChange={handleChangeTodo} />
        <input type="text" name="content" onChange={handleChangeTodo} />
        <button type="button" className="add-btn" onClick={handleClickAddTodo}>
          등록
        </button>
        <div>
          <h2>working</h2>
          <ul>
            {todoList
              .filter((item) => !item.isDone)
              .map((item) => {
                return (
                  <li>
                    <strong>{item.title}</strong>
                    <p>{item.content}</p>
                    <button
                      type="button"
                      className="done-btn"
                      onClick={() => handleClickCompleteState(item.id)}
                    >
                      완료
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>

        <div>
          <h2>done</h2>
          <ul>
            {todoList
              .filter((item) => item.isDone)
              .map((item) => {
                return (
                  <li>
                    <strong>{item.title}</strong>
                    <p>{item.content}</p>
                    <button
                      type="button"
                      className="delete-btn"
                      onClick={() => handleClickCompleteState(item.id)}
                    >
                      취소
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;


