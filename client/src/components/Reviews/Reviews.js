import React, { Component } from 'react';
import API from '../../utils/API';


class Reviews extends Component {
    state = {
        shops: [],
        selectedShop: "",
        reviewbody: "",
        reviewer: "",
        reviewResults: []

    }

    componentDidMount() {
        API.getCoffeeShop()
            // .then(res => res)
            .then(res => {
                console.log(res);
                let shopNames = res.data.map(shop => { return { value: shop.name, display: shop.name } })
                this.setState({ shops: [{ value: '', display: '(Select a coffee shop)' }].concat(shopNames), selectedShop: "" });
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
        <div>
            <form className="form-group" name="reviewForm">
                <label>Choose a Coffee Shop
                    <select
                        name="selectedShop"
                        value={this.state.selectedShop}
                        onChange={this.handleInputChange}>
                             {this.state.shops.map((shop) => <option key={shop.value} value={shop.value}>{shop.display}</option>)}
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