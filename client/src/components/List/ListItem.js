import React, { Component } from "react";
import Books from "../../pages/Books/Books";


class ListItem extends Component {
  bookSelected = () => {
  this.props.onBookSelect(this.props.book)
  console.log(this.props.book)
  }

  render() {
    return(
      <li className="list-group-item" onClick = {this.bookSelected}>
         {this.props.children}
       </li>
    )
  }
}
// export default ListItem;


///// finals
//  const ListItem = (props, onBookSelect) => {
//   return (
//          <li className="list-group-item" onClick = {()=> {
//              // console.log(props.book._id)
//          }
//          }>
//               {props.children}
//               </li>
//      			);
// }

export default ListItem
//  
