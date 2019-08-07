import React, { Component } from "react";
import API from "../../utils/API";

class Reviews extends Component {
  state = {
    shops: [],
    selectedShop: "",
    reviewbody: "",
    reviewer: "",
    reviewResults: [],
    ifReviews: false
  };

  componentDidMount() {
    API.getCoffeeShop()
      .then(res => {
        // console.log(res);
        let shopNames = res.data.map(shop => {
          return { value: shop.name, display: shop.name, id: shop._id };
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
    // if(this.state.selectedShop) {
    //   getReviews();
    // }
  };

  handleFormSubmit = event => {
    event.preventDefault();
    //form validations will have to happen here
    API.createReview({
      coffeeShopId: "",
      reviewer: this.state.reviewer,
      review_text: this.state.reviewbody,
    })
    console.log(this.state);
  };

  getReviews = () => {
    API.getShopReviewsByName(this.state.selectedShop)
    .then(res => { this.setState({
      reviewResults: res.data
    })
      
    })};


  render() {
    return (
      <div className="App-header">
        <form className="form-group" name="reviewForm">
          <label>
            Choose a Coffee Shop: 
            <select
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
          <label>
            Write your review here
            <textarea
              name="reviewbody"
              value={this.state.reviewbody}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Your Name
            <input
              type="text"
              name="reviewer"
              value={this.state.reviewer}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit" onClick={this.handleFormSubmit}>
            Submit
          </button>
        </form>
        <div className="results">
        { this.state.reviewResults.length > 0 ?  this.state.reviewResults.map(revRes => (
          <div className="container">
            <h4 key={revRes._id}>{revRes.reviewer}</h4>
            <div>{revRes.date}</div>
            <div>{revRes.review_text}</div>
          </div>
        )) : 
          "No reviews yet."
        }
        </div>
       
      </div>
    );
  }
}

export default Reviews;
