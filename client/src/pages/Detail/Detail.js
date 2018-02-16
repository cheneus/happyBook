import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Detail extends Component {
  state = {
    book: {}
  };

  componentDidMount() {
    // this.lookUpDb()
  }

  lookUpDb = () => {
    API.getBook(this.props.match.params.id)
    .then(book => {
      this.setState({book: book.data});
    })
    .catch((err) => {
      console.log(err)
    })
  }
  // Add code to get the book with an _id equal to the id in the route param
  // e.g. http://localhost:3000/books/:id
  // The book id for this route can be accessed using this.props.match.params.id

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
   
              <h3>
                {this.props.book.title} 
                <h5>by {this.props.book.author}</h5>
              </h3>
        
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
              <p>{this.props.book.synopsis}</p>
            </article>
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

export default Detail;
