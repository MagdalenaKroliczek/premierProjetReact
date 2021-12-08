import "./Cart.css";
import Kwiat from "../assets/kwiat.jpg";

const Cart = (props) => {
  return (
    <div className="CartContainer">
      <div className="cart">
        <img src={props.urlImage} />
      </div>
      <div className="textCollection">{props.bagName}</div>
      <div className="textExplore">{props.explore} </div>
    </div>
  );
};

export default Cart;
