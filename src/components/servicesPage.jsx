import React from "react";

import "../access/css/servicesPage.scss";

const services = [
    {
        name: "Bán Thức Ăn Thú Cưng",
        description: "Cung cấp các loại thức ăn chất lượng cho chó, mèo và các loại thú cưng khác.",
        img: "/images/food-service.jpg",
    },
    {
        name: "Dịch Vụ Chăm Sóc Thú Cưng",
        description: "Tắm rửa, cắt tỉa lông, chăm sóc sức khỏe cho thú cưng của bạn.",
        img: "/images/care-service.jpg",
    },
    {
        name: "Bán Thức Ăn Thú Cưng",
        description: "Cung cấp các loại thức ăn chất lượng cho chó, mèo và các loại thú cưng khác.",
        img: "/images/food-service.jpg",
    },
    {
        name: "Dịch Vụ Chăm Sóc Thú Cưng",
        description: "Tắm rửa, cắt tỉa lông, chăm sóc sức khỏe cho thú cưng của bạn.",
        img: "/images/care-service.jpg",
    },
    {
        name: "Bán Thức Ăn Thú Cưng",
        description: "Cung cấp các loại thức ăn chất lượng cho chó, mèo và các loại thú cưng khác.",
        img: "/images/food-service.jpg",
    },
    {
        name: "Dịch Vụ Chăm Sóc Thú Cưng",
        description: "Tắm rửa, cắt tỉa lông, chăm sóc sức khỏe cho thú cưng của bạn.",
        img: "/images/care-service.jpg",
    },
    {
        name: "Bán Thức Ăn Thú Cưng",
        description: "Cung cấp các loại thức ăn chất lượng cho chó, mèo và các loại thú cưng khác.",
        img: "/images/food-service.jpg",
    },
    {
        name: "Dịch Vụ Chăm Sóc Thú Cưng",
        description: "Tắm rửa, cắt tỉa lông, chăm sóc sức khỏe cho thú cưng của bạn.",
        img: "/images/care-service.jpg",
    },
    {
        name: "Bán Thức Ăn Thú Cưng",
        description: "Cung cấp các loại thức ăn chất lượng cho chó, mèo và các loại thú cưng khác.",
        img: "/images/food-service.jpg",
    },
    {
        name: "Dịch Vụ Chăm Sóc Thú Cưng",
        description: "Tắm rửa, cắt tỉa lông, chăm sóc sức khỏe cho thú cưng của bạn.",
        img: "/images/care-service.jpg",
    },
    {
        name: "Bán Thức Ăn Thú Cưng",
        description: "Cung cấp các loại thức ăn chất lượng cho chó, mèo và các loại thú cưng khác.",
        img: "/images/food-service.jpg",
    },
    {
        name: "Dịch Vụ Chăm Sóc Thú Cưng",
        description: "Tắm rửa, cắt tỉa lông, chăm sóc sức khỏe cho thú cưng của bạn.",
        img: "/images/care-service.jpg",
    },
    {
        name: "Bán Thức Ăn Thú Cưng",
        description: "Cung cấp các loại thức ăn chất lượng cho chó, mèo và các loại thú cưng khác.",
        img: "/images/food-service.jpg",
    },
    {
        name: "Dịch Vụ Chăm Sóc Thú Cưng",
        description: "Tắm rửa, cắt tỉa lông, chăm sóc sức khỏe cho thú cưng của bạn.",
        img: "/images/care-service.jpg",
    },
    {
        name: "Bán Thức Ăn Thú Cưng",
        description: "Cung cấp các loại thức ăn chất lượng cho chó, mèo và các loại thú cưng khác.",
        img: "/images/food-service.jpg",
    },
    {
        name: "Dịch Vụ Chăm Sóc Thú Cưng",
        description: "Tắm rửa, cắt tỉa lông, chăm sóc sức khỏe cho thú cưng của bạn.",
        img: "/images/care-service.jpg",
    },
];

const ServicesPage = () => (
    <div className="page-container services-page-content">
        <h1>Dịch Vụ Của Chúng Tôi</h1>
        <div className="services-list">
            <ul>
                {services.map((service, index) => (
                    <li className="service" key={index}>
                        <div className="service-item">
                            <div className="service-image">
                                <div
                                    className="service-img-subject"
                                    style={{
                                        backgroundImage: `url(${service.img})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                        width: "200px",
                                        height: "150px",
                                    }}
                                ></div>
                            </div>
                            <div className="service-name">{service.name}</div>
                            <div className="service-description">{service.description}</div>
                            <button className="service-button">Tìm hiểu thêm</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export default ServicesPage;