import React, { Component } from 'react';
// import router from "../../../../routes/api/coffee"; 

class Reviews extends Component {
    state = {
        shops: [],
        selectedShop: "",
        reviewbody: "",
        reviewer: "",
        reviewResults: []

    }

    componentDidMount() {
        fetch("/coffee") //fetch from our API route for getting the names of all the coffee shops in the db.
            .then((response) => {
                return response.json();
            })
            .then(data => {
                let shopNames = data.map(shop => { return { value: shop.name, display: shop.name } })
                this.setState({ shops: [{ value: '', display: '(Select a coffee shop)' }].concat(shopNames) });
            }).catch(error => {
                console.log(error);
            });
    }
    //can we have the selected shop pre-set if you come here from a search-result? Could be a Route...




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