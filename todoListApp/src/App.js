// import logo from './logo.svg';
// import './App.css';

import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
// import "./App.css";
import './index.css'  
import { useState } from "react";

import AddItem from "./AddItem.js";
import SearchItem from "./SearchItem.js";


function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("todo_list"))
  );
  
  //additem 
  const [newItem, setNewItem] = useState("")  

  //search item use state

  const [search,setSearch]=useState("")
  
  // create add item 
  const addItem = (item) => {
      const id = items.length ?  items[items.length-1].id+1  : 1
      const addNewItem = { id, checked: false, item }
      const listItems = [...items, addNewItem]
      setItems(listItems)
     localStorage.setItem("todo_list", JSON.stringify(listItems))
  }
  

  
    const handleKey = (id) => {
    
      const listItems = items.map((item) =>item.id==id? {...item,checked:!item.checked}:item )
      setItems(listItems);
      localStorage.setItem("todo_list",JSON.stringify(listItems))
    }
    
    const handleDelete = (id) => {
      const listItems = items.filter((item) => item.id !== id)
      
      setItems(listItems);
      localStorage.setItem("todo_list",JSON.stringify(listItems))
    }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(newItem)
    //add item
    
    addItem(newItem)

    setNewItem("")
   }
    
   return (
     <div className="App">
       <Header title="list app" />

       <AddItem
         newItem={newItem}
         setNewItem={setNewItem}
         handleSubmit={handleSubmit}
       />

       <SearchItem search={search}
        setSearch={setSearch} />

       <Content
         items={items.filter((item) => item.item.toLowerCase().includes(search.toLowerCase()))}
         handleKey={handleKey}
         handleDelete={handleDelete}
       />

       <Footer items={items} />
     </div>
   );

     
}

export default App;



