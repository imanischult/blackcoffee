import React from "react";
import IntroInfo from "../IntroInfo/IntroInfo";
import Searchbar from "../Searchbar/Searchbar";
import Button from "../Button";
// import API from "../../utils/API";
import "./HomePage.css";

const algoliasearch = require("algoliasearch");
const client = algoliasearch("98X3GEBMRE", "ec6500df8d948e205285966022d1ae6d");
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
          <Searchbar
            name="search"
            type="text"
            value={this.state.search}
            onChange={this.handleInputChange}
          />
          <Button type="submit">Search Local Coffeeshops</Button>
        </form>

        {this.state.coffeeshops.map(shop => (
          <div>{shop.name}</div>
        ))}
      </div>
    );
  }
}
export default HomePage;
