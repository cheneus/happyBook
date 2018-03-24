import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import ListItem from "../../components/List/ListItem";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";
import axios from "axios";

class Search extends Component {
  state = {
    books: [],
    q: ""
  };

  componentWillMount() {
    this.searchBooks;
  }

  searchBooks = () => {
    if (this.state.q.length >= 3) {
      axios
        .get("https://www.googleapis.com/books/v1/volumes", {
          params: {
            q: this.state.q,
            maxResults: 20,
            printType: "books"
          }
        })
        // API.searchBooks({query:this.state.q})
        .then(res => {
          console.log("IS THIS WORKING");
          console.log(res);
          this.setState({ books: res.data.items });
        })
        .catch(err => console.log(err));
    }
  };
  // Add code to get the book with an _id equal to the id in the route param
  // e.g. http://localhost:3000/books/:id
  // The book id for this route can be accessed using this.props.match.params.id

  List = () => {
    const eachBook = this.state.books.map(x => {
      console.log(x);
      return (
        <li key={x.id} books={x}>
          <strong>
            {x.volumeInfo.title} by {x.volumeInfo.authors}
          </strong>
        </li>
      );
    });
    return <ul>{eachBook}</ul>;

    // return "test"
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-10 md-offset-1">
            <div>
              <form>
                <Input
                  onChange={event => {
                    this.setState({ q: event.target.value });
                    // this.searchBooks();
                  }}
                />
                <FormBtn disabled={!this.state.q} onClick={this.searchBooks}> Search </FormBtn>
              </form>
              <h1>Search Results</h1>
              {/* <p>{this.state.books}</p> */}

              {this.state.books.length ? (
                <ul>{this.List()}</ul>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Authors</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
