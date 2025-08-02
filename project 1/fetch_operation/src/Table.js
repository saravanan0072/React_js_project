import React from "react"
import Row from "./Row.js"

const Table = ({items}) => {
  return (
    <section className="table-container">
      <table>
        <tbody>
          {items.map((item) => (
            <Row item={item} key={item.id} />
         ))}
        </tbody>
      </table>
    </section>
  )
}

export default Table