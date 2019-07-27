import React, { Component } from 'react';

class Reviews extends Component {
    state={
        SelectedShop: "",
        currentReview: "",
        currentName: "",
        reviewResults: []

    }

    componentDidMount() {

    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    render() {
        return (
            <div>
                <form className="form-group" name="reviewForm">
                    
                    <input type="dropdown" name="shop-name">select a coffee shop</input>
                    <textarea name="reviewBody"></textarea>
                    <input name="reviewerName">Enter your name here</input>
                    <button type="submit">Submit</button>

                </form>
                <div className="results">
                    No reviews yet.
                </div>
            </div>
        );
    }
}

export default Reviews;