import React from "react";

const Header = ({title="list Menu"}) => {
  // const headerStyle = {
  //   backgroundColor: "blue",
  //   color: "white"

  // };
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};
// Header.defaultProps = {
//   title: "To do list app"
// };
export default Header;
