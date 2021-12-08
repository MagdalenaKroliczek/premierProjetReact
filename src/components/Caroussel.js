import "./Caroussel.css";
import Cart from "./Cart";
import bagsList from "../assets/dataBase";

const Caroussel = () => {
  console.log("bagList", bagsList);
  return (
    <div>
      <div className="btns">
        <div className="btnCollection">
          <button type="submit">Collection</button>
        </div>
        <div className="btnSeeMore">
          <button type="submit">
            See More{" "}
            <img
              className="arrow"
              src="https://img.icons8.com/material-rounded/24/000000/long-arrow-right.png"
            />
          </button>
        </div>
      </div>

      {
        <div className="CarousselContainer">
          {bagsList.map((bagItem) => {
            return (
              <Cart
                urlImage={bagItem.url}
                bagName={bagItem.name}
                explore={bagItem.explore}
              />
            );
          })}
          {/* <Cart
          urlImage="https://i1.wp.com/magdalena-kroliczek.com/wp-content/uploads/2021/04/czechy.jpg?ssl=1"
          bagName="Czechy"
          explore="Explore lieu"
        />

        <Cart
          urlImage="https://i1.wp.com/magdalena-kroliczek.com/wp-content/uploads/2021/04/zielona.jpg?ssl=1 "
          bagName="Abandoned"
          explore="Explore lieu"
        />
        <Cart
          urlImage="https://i1.wp.com/magdalena-kroliczek.com/wp-content/uploads/2021/04/DSC_0167.jpg?ssl=1"
          bagName="Facteur"
          explore="Explore lieu"
        />
        <Cart
          urlImage="https://i0.wp.com/magdalena-kroliczek.com/wp-content/uploads/2021/04/DSC_0130.jpg?ssl=1"
          bagName="Malta"
          explore="Explore lieu"
        />
        <Cart
          urlImage="https://i1.wp.com/magdalena-kroliczek.com/wp-content/uploads/2021/04/DSC_0083b.jpg?ssl=1"
          bagName="Paris"
          explore="Explore lieu"
        /> */}
        </div>
      }
    </div>
  );
};

export default Caroussel;
