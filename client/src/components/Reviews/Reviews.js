import React, { Component } from "react";
import API from "../../utils/API";
import "./Reviews.css";

class Reviews extends Component {
  state = {
    shops: [],
    selectedShop: "",
    reviewbody: "",
    reviewer: "",
    reviewResults: []
  };

  componentDidMount() {
    API.getCoffeeShop()
      // .then(res => res)
      .then(res => {
        console.log(res);
        let shopNames = res.data.map(shop => {
          return { value: shop.name, display: shop.name };
        });
        this.setState({
          shops: [{ value: "", display: "(Select a coffee shop)" }].concat(
            shopNames
          ),
          selectedShop: ""
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  //need to figure this: if coming from a link that contains a name param, set selected shop to that in the state.

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="App-header">
        <form className="form-group" name="reviewForm">
          <label className="CCSInput">
            Choose a Coffee Shop
            <select
              className="CCSSelect"
              name="selectedShop"
              value={this.state.selectedShop}
              onChange={this.handleInputChange}
            >
              {this.state.shops.map(shop => (
                <option key={shop.value} value={shop.value}>
                  {shop.display}
                </option>
              ))}
            </select>
          </label>
          <br />
          <label className="Review">
            Write your review here
            <textarea
              className="ReviewTextArea"
              name="reviewbody"
              value={this.state.reviewbody}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label className="YourNameLabel">
            Your Name
            <input
              className="YourNameInput"
              type="text"
              name="reviewer"
              value={this.state.reviewer}
              onChange={this.handleInputChange}
            />
          </label>
          <button
            className="SubmitButt"
            type="submit"
            onClick={this.handleFormSubmit}
          >
            Submit
          </button>
        </form>
        <div className="results">No reviews yet.</div>
      </div>
    );
  }
}

export default Reviews;
