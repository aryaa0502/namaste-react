import { RES_IMG_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { res } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = res?.info;
  return (
    <div className="restaurant-card">
      <Link to={"/restaurants/" + res.info.id}>
        <img
          className="restaurant-image"
          src={RES_IMG_CDN_URL + cloudinaryImageId}
          alt="res img"
        />
      </Link>
      <Link to={"/restaurants/" + res.info.id}>
        <h3 style={{ color: "black" }}>{name}</h3>
      </Link>
      <Link to={"/restaurants/" + res.info.id}>
        <small style={{ color: "black" }}>
          {cuisines.join(", ").substring(0, 40) + "..."}
        </small>
      </Link>
      <div className="rating_eta">
        <p>{avgRating} stars</p>
        <p>{res.info.sla.deliveryTime} minutes</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
