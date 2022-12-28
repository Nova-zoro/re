import React, { useState } from 'react';
import Todos from './component/Todos';
import Header from './component/Header';
import Footer from './component/Footer';


function App() { 
const onDelete = (todo)=>{
  setTodos(todos.filter((e) => {
    return e!==todo;
  } ))
}
const [todos , setTodos] = useState(  [
{ 
  sno:1,
  title:"GO to the market",
  desc:"you need to go to the market"
}, 
  {
  sno:2,
  title:"GO to the mall",
  desc:"you need to go to the market"
},    
{ 
  sno:3,
  title:"GO to the mstred",
  desc:"you need to go to the market"
}, 
])
return (
  <>     
    <Header title="My Todo List"/>
    <Todos tod={todos} onDelete={onDelete}/>
    <Footer />
  </>
);
}

export default App;