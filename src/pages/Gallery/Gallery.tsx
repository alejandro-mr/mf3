import LeftDecoration from "./components/LeftDecoration/LeftDecoration";
import RightDecoration from "./components/RightDecoration/RightDecoration";
import arrowIcon from "../../assets/arrow-right.svg";

import "./Gallery.css";

function Gallery() {
  return (
    <>
      <LeftDecoration />
      <RightDecoration />
      <div className="gallery">
        <h1 className="font-bebas text-[5rem]">Galería</h1>
        <div className="gallery-container">
          <div className="strip">
            <p className="title">Worlds 2022</p>
            <a href="">
              Ver todo
              <img src={arrowIcon} />
            </a>
            <div className="images">
              <div>&nbsp;</div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          <div className="strip">
            <p className="title">Throwdown 2022</p>
            <a href="">
              Ver todo
              <img src={arrowIcon} />
            </a>
            <div className="images">
              <div>&nbsp;</div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          <div className="strip">
            <p className="title">Throwdown 2019</p>
            <a href="">
              Ver todo
              <img src={arrowIcon} />
            </a>
            <div className="images">
              <div>&nbsp;</div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          <div className="strip">
            <p className="title">Throwdown 2018</p>
            <a href="">
              Ver todo
              <img src={arrowIcon} />
            </a>
            <div className="images">
              <div>&nbsp;</div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
