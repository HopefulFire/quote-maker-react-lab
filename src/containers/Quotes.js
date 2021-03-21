import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { upvoteQuote } from "../actions/quotes"

class Quotes extends Component {
  render() {
    const quotes = this.props.quotes.map((quote) => {
      return <QuoteCard key={quote.id} upvoteQuote={this.props.upvoteQuote} quote={quote} />
    })
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {quotes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, {upvoteQuote})(Quotes);
