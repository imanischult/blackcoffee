import React from "react";
import IntroInfo from "../IntroInfo/IntroInfo";
import "./homepage.css";

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
              <span className="ILM">I Like My...</span> <br />{" "}
              <span className="CB">
                COFFEE <strong>BLACK</strong>
              </span>
            </h1>
            <form className="form-inline" onSubmit={this.loadCoffeeshops}>
              <div className="form-row">
                <label className="sr-only">Coffee Search</label>
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
          <div className="container" key={shop._id}>
            <div className="card">
              <h4>{shop.name}</h4>
              <div>{shop.address}</div>
              <div>{shop.description}</div>
              <div>{shop.area}</div>
              <br />
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default HomePage;

// {shop.address}
