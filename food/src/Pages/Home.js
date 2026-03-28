import { useOutletContext } from "react-router-dom";
import "./../Style/home.css";
import RestaurantCard from "../Components/RestaurantCard";
import Carousuel from "../Components/Carousuel";
const Home = () => {
  const { loading, restaurantData } = useOutletContext();
  console.log(loading, restaurantData);

  return (
    <div className="home">
      <Carousuel></Carousuel>
      <h2 className="home__heading">
        Restaurants with online food delivery in Noida
      </h2>
      <div className="home__card-container">
        {loading ? (
          <h1>Loading</h1>
        ) : (
          restaurantData.map((res) => {
            return <RestaurantCard res={res} show={true}></RestaurantCard>;
          })
        )}
      </div>
    </div>
  );
};

export default Home;
