import GALLERY_IMAGES from "./constants/images";
import LeftDecoration from "./components/LeftDecoration/LeftDecoration";
import RightDecoration from "./components/RightDecoration/RightDecoration";
import arrowIcon from "../../assets/arrow-right.svg";

import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import "./Gallery.css";

function Gallery() {
  return (
    <>
      <LeftDecoration />
      <RightDecoration />
      <div className="gallery">
        <h1 className="font-bebas text-[5rem]">Galería</h1>
        <div className="gallery-container">
          {Object.keys(GALLERY_IMAGES).map((gallery, i) => (
            <div className="strip" key={`gallery-${gallery}`}>
              <p className="title">{GALLERY_IMAGES[gallery].title}</p>
              <a href="">
                Ver todo
                <img src={arrowIcon} />
              </a>
              <LightGallery
                elementClassNames="images"
                speed={500}
                plugins={[lgThumbnail]}
              >
                {GALLERY_IMAGES[gallery].images.map(({ src, alt }, i) => (
                  <a
                    href={`/gallery/${gallery}/${src}`}
                    key={`gallery-${gallery}-image-${i}`}
                  >
                    <div>
                      <img alt={alt} src={`/gallery/${gallery}/${src}`} />
                    </div>
                  </a>
                ))}
              </LightGallery>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Gallery;
