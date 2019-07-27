import React, { Component } from 'react';

class Reviews extends Component {
    state = {
        shop: "",
        reviewbody: "",
        reviewer: "",
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
                    <select
                            type="dropdown" 
                            name="shop"
                            defaultValue="choose a coffee shop">
                        </select>
                    </label>
                    <br />
                    <label>Write your review here
                        <textarea name="reviewbody"
                            value={this.state.reviewbody}
                            onChange={this.handleInputChange}
                        >
                        </textarea>
                    </label>
                    <br />
                    <label>Your Name 
                        <input type="text" name="reviewer"
                            value={this.state.reviewer}
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