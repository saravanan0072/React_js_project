// import logo from './logo.svg';
// import './App.css';

import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
// import "./App.css";
import './index.css'  
import { useState ,useEffect} from "react";

import AddItem from "./AddItem.js";
import SearchItem from "./SearchItem.js";

import { CgSpinner } from "react-icons/cg";
import apiRequest from "./apiRequest.js";


function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");  
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const[isLoading, setIsLoading]= useState(true)


  const API_URL = 'http://localhost:3500/items';
  
  
 
  

  
  //see that useEffect hook  and read the data in json-server
  
  useEffect(() => {
    // side affect action 
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if(!response.ok) throw new Error(" Data not found");
        const listItems = await response.json();
        // console.log(listItems)
       
        setItems(listItems)
        setFetchError(null)
      }
      catch (err) {
        // console.log(err.stack)
        setFetchError(err.message)
        
      }
      finally {
        setIsLoading(false)
      }
    }
     setTimeout(() => {
       (async()=> { await fetchItems() }) ();
     }, 2000);
    
  },[])


  

  // create add item  and item is post operation
  const addItem = async(item) => {
      const id = items.length ?  items[items.length-1].id+1  : 1
      const addNewItem = {  checked: false, item }
      const listItems = [...items, addNewItem]
      // setItems(listItems)
    //  localStorage.setItem("todo_list", JSON.stringify(listItems))

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(addNewItem)
    }
    const result = await apiRequest(API_URL, postOptions)
    if(result) setFetchError(result)
    
    
  }
  
   // update and store the json server file 
  
    const handleKey = async (id) => {
    
      const listItems = items.map((item) =>item.id===id? {...item,checked:!item.checked}:item )
      setItems(listItems);
      // localStorage.setItem("todo_list",JSON.stringify(listItems))
      const myItem = listItems.filter((item) => item.id == id)
      // console.log(myItem)
      
      const updateOptions = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ checked: myItem[0].checked}),
      };
      const reqChange = `${API_URL}/${myItem[0].id}`;
      const result = await apiRequest(reqChange , updateOptions);
      if (result) setFetchError(result)
    }
    
    // delete item from json server
    
    
    const handleDelete = async (id) => {
      const listItems = items.filter((item) => item.id !== id)
      // console.log(listItems)
      setItems(listItems);
      // localStorage.setItem("todo_list",JSON.stringify(listItems))
    
      // console.log(myItem)
      const deleteOptions = {
        method: "DELETE"
       
      }
      const reqDelete = `${API_URL}/${id}`;
      const result = await apiRequest(reqDelete , deleteOptions);
      if (result) setFetchError(result)
     
      
    }
    
    //  unused for current in search------------------------
    // const handleSearch = (e) => {
    //   e.preventDefault()
    //   const searchItems = items.filter((item) => item.item.toLowerCase().includes(search.toLowerCase()))
    //   setItems(searchItems)
    //   // localStorage.setItem("todo_list",JSON.stringify(searchItems))
    //   setSearch(e.target.value)
    // }--------------------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(newItem)
    //add item
    
    addItem(newItem)

    setNewItem("")
  }
  
  //search content clear

  const handleSearchClear = (e) => {
    e.preventDefault()
    setSearch("")
    
  }
    
   return (
     <div className="App">
       <Header title="list app" />

       <AddItem
         newItem={newItem}
         setNewItem={setNewItem}
         handleSubmit={handleSubmit}
       />

       <SearchItem
         search={search}
         setSearch={setSearch}
         handleSearchClear={handleSearchClear}
       />
       <main>
         {isLoading && (
           <p className="spinner">
             <CgSpinner />
           </p>
         )}
         {fetchError && <p>{`Error: ${fetchError}`}</p>}
         {!isLoading && !fetchError && (
           <Content
             items={items.filter((item) =>
               item.item.toLowerCase().includes(search.toLowerCase())
             )}
             handleKey={handleKey}
             handleDelete={handleDelete}
           />
         )}
       </main>

       <Footer items={items} />
     </div>
   );

     
  }

export default App;



