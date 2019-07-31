import React from "react";
import IntroInfo from "../IntroInfo/IntroInfo";
import Searchbar from "../Searchbar/Searchbar";
import Button from "../Button";
import API from "../../utils/API";
const algoliasearch = require("algoliasearch");
const client = algoliasearch("V63NYRH7LN", "9380ecbed812963b73d661779906c9d2");
const index = client.initIndex("coffeeshops");

class HomePage extends React.Component {
  state = {
    coffeeshops: [],
    shopname: "",
    address: "",
    description: "",
    coffeebrand: "",
    search: ""
  };
  loadCoffeeshops = event => {
    event.preventDefault();
    index.search(
      {
        query: this.state.search
      },
      (err, { hits } = {}) => {
        if (err) {
          console.log(err);
          return;
        }
        this.setState({ coffeeshops: hits });
      }
    );
    // use algolia instead of searching backend
    //API.getCoffeeShop()
    //.then(res =>
    //this.setState({
    //coffeeShops: res.data,
    //shopname: '',
    //address: '',
    //description: '',
    //coffeebrand: ''
    //})
    //)
    //.catch(err => console.log(err));
  };
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div>
        <IntroInfo />
        <form onSubmit={this.loadCoffeeshops}>
          <input
            name="search"
            type="text"
            value={this.state.search}
            onChange={this.handleInputChange}
          />
          <button type="submit">Search Local Coffeeshops</button>
        </form>

        {this.state.coffeeshops.map(shop => (
          <div>{shop.name}</div>
        ))}
      </div>
    );
  }
}
export default HomePage;
