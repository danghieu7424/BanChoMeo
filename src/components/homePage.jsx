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

import dogS1 from "../access/img/dog_service/dog_food_1.jpg";
import dogS2 from "../access/img/dog_service/dog_food_2.jpg";
import dogS3 from "../access/img/dog_service/dog_food_1.png";
import dogS4 from "../access/img/dog_service/dog_food_2.png";
import dogS5 from "../access/img/dog_service/dog_food_3.png";
import dogS6 from "../access/img/dog_service/dog_food_4.png";
import dogS7 from "../access/img/dog_service/dog_food_1.webp";
import dogS8 from "../access/img/dog_service/dog_food_2.webp";
import dogS9 from "../access/img/dog_service/dog_food_3.webp";

import catS1 from "../access/img/cat_service/cat_food_1.webp";
import catS2 from "../access/img/cat_service/cat_food_2.webp";
import catS3 from "../access/img/cat_service/cat_food_1.png";
import catS4 from "../access/img/cat_service/cat_food_2.png";
import catS5 from "../access/img/cat_service/cat_food_3.png";
import catS6 from "../access/img/cat_service/cat_food_4.png";

const CatPet = [
  { img: cat1, size: "90%", name: "Mèo anh lông dài", price: "1.400.000₫" },
  { img: cat2, size: "100%", name: "Mèo bengal", price: "2.000.000₫" },
  { img: cat3, size: "100%", name: "Mèo siêm", price: "2.500.000₫" },
  { img: cat4, size: "100%", name: "Mèo chân ngắn", price: "4.000.000₫" },
  { img: cat5, size: "100%", name: "Mèo tai cụp", price: "5.000.000₫" },
  // { img: cat6, size: "100%", name: "Mèo Sphynx", price: "5.000.000₫" },
  // { img: cat7, size: "100%", name: "Mèo cam", price: "3.000.000₫" },
  // { img: cat8, size: "100%", name: "Mèo maincoon", price: "2.000.000₫" },
  // { img: cat9, size: "90%", name: "Mèo ragdoll", price: "4.000.000₫" },
];
const DogPet = [
  { img: dog1, size: "100%", name: "Chó phốc sóc", price: "1.600.000₫" },
  { img: dog2, size: "100%", name: "Chó alaska", price: "2.700.000₫" },
  { img: dog3, size: "100%", name: "Chó bec_duc", price: "4.300.000₫" },
  { img: dog4, size: "100%", name: "Chó corgi", price: "3.200.000₫" },
  { img: dog5, size: "100%", name: "Chó golden", price: "5.600.000₫" },
  // { img: dog6, size: "50%", name: "Chó husky", price: "2.500.000₫" },
  // { img: dog7, size: "60%", name: "Chó labra", price: "4.600.000₫" },
  // { img: dog8, size: "95%", name: "Chó pitbull", price: "5.500.000₫" },
  // { img: dog9, size: "125%", name: "Chó shiba", price: "3.000.000₫" },
];

const DogService = [
  { img: dogS1, name: "Dầu tắm", price: "500.000₫" },
  { img: dogS2, name: "Dầu thơm", price: "600.000₫" },
  { img: dogS3, name: "Sữa tắm", price: "700.000₫" },
  { img: dogS4, name: "Xúc xích", price: "200.000₫" },
  { img: dogS5, name: "Cát cho chó", price: "900.000₫" },
];

