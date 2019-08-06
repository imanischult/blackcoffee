import axios from "axios";

export default {
  // Gets all coffee shops
  getCoffeeShop: function() {
    return axios.get("/api/coffee/");
  },
  // Gets the coffee shop with the given name
  getCoffeeShopByName: function(name) {
    return axios.get("/api/coffee/" + name);
  },
  getAllReviews: function() {
    return axios.get("/api/reviews");
  },

  getShopReviews: function(name) {
    return axios.get(`/api/reviews/${name}`);
  },

  createReview: function(review) {
    return axios.post(`/api/reviews/`, review);
  }

};
