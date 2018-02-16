import React, { Component } from "react";
import { Link } from "react-router-dom";
import ListItem from './ListItem';
import DeleteBtn from '../DeleteBtn/DeleteBtn';
import "./List.css";

const List = (props) => {
  const eachBook = props.books.map(book => {
    return (
      // <ListItem key={book._id} book={book}>
      <Link to={"/books/" + book._id}>
     <ListItem key={book._id} book={book} onBookSelect = {props.onBookSelect.bind(this)}>
       
         <strong>
           {book.title} by {book.author}
         </strong>
   
       <DeleteBtn onClick={() => this.deleteBook(book._id)} />
     </ListItem>
     </Link>
    )
   })
   return (
    <ul className="list-group">
             {eachBook}
           </ul>
   )
}

export default List;