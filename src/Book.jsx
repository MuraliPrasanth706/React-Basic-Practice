import React from "react";
import { ReactDOM } from "react";

const BestSellingBook = (/*props*/ { images, title, author }) => {
  // const { images, title, author } = props;
  const Buybutton = () => {
    console.log(title, images, author);
  };
  return (
    <article className="booklist">
      <img src={images} />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={Buybutton}>
        Buy Link
      </button>
    </article>
  );
};

export default BestSellingBook;
