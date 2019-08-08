import React, { Component } from "react";
import API from "../../utils/API";
import "./Reviews.css";
import ReviewCard from "../ReviewCard/ReviewCard.js";
// import { makeStyles } from "@material-ui/core/styles";
// import { get } from "https";

class Reviews extends Component {
    state = {
        shops: [],
        selectedShop: "",
        reviewbody: "",
        reviewer: "",
        reviewResults: [],
        selectedShopId: "",
        hasReviews: false
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
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };



  handleNameSelect = event => {
        const { name, value, key } = event.target;
       this.setState({
            [name]: value,
            selectedShopId: key
        }, this.getReviews)
       

    };

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
    };

    getReviews = () => {
        const shopName = this.state.selectedShop;
        API.getShopReviewsByName(shopName)
            .then(res => {
                this.setState({
                    reviewResults: res.data
                }, 

                )})
    };


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
                <div>
                    {this.state.reviewResults.map(reviewResult => (
                        <ReviewCard key={reviewResult._id}
                            reviewer={reviewResult.reviewer}
                            date={reviewResult.date}
                            review_text={reviewResult.review_text}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Reviews;
