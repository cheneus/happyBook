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
        this.setState({ book: book.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div style={{ padding: "1em" }}>
        <Jumbotron>
          <blockquote>
            <h2>{this.props.book.title}</h2>
            <footer>By {this.props.book.author}</footer>
          </blockquote>
        </Jumbotron>
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
            <button className="btn btn-info" onClick={this.props.doneFn}>
              Done
            </button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Detail;
