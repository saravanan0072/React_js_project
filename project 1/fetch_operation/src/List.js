import react from "react"
import ListItem from "./ListItem.js";

const List = ({items}) => {
  return (
    <ul>
     
      {items.map((item) => (<ListItem item={item} key={item.id} />))}
    </ul>
  )
}

export default List