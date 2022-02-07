import React from "react";
import ReactDOM from "react-dom";
//css
import "./index.css";

import { data } from "./books";
import BestSellingBook from "./Book"; 

//ssetup variables

function AmazonBookList() {
  return (
    <section className="book">
      {data.map((book) => {
        const { images, title, author } = book;
        return <BestSellingBook key={book.id} {...book}></BestSellingBook>;
      })}
    </section>
  );
}

ReactDOM.render(<AmazonBookList />, document.getElementById("root"));
