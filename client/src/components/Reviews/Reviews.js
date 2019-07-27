import React, { Component } from 'react';

class Reviews extends Component {
    state = {
        selectedShop: "",
        currentReview: "",
        currentName: "",
        reviewResults: []

    }

    componentDidMount() {
        //can we have the selected shop pre-set if you come here from a search-result?

    }

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
            <div>
                <form className="form-group" name="reviewForm">
                    <label>Choose a Coffee Shop
                    <input
                            type="dropdown" name="shop-name"
                            value={this.state.selectedShop}
                            onChange={this.handleInputChange} >
                        </input>
                    </label>
                    <br />
                    <label for="review-body">Write your review here
                        <textarea name="review-body"
                            value={this.state.currentReview}
                            onChange={this.handleInputChange}
                        >
                        </textarea>
                    </label>
                    <br />
                    <label for="reviewer-name">Your Name
                        <input type="text" name="reviewer-name"
                            value={this.state.currentName}
                            onChange={this.handleInputChange}
                        >
                        </input>
                    </label>
                    <button type="submit"
                        onClick={this.handleFormSubmit}
                    >Submit</button>
                </form>
                <div className="results">
                    No reviews yet.
                </div>
            </div>
        );
    }
}

export default Reviews;