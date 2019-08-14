import axios from "axios";

export default {
  // Gets all coffee shops
  getCoffeeShop: function() {
    return axios.get("/api/coffee");
  },
  // Gets the coffee shop with the given name
  getCoffeeShopById: function(shopId) {
    return axios.get("/api/coffee/" + shopId);
  },

  getCoffeeShopByName: function(shopName) {
    return axios.get(`/api/coffee/${shopName}`);
  },

  getAllReviews: function() {
    return axios.get("/api/reviews");
  },

  getShopReviewsById: function(shopId) {
    return axios.get(`/api/reviews/${shopId}`);
  },

  getShopReviewsByName: function(shopName) {
    return axios.get(`/api/reviews/${shopName}`);
  },

  createReview: function(review) {
    return axios.post(`/api/reviews/`, review);
  }
};
