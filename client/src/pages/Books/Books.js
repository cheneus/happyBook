import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import Detail from "../Detail"
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import List from "../../components/List/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: "",
    selectedBook: null
  };

  componentDidMount() {
    console.log(this.props.match.params.id)
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    console.log("delete " + id);
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  selectBook = id => {
    console.log("select " + id);
    this.setState({bookSelected: id})
  }

  detailDetect = () => {
    if (this.state.selectedBook === null) {
     return (
      <form>
        <Input
          value={this.state.title}
          onChange={this.handleInputChange}
          name="title"
          placeholder="Title (required)"
        />
        <Input
          value={this.state.author}
          onChange={this.handleInputChange}
          name="author"
          placeholder="Author (required)"
        />
        <TextArea
          value={this.state.synopsis}
          onChange={this.handleInputChange}
          name="synopsis"
          placeholder="Synopsis (Optional)"
        />
        <FormBtn
          disabled={!(this.state.author && this.state.title)}
          onClick={this.handleFormSubmit}
        >
          Submit Book
        </FormBtn>
      </form>
      )
    } 
    else {
      return (
        <Detail book = {this.state.selectedBook} />
      )
    }
  }


  
  render() {
    return (
      
      <Container fluid>
        <Row>
          <Col size="md-6">
          <Jumbotron>
            <h2>What Books Should I Read?</h2>
          </Jumbotron>
            {this.detailDetect()}
          </Col>
          <Col size="md-6 sm-12">
          <Row>
            <Jumbotron>
              <h2>Books On My List</h2>
            </Jumbotron>
            <div>
            {this.state.books.length ? (
              <List books = {this.state.books} onBookSelect = {selectedBook => this.setState({selectedBook})}/>
            ) : (
              <h3>No Results to Display</h3>
            )}
            </div>
            </Row>
          </Col>

        </Row>
      </Container>
    );
  }
}

export default Books;
