import React, { Component } from "react";
import API from "../../utils/API";

class Reviews extends Component {
  state = {
    shops: [],
    selectedShop: "",
    reviewbody: "",
    reviewer: "",
    reviewResults: [],
    selectedShopId: "",
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
          selectedShop: "",
          selectedShopId: "",
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  //need to figure this: if coming from a link that contains a name param, set selected shop to that in the state.

  


  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value,
    })};

  handleNameSelect = event => {
    const {name, value, key} = event.target;
    this.setState({
      [name]: value,
      selectedShopId: key 
    })};
  
    
  

  handleFormSubmit = event => {
    event.preventDefault();
    //form validations will have to happen here
    API.createReview({
      coffeeShopId: this.state.selectedShopId,
      coffeeShopName: this.state.selectedShop,
      reviewer: this.state.reviewer,
      review_text: this.state.reviewbody,
    })
    .then(
      this.getReviews()
    )
    .then(
      this.setState({
        reviewbody: "",
        reviewer: ""
      })
    )
    console.log(this.state);
  };

  getReviews = () => {
    const shopName = this.state.selectedShop;
    API.getShopReviewsByName(shopName)
    .then(res => { this.setState({
      reviewResults: [res.data]
    }, console.log(res))
      
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
              onChange={this.handleNameSelect}
            >
              {this.state.shops.map(shop => (
                <option key={shop.id} value={shop.value}>
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

          {this.state.reviewResults.length > 0 ? this.state.reviewResults.map(reviewResult => (
            <div className="results">
              <h4 key={reviewResult._id}>{reviewResult.reviewer}</h4>
              <div>{reviewResult.date}</div>
              <div>{reviewResult.review_text}</div>
            </div>  
          )) : <p className="noResults">"no results yet"</p>}
        </div>
       
    );
  }
}

export default Reviews;
