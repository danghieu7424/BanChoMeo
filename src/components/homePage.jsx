import React, { useEffect } from "react";
import gsap from "gsap";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import "../access/css/homePage.scss";

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

const obgectPet = [
  { img: cat1, size: "90%", name: "Mèo anh lông dài", price: 1000 },
  { img: cat2, size: "100%", name: "Mèo bengal", price: 2000 },
  { img: cat3, size: "100%", name: "Mèo siêm", price: 3000 },
  { img: cat4, size: "100%", name: "Mèo chân ngắn", price: 4000 },
  { img: cat5, size: "100%", name: "Mèo tai cụp", price: 5000 },
  { img: cat6, size: "100%", name: "Mèo Sphynx", price: 6000 },
  { img: cat7, size: "100%", name: "Mèo cam", price: 7000 },
  { img: cat8, size: "100%", name: "Mèo maincoon", price: 8000 },
  { img: cat9, size: "90%", name: "Mèo ragdoll", price: 9000 },
  { img: dog1, size: "100%", name: "Chó phốc sóc", price: 1000 },
  { img: dog2, size: "100%", name: "Chó alaska", price: 2000 },
  { img: dog3, size: "100%", name: "Chó bec_duc", price: 3000 },
  { img: dog4, size: "100%", name: "Chó corgi", price: 4000 },
  { img: dog5, size: "100%", name: "Chó golden", price: 5000 },
  { img: dog6, size: "50%", name: "Chó husky", price: 6000 },
  { img: dog7, size: "60%", name: "Chó labra", price: 7000 },
  { img: dog8, size: "95%", name: "Chó pitbull", price: 8000 },
  { img: dog9, size: "125%", name: "Chó shiba", price: 9000 },
];

gsap.registerPlugin(InertiaPlugin);

function StickerEffect() {
  useEffect(() => {
    let oldX = 0,
      oldY = 0,
      deltaX = 0,
      deltaY = 0;

    const root = document.querySelector(".sticker");
    if (!root) return;

    const onMouseMove = (e) => {
      deltaX = e.clientX - oldX;
      deltaY = e.clientY - oldY;
      oldX = e.clientX;
      oldY = e.clientY;
    };

    root.addEventListener("mousemove", onMouseMove);

    const items = root.querySelectorAll(".stk");

    const handlers = [];

    items.forEach((el) => {
      const onEnter = () => {
        const tl = gsap.timeline({
          onComplete: () => tl.kill(),
        });

        tl.timeScale(1.2);

        tl.to(el, {
          inertia: {
            x: {
              velocity:
                deltaX !== 0 ? deltaX * 30 : (Math.random() - 0.5) * 300,
              end: 0,
            },
            y: {
              velocity:
                deltaY !== 0 ? deltaY * 30 : (Math.random() - 0.5) * 300,
              end: 0,
            },
          },
        });

        tl.fromTo(
          el,
          { rotate: 0 },
          {
            duration: 0.4,
            rotate: (Math.random() - 0.5) * 30,
            yoyo: true,
            repeat: 1,
            ease: "power1.inOut",
          },
          "<"
        );
      };

      el.addEventListener("mouseenter", onEnter);
      handlers.push({ el, onEnter });
    });

    // Cleanup khi component bị unmount
    return () => {
      root.removeEventListener("mousemove", onMouseMove);
      handlers.forEach(({ el, onEnter }) =>
        el.removeEventListener("mouseenter", onEnter)
      );
    };
  }, []);

  return null;
}

export default function HomePage() {
  return (
    <div className="page-container home-page">
      <div className="home-page-banner">
        <StickerEffect />
        <div className="sticker">
          <div className="stk sticker-image0"></div>
          <div className="stk sticker-image1"></div>
          <div className="stk sticker-image2"></div>
        </div>
        <div className="title">
          <h1>Bán Chó Mèo Hoàn Hiểu</h1>
        </div>
      </div>

      <div className="home-page-content">
        <h1>Welcome to the Home Page</h1>
        <div className="content">
          <ul>
            {obgectPet.map((pet, index) => (
              <li className="product">
                <div className="product-item">
                  <div className="product-image">
                    <div className="product-img-bg"></div>
                    <div
                      className="product-img-subject"
                      style={{
                        backgroundImage: `
                            url(${pet.img})`,
                        backgroundSize: pet.size,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                  </div>
                  <div className="product-name">{pet.name}</div>
                  <div className="product-price">${pet.price}</div>
                  <button className="product-button">Đặt hàng</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="home-page-footer">
        <p>&copy; 2023 Your Company</p>
      </div>
    </div>
  );
}
