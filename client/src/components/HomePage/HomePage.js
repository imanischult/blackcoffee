import React from "react";
import IntroInfo from "../IntroInfo/IntroInfo";
import Searchbar from "../Searchbar/Searchbar";
import Button from "../Button";
import API from "../../utils/API";

class Homepage extends Component {
  state = {
    coffeeshops: [],
    shopname: "",
    address: "",
    description: "",
    coffeebrand: ""
  };

  componentDidMount() {
    this.loadCoffeeshops();
  }

  loadCoffeeshops = () => {
    API.getCoffeeShop()
      .then(res =>
        this.setState({
          coffeeShops: res.data,
          shopname: "",
          address: "",
          description: "",
          coffeebrand: ""
        })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = (event = {});
}
// const HomePage = () => {
//   return (
//     <div>
//       <IntroInfo />
//       <Searchbar />
//       <Button />
//     </div>
//   );
// };

export default HomePage;
