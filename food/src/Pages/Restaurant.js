import { useOutletContext, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./../Style/restaurant.css";
import MenuCategory from "../Components/MenuCategory";
const Restaurant = () => {
  const { id } = useParams();
  const { restaurantData } = useOutletContext();
  const restaurant = restaurantData.find((el) => el.info.id == id);
  const [menuData, setMenuData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch("http://localhost:3000/menu.json");
        const data = await response.json();
        setMenuData(data);
      } catch (err) {}
    };
    fetchApi();
  }, []);
  console.log(menuData);

  return (
    <div className="restaurant">
      <div className="restaurant__breadcrumb">
        <span>Home / Noida / {restaurant?.info?.name}</span>
      </div>
      <div className="restaurant__container">
        <div className="restaurant__info">
          <p>{restaurant?.info.name}</p>
          <div className="restaurant__services">
            <p>Order Online</p>
            <p>DineOut</p>
          </div>
        </div>

        <div className="restaurant__menu">
          {menuData.map((el) => {
            return <MenuCategory menu={el}></MenuCategory>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