const CatService = [
  { img: catS1, name: "Cát cho mèo Reflex", price: "500.000₫" },
  { img: catS2, name: "Cát cho mèo Reflex", price: "600.000₫" },
  { img: catS3, name: "Cát gỗ Catfee", price: "700.000₫" },
  { img: catS4, name: "Cát gỗ Catfee", price: "800.000₫" },
  { img: catS5, name: "Xẻng xúc phân", price: "100.000₫" },
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
  const handleOrder = (pet, type) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Vui lòng đăng nhập để đặt hàng.");
      window.location.href = "/login";
      return;
    }
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    const isDuplicate = orders.some(
      (order) =>
        order.id === pet.id &&
        order.name === pet.name &&
        order.price === pet.price
    );
    if (isDuplicate) {
      alert("Sản phẩm đã có trong đơn hàng!");
      return;
    }
    orders.push({
      ...pet,
      id:
        pet.id ||
        `${type || "other"}-${pet.name}-${pet.price || ""}-${Math.random()
          .toString(36)
          .substr(2, 9)}`,
      type,
      quantity: 1,
      orderedAt: new Date().toISOString(),
    });
    localStorage.setItem("orders", JSON.stringify(orders));
    alert("Đã thêm vào đơn hàng!");
  };
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
          <h1>Bạn của mọi người</h1>
        </div>
      </div>

      <div className="home-page-content">
        <h1>Giống mèo tiêu biểu</h1>
        <div className="content-product">
          <ul>
            {CatPet.map((pet, index) => (
              <li className="product" key={index}>
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
                  <div className="product-price">{pet.price}</div>
                  <button
                    className="product-button"
                    onClick={() => handleOrder(pet, "cat")}
                  >
                    Đặt hàng
                  </button>
                </div>
              </li>
            ))}
            <li>
              <button
                className="product-button-more"
                onClick={() => {
                  window.location.href = "/product/cat";
                }}
              >
                Xem thêm
              </button>
            </li>
          </ul>
        </div>
        <h1>Giống chó tiêu biểu</h1>
        <div className="content-product">
          <ul>
            {DogPet.map((pet, index) => (
              <li className="product" key={index}>
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
                  <div className="product-price">{pet.price}</div>
                  <button
                    className="product-button"
                    onClick={() => handleOrder(pet, "dog")}
                  >
                    Đặt hàng
                  </button>
                </div>
              </li>
            ))}
            <li>
              <button
                className="product-button-more"
                onClick={() => {
                  window.location.href = "/service/cat";
                }}
              >
                Xem thêm
              </button>
            </li>
          </ul>
        </div>
        <h1>Sản phẩm bán chạy cho mèo</h1>
        <div className="content-service">
          <ul>
            {CatService.map((pet, index) => (
              <li className="product-service" key={index}>
                <div className="product-item">
                  <div className="product-image">
                    <div className="product-img-bg"></div>
                    <div
                      className="product-img-subject"
                      style={{
                        backgroundImage: `
                            url(${pet.img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                  </div>
                  <div className="product-name">{pet.name}</div>
                  <div className="product-price">{pet.price}</div>
                  <button
                    className="product-button"
                    onClick={() => handleOrder(pet, "cat")}
                  >
                    Đặt hàng
                  </button>
                </div>
              </li>
            ))}
            <li>
              <button
                className="product-button-more"
                onClick={() => {
                  window.location.href = "/service/dog";
                }}
              >
                Xem thêm
              </button>
            </li>
          </ul>
        </div>
        <h1>Sản phẩm bán chạy cho chó</h1>
        <div className="content-service">
          <ul>
            {DogService.map((pet, index) => (
              <li className="product-service" key={index}>
                <div className="product-item">
                  <div className="product-image">
                    <div className="product-img-bg"></div>
                    <div
                      className="product-img-subject"
                      style={{
                        backgroundImage: `
                            url(${pet.img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                  </div>
                  <div className="product-name">{pet.name}</div>
                  <div className="product-price">{pet.price}</div>
                  <button
                    className="product-button"
                    onClick={() => handleOrder(pet, "dog")}
                  >
                    Đặt hàng
                  </button>
                </div>
              </li>
            ))}
            <li>
              <button
                className="product-button-more"
                onClick={() => {
                  window.location.href = "/product/dog";
                }}
              >
                Xem thêm
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="home-page-footer">
        <p>&copy; Công ty TNHH 2 thành viên</p>
      </div>
    </div>
  );
}
