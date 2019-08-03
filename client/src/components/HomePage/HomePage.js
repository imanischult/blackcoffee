import React from "react";
import IntroInfo from "../IntroInfo/IntroInfo";
import Navbar from "../Navbar/Navbar";
import Searchbar from "../Searchbar/Searchbar";
import Button from "../Button";
// import API from "../../utils/API";
import logo from "../../images/coffee-logo.svg";

const algoliasearch = require("algoliasearch");
const client = algoliasearch("V63NYRH7LN", "3861e9591508b24dd0e4525110196d37");
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
    console.log(index);
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="App-header">
          <div className="flex-center">
            <h1 id="intro">
              <span>I Like My</span> <br /> <span>COFFEE BLACK</span>
            </h1>
            <form className="form-inline" onSubmit={this.loadCoffeeshops}>
              <div className="form-row">
                <label className="sr-only">Coffe Search</label>
                <input
                  className="form-control form-control-lg"
                  name="search"
                  type="text"
                  value={this.state.search}
                  onChange={this.handleInputChange}
                />
                <button className="btn btn-secondary rounded">
                  Search Local Coffeeshops
                </button>
              </div>
            </form>
          </div>
        </div>
        <IntroInfo />

        {this.state.coffeeshops.map(shop => (
          <div key={shop._id}>{shop.Name}</div>
        ))}
      </div>
    );
  }
}
export default HomePage;
