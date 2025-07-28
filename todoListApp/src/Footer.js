import React from "react";
const Footer = ({items}) => {
    const year = new Date();
    return (
      <footer>
        {/* Copyright &copy; {year.getFullYear()} */}
        {items.length} List {items.length==1?"item":"items"}
      </footer>
    );
};

export default Footer;
