import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";



const Home = () => {
  const [todo, setTodo] = useState();
  const [todoList, setTodoList] = useState([
    {title: "리액트를 배워봅시다"},
    {title: "리액트를 배워봅시다"},
    {title: "리액트를 배워봅시다"},
 ]);
  
  const handleChangeTodo = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };





  const handleClickAddTodo = () => {
    const newTodoList = [...todoList,{...todo}];
    setTodoList(newTodoList);
  };
  

 




  

  return (
    <div className="App">
      <div className='main-bg'>
        <div className='title-bg'>
          <h3>My Todo List</h3><h3>react</h3>
        </div>
        <div className='text-button'>
        <input type="text" name="title" onChange={handleChangeTodo} />

          <button type="button" onClick={handleClickAddTodo}>
            등록
          </button>


        </div>
        <div>
          <h1>
            working...
          </h1>
          <ul >
            {todoList
              .filter((item) => !item.isdone)
              .map(function (item){
                return (
                  <li className='propsbg'>
                     <strong>{item.title}</strong>
                    <p>{item.content}</p>
                    <div>
                 
                        
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      
      

        </div>
        
   
      
        


      </div>
      

       

  
  );
};
export default Home;




















