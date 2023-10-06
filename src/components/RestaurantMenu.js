import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {

  const { id } = useParams();

  const resInfo = useRestaurantMenu(id);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    areaName,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
  } = resInfo?.cards[0]?.card?.card?.info;

  const { lastMileTravelString, deliveryTime } =
    resInfo?.cards[0]?.card?.card?.info?.sla;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const imageURL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

  return (
    <div className="menu">
      <div className="name-cuisine-area-rating">
        <div className="name-cuisine-area">
          <h1>{name}</h1>
          <p>{cuisines.join(", ")}</p>
          <p>
            {areaName}, {lastMileTravelString}
          </p>
        </div>
        <div className="rating">
          <p>⭐{avgRating}</p>
          <hr />
          <p>{totalRatingsString}</p>
        </div>
      </div>
      <hr />
      <div className="time-cost">
        <h2>⏳{deliveryTime} MINS</h2>
        <h2>💰{costForTwoMessage}</h2>
      </div>
      <hr />

      {itemCards?.map((itemCard) => {
        return (
          <div className="dish-desc">
            <div key={itemCard.card.info.id} className="dish">
              <h2>{itemCard.card.info.name}</h2>
              <h3>
                ₹
                {itemCard.card.info.defaultPrice / 100 ||
                  itemCard.card.info.price / 100}
              </h3>
              <p>{itemCard.card.info.description}</p>
            </div>
            <div className="dish-img">
            {/* {imageURL + itemCard.card.info.imageId ? <div> <img src={imageURL + itemCard.card.info.imageId} alt="Image Not Available"></img> </div>: <div style={{display:"none"}}> <img src={imageURL + itemCard.card.info.imageId} alt="Image Not Available"></img> </div>} */}
            <img src={imageURL + itemCard.card.info.imageId} alt="Image Not Available"></img>
              <div className="add-btn-div"><button className="add">ADD ➕</button></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
