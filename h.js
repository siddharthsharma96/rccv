// app

const addItem = (item) => {
  const existingProduct = cartItems.findIndex(
    (cartItem) => cartItem.card.info.id === item.card.info.id,
  );
  if (existingProduct !== -1) {
    const updateCart = [...cartItems];
    updateCart[existingProduct].quantity += 1;
    setCartItems(updateCart);
  } else {
    setCartItems([...cartItems, { ...item, quantity: 1 }]);
  }
};

const removeItem = (item) => {
  const existingProduct = cartItems.findIndex(
    (cartItem) => cartItem.card.info.id === item.card.info.id,
  );
  if (existingProduct !== -1) {
    const updateCart = [...cartItems];
    if (updateCart[existingProduct].quantity > 1) {
      updateCart[existingProduct].quantity -= 1;
    } else {
      updateCart.splice(existingProduct, 1);
    }
    setCartItems(updateCart);
  }
};

const clearCart = () => {
  setCartItems([]);
};

// home

const Home = () => {
  const slides = useRef(null);

  const handleNextClick = () => {
    if (slides.current) {
      const slide = slides.current.querySelector(".carousel__slide");
      if (slide) {
        const slideWidth = slide.offsetWidth;
        slides.current.scrollBy({ left: slideWidth, behavior: "smooth" });
      }
    }
  };
  const handlePrevClick = () => {
    if (slides.current) {
      const slide = slides.current.querySelector(".carousel__slide");
      if (slide) {
        const slideWidth = slide.offsetWidth;
        slides.current.scrollBy({ left: -slideWidth, behavior: "smooth" });
      }
    }
  };
  return (
    <div className="home">
      <div className="carousel">
        <div className="carousel__container">
          <h2>Top restaurant chains in Noida</h2>
          <div className="carousel__controls">
            <button className="carousel__arrow" onClick={handleNextClick}>
              <img src="/images/left.png" />
            </button>
            <button className="carousel__arrow" onClick={handlePrevClick}>
              <img src="/images/right.png" />
            </button>
          </div>
        </div>
        <section className="carousel__slider">
          <ul className="carousel__slides" ref={slides}>
            return <li className="carousel__slide">kl</li>;
          </ul>
        </section>
      </div>
      <h2 className="home__heading">
        Restaurants with online food delivery in Noida
      </h2>
      <div className="home__card-container">
        <div
          className="card"
          onClick={() => navigate(`/restaurant/${res?._id}`)}
        >
          <img src={`/images/${res.cloudinaryImageId}.avif`}></img>
          <div className="card__details">
            <h3 className="card__name">{res?.name}</h3>

            <div className="card__cuisines">{res?.cuisines.join(", ")}</div>
            <div className="card__price">{res.costForTwo}</div>
            <div className="card__info">
              <span className="card__rating">
                {res?.avgRatingString} Rating
              </span>
              <span className="card__time">3.2 mins</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// header
<div className="header">
  <div className="header__logo-conatiner">
    <NavLink to={"/"}>
      <img
        className="header__logo"
        src="https://svgsilh.com/svg/2085075.svg"
        alt="to"
      ></img>
    </NavLink>
  </div>
  <div className="header__nav">
    <ul>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/search"}>Search</NavLink>
      </li>
      <li>
        <NavLink to={"/help"}>Help</NavLink>
      </li>
      <li>
        <NavLink to={"/cart"}>Cart</NavLink>
      </li>
    </ul>
  </div>
</div>;

// restaurant
<div className="restaurant">
  <div className="restaurant__breadcrumb">
    <span>Home / Noida /{restaurant?.name}</span>
  </div>
  <div className="restaurant__container">
    <div className="restaurant__info">
      <p>{restaurant?.name}</p>
      <div className="restaurant__services">
        <p>Order Online</p>
        <p>DineOut</p>
      </div>
    </div>
    <div className="restaurant__menu">
      <div className="restaurant__menu-category">
        <div className="foodCat">
          <p>asas</p>
        </div>
        <div className="restaurant__menu-items">
          <div className="restaurant__menu-item-card">
            <div className="restaurant__menu-item-info">
              <p className="restaurant__menu-item-name">
                {item?.card?.info?.name}
              </p>
              <p className="restaurant__menu-item-price">
                ₹ {item?.card?.info?.defaultPrice / 100}
              </p>
              <p className="restaurant__menu-item-desc">
                {item?.card?.info?.description}
              </p>
            </div>
            <div className="restaurant__menu-item-action">
              {isItemInCart ? (
                <div className="restaurant__menu-item-quantity-controls">
                  <button onClick={() => removeItem(item)}>-</button>
                  <span>{quantityInCart}</span>
                  <button onClick={() => addItem(item)}>+</button>
                </div>
              ) : (
                <button
                  className="restaurant__menu-item-add-btn"
                  onClick={() => addItem(item)}
                >
                  Add
                </button>
              )}

              <img src={`/images/${item?.card?.info?.imgName}`}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>;
// menudatas how
const isItemInCart = cartItems.some(
  (itm) => itm.card.info.id === item.card.info.id,
);
const quantityInCart = isItemInCart
  ? cartItems.find((el) => el.card.info.id === item.card.info.id).quantity
  : 0;
console.log(cartItems);

//   Help [age
const [help, setHelp] = useState([]);

const [toggledTitle, setToggledTitle] = useState(null);
const handleClick = (clickedTitle) => {
  setToggledTitle(toggledTitle === clickedTitle ? null : clickedTitle);
};
const renderArrow = (title) => {
  return toggledTitle === title
    ? "/images/up-arrow.png"
    : "/images/down-arrow.png";
};

<div className="help">
  <h1>Help & Support</h1>
  <p>Let's take a step ahead and help you better.</p>
  <div className="questionContainer">
    <div className="questionInnerContainer">
      <h1>Partner Onboarding</h1>

      <div className="question">
        <div className="answer">
          <div className="answerInfo">
            <p>as</p>
            <img
              onClick={() => handleClick(title)}
              src={renderArrow(res.title)}
              alt="."
            />
          </div>
        </div>
        {toggledTitle === title && <p>{res.data}</p>}
      </div>
    </div>
  </div>
</div>;

// cart
useEffect(() => {
  let price = 0;
  if (cartItems.length !== 0) {
    cartItems.forEach((item) => {
      price += item.quantity * item.card.info.defaultPrice;
    });
    setTotalPrice(price / 100);
  }
}, [cartItems]);

<div className="cart">
  {cartItems.length === 0 ? (
    <div className="empty-cart">
      <img src="/images/Cart_empty.png"></img>
      <p>Your Cart is empty</p>
      <span>You can go to home page to view more restaurants</span>
      <button onClick={() => navigate("/")}>See Restaurants Near You</button>
    </div>
  ) : (
    <div className="cart-items">
      {/*  <div className="account">
      <div className="account__timeline"></div>
      <div className="account__items">
        <div className="account__section">
          <h3>Account</h3>
          <p>
            To place your order now, log in to your existing account or sign up
          </p>
          <div>
            <div>
              <p>Have an Account</p>
              <p>LOG IN</p>
            </div>
            <div>
              <p>New To Food Web?</p>
              <p>SIGN UP</p>
            </div>
          </div>
        </div>
        <div>
          <img src="/images/ROLL.avif"></img>
        </div>
      </div>
      <div className="account__items">
        <h3>Delivery Address</h3>
      </div>
      <div className="account__items">
        <div className="account__section">
          <h3>Payment</h3>
          <p>
            To place your order now, log in to your existing account or sign up
          </p>
          <div>
            <button>Pay Now</button>
          </div>
        </div>
      </div>
    </div> */}
      <div className="cart-items__info">
        <div className="cart-items__info-container">
          <div className="cart-items__amount-heading">
            <h3>Items in Cart</h3>
          </div>
          <div className="cart-items__scrollable-content">
            {cartItems.map((r) => {
              return (
                <div className="cart-items__added-item">
                  <p>{r?.card?.info?.name}</p>
                  <div className="cart-items__button-container">
                    <button onClick={() => removeItem(r)}>-</button>
                    <span>{r.quantity}</span>
                    <button onClick={() => addItem(r)}>+</button>
                  </div>
                  <span>₹ 125</span>
                </div>
              );
            })}
            <div className="cart-items__bill-details">
              <h3>Bill details</h3>
              <div>
                <p>Item Total</p>
                <p>₹ 125</p>
              </div>
              <div>
                <p>Delivery Fee | 3.0 kms</p>
                <p>₹ 43</p>
              </div>
              <div>
                <p>Platform fee</p>
                <p>₹ 3</p>
              </div>
              <div>
                <p>GST and Restaurant Charges</p>
                <p>₹ 79</p>
              </div>
            </div>
          </div>
          <div className="cart-items__amount">
            <p>To Pay</p>
            <p>{totalPrice}</p>
          </div>
        </div>
        <div className="cart-items__policy">
          <div>
            <h4>
              Review your order and address details to avoid cancellations
            </h4>
            <p>
              <span>Note:</span> If you cancel within 60 seconds of placing your
              order, a 100% refund will be issued. No refund for cancellations
              made after 60 seconds.
            </p>
            <p>Avoid cancellation as it leads to food wastage.</p>
          </div>
        </div>
      </div>
    </div>
  )}
</div>;
