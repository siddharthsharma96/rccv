import MenuDataShow from "./MenuDataShow";

const MenuCategory = ({ menu }) => {
  return (
    <div className="restaurant__menu-category">
      <div className="foodCat">
        <p>
          {menu.card.card.title} ({menu.card.card.itemCards.length})
        </p>
      </div>
      <div className="restaurant__menu-items">
        {menu.card.card.itemCards.map((el) => {
          return <MenuDataShow item={el}></MenuDataShow>;
        })}
      </div>
    </div>
  );
};

export default MenuCategory;
