import axios from "axios";

export default {
  // Gets all coffee shops
  getCoffeeShop: function() {
    return axios.get("/api/coffee");
  },
  // Gets the coffee shop with the given id
  getCoffeeShop: function(id) {
    return axios.get("/api/coffee/" + id);
  }
};
