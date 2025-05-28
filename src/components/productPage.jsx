import React from "react";
import { useParams } from "react-router-dom";
import "../access/css/productPage.scss";

import cat1 from "../access/img/pet/Mèo/Meo_anh_long_dai.png";
import cat2 from "../access/img/pet/Mèo/Meo_bengal.png";
import cat3 from "../access/img/pet/Mèo/Meo_siem.png";
import cat4 from "../access/img/pet/Mèo/meo-munchki_chan_ngan.png";
import cat5 from "../access/img/pet/Mèo/meo-tai-cup-scottish-fold.png";
import cat6 from "../access/img/pet/Mèo/meo_Sphynx.png";
import cat7 from "../access/img/pet/Mèo/meo_cam.png";
import cat8 from "../access/img/pet/Mèo/meo_maincoon.png";
import cat9 from "../access/img/pet/Mèo/meo_ragdoll.png";

import dog1 from "../access/img/pet/Chó/Cho_phoc_soc.png";
import dog2 from "../access/img/pet/Chó/alaska.png";
import dog3 from "../access/img/pet/Chó/bec_duc2_0.png";
import dog4 from "../access/img/pet/Chó/cho_corgi.png";
import dog5 from "../access/img/pet/Chó/golden.png";
import dog6 from "../access/img/pet/Chó/husky.png";
import dog7 from "../access/img/pet/Chó/labra.png";
import dog8 from "../access/img/pet/Chó/pitbull.png";
import dog9 from "../access/img/pet/Chó/shiba.png";

const CatPet = [
  { img: cat1, size: "90%", name: "Mèo anh lông dài", price: "1.400.000₫" },
  { img: cat2, size: "100%", name: "Mèo bengal", price: "2.000.000₫" },
  { img: cat3, size: "100%", name: "Mèo siêm", price: "2.500.000₫" },
  { img: cat4, size: "100%", name: "Mèo chân ngắn", price: "4.000.000₫" },
  { img: cat5, size: "100%", name: "Mèo tai cụp", price: "5.000.000₫" },
  { img: cat6, size: "100%", name: "Mèo Sphynx", price: "5.000.000₫" },
  { img: cat7, size: "100%", name: "Mèo cam", price: "3.000.000₫" },
  { img: cat8, size: "100%", name: "Mèo maincoon", price: "2.000.000₫" },
  { img: cat9, size: "90%", name: "Mèo ragdoll", price: "4.000.000₫" },
];
const DogPet = [
  { img: dog1, size: "100%", name: "Chó phốc sóc", price: "1.600.000₫" },
  { img: dog2, size: "100%", name: "Chó alaska", price: "2.700.000₫" },
  { img: dog3, size: "100%", name: "Chó bec_duc", price: "4.300.000₫" },
  { img: dog4, size: "100%", name: "Chó corgi", price: "3.200.000₫" },
  { img: dog5, size: "100%", name: "Chó golden", price: "5.600.000₫" },
  { img: dog6, size: "50%", name: "Chó husky", price: "2.500.000₫" },
  { img: dog7, size: "60%", name: "Chó labra", price: "4.600.000₫" },
  { img: dog8, size: "95%", name: "Chó pitbull", price: "5.500.000₫" },
  { img: dog9, size: "125%", name: "Chó shiba", price: "3.000.000₫" },
];

export default function ProductPage() {
  const { type } = useParams();
  const pets = type === "dog" ? DogPet : CatPet;

  return (
    <div className="page-container product-page">
      <div className="content">
        <ul>
          {pets.map((pet, index) => (
            <li className="product-service" key={index}>
              <div className="product-item">
                <div className="product-image">
                  <div className="product-img-bg"></div>
                  <div
                    className="product-img-subject"
                    style={{
                      backgroundImage: `url(${pet.img})`,
                      backgroundSize: pet.size,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                </div>
                <div className="product-name">{pet.name}</div>
                <div className="product-price">{pet.price}</div>
                <button className="product-button">Đặt hàng</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


