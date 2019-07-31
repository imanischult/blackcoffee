import axios from "axios";

export default {
  // Gets all coffee shops
  getCoffeeShop: function() {
    return axios.get("/api/coffee/");
  },
  // Gets the coffee shop with the given id
  getCoffeeShopById: function(id) {
    return axios.get("/api/coffee/" + id);
  },
  getAllReviews: function() {
    return axios.get("/api/reviews");
  },

  getShopReviews: function(name) {
    return axios.get(`/api/reviews/${name}`)
  }

};
