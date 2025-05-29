import React from "react";

import "../access/css/servicesPage.scss";

const services = [
  {
    name: "Bán Thức Ăn Thú Cưng",
    description:
      "Cung cấp các loại thức ăn chất lượng cho chó, mèo và các loại thú cưng khác.",
    img: "/images/food-service.jpg",
  },
  {
    name: "Dịch Vụ Chăm Sóc Thú Cưng",
    description:
      "Tắm rửa, cắt tỉa lông, chăm sóc sức khỏe cho thú cưng của bạn.",
    img: "/images/care-service.jpg",
  },
  {
    name: "Bán Thức Ăn Thú Cưng",
    description:
      "Cung cấp các loại thức ăn chất lượng cho chó, mèo và các loại thú cưng khác.",
    img: "/images/food-service.jpg",
  },
  {
    name: "Dịch Vụ Chăm Sóc Thú Cưng",
    description:
      "Tắm rửa, cắt tỉa lông, chăm sóc sức khỏe cho thú cưng của bạn.",
    img: "/images/care-service.jpg",
  },
  {
    name: "Bán Thức Ăn Thú Cưng",
    description:
      "Cung cấp các loại thức ăn chất lượng cho chó, mèo và các loại thú cưng khác.",
    img: "/images/food-service.jpg",
  },
  {
    name: "Dịch Vụ Chăm Sóc Thú Cưng",
    description:
      "Tắm rửa, cắt tỉa lông, chăm sóc sức khỏe cho thú cưng của bạn.",
    img: "/images/care-service.jpg",
  },
  {
    name: "Bán Thức Ăn Thú Cưng",
    description:
      "Cung cấp các loại thức ăn chất lượng cho chó, mèo và các loại thú cưng khác.",
    img: "/images/food-service.jpg",
  },
  {
    name: "Dịch Vụ Chăm Sóc Thú Cưng",
    description:
      "Tắm rửa, cắt tỉa lông, chăm sóc sức khỏe cho thú cưng của bạn.",
    img: "/images/care-service.jpg",
  },
  {
    name: "Bán Thức Ăn Thú Cưng",
    description:
      "Cung cấp các loại thức ăn chất lượng cho chó, mèo và các loại thú cưng khác.",
    img: "/images/food-service.jpg",
  },
  {
    name: "Dịch Vụ Chăm Sóc Thú Cưng",
    description:
      "Tắm rửa, cắt tỉa lông, chăm sóc sức khỏe cho thú cưng của bạn.",
    img: "/images/care-service.jpg",
  },
  {
    name: "Bán Thức Ăn Thú Cưng",
    description:
      "Cung cấp các loại thức ăn chất lượng cho chó, mèo và các loại thú cưng khác.",
    img: "/images/food-service.jpg",
  },
  {
    name: "Dịch Vụ Chăm Sóc Thú Cưng",
    description:
      "Tắm rửa, cắt tỉa lông, chăm sóc sức khỏe cho thú cưng của bạn.",
    img: "/images/care-service.jpg",
  },
  {
    name: "Bán Thức Ăn Thú Cưng",
    description:
      "Cung cấp các loại thức ăn chất lượng cho chó, mèo và các loại thú cưng khác.",
    img: "/images/food-service.jpg",
  },
  {
    name: "Dịch Vụ Chăm Sóc Thú Cưng",
    description:
      "Tắm rửa, cắt tỉa lông, chăm sóc sức khỏe cho thú cưng của bạn.",
    img: "/images/care-service.jpg",
  },
  {
    name: "Bán Thức Ăn Thú Cưng",
    description:
      "Cung cấp các loại thức ăn chất lượng cho chó, mèo và các loại thú cưng khác.",
    img: "/images/food-service.jpg",
  },
  {
    name: "Dịch Vụ Chăm Sóc Thú Cưng",
    description:
      "Tắm rửa, cắt tỉa lông, chăm sóc sức khỏe cho thú cưng của bạn.",
    img: "/images/care-service.jpg",
  },
];

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
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
const DogService = [
  { img: dogS1, name: "Dầu tắm", price: "500.000₫" },
  { img: dogS2, name: "Dầu thơm", price: "600.000₫" },
  { img: dogS3, name: "Sữa tắm", price: "700.000₫" },
  { img: dogS4, name: "Xúc xích", price: "200.000₫" },
  { img: dogS5, name: "Cát cho chó", price: "900.000₫" },
  { img: dogS6, name: "Cát cho chó", price: "1.000.000₫" },
  { img: dogS7, name: "Thức ăn SCIENCE DIET", price: "1.100.000₫" },
  { img: dogS8, name: "Thức ăn Nutrience", price: "1.200.000₫" },
  { img: dogS9, name: "Thức ăn Pedigree", price: "1.300.000₫" },
];

const CatService = [
  { img: catS1, name: "Cát cho mèo Reflex", price: "500.000₫" },
  { img: catS2, name: "Cát cho mèo Reflex", price: "600.000₫" },
  { img: catS3, name: "Cát gỗ Catfee", price: "700.000₫" },
  { img: catS4, name: "Cát gỗ Catfee", price: "800.000₫" },
  { img: catS5, name: "Xẻng xúc phân", price: "100.000₫" },
  { img: catS6, name: "Dầu tắm", price: "1.000.000₫" },
];

export default function ServicesPage() {
  const { type } = useParams();
  let list = services;
  if (type === "dog") {
    list = DogService;
  } else if (type === "cat") {
    list = CatService;
  }

  const handleOrder = (pet) => {
    const token = localStorage.getItem("login_token");
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
      toast.warning("Sản phẩm đã có trong đơn hàng!");
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
    toast.success("Đã thêm vào đơn hàng!");
  };

  return (
    <div className="page-container services-page-content">
      <h1>Sản phầm khác</h1>
      <div className="services-list">
        <ul>
          {list.map((item, index) => (
            <li className="service" key={index}>
              <div className="service-item">
                <div className="service-image">
                  <div
                    className="service-img-subject"
                    style={{
                      backgroundImage: `url(${item.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                </div>
                <div className="service-name">{item.name}</div>
                {item.description && (
                  <div className="service-description">{item.description}</div>
                )}
                {item.price && (
                  <div className="service-price">{item.price}</div>
                )}
                <button
                  className="service-button"
                  onClick={() => handleOrder(item)}
                >
                  Tìm hiểu thêm
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
