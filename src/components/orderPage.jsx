import React, { useState } from "react";
import "../access/css/orderPage.scss";

// Dummy data for ordered items
const initialItems = [
    { id: 1, name: "Chó Corgi", price: 5000000, quantity: 1 },
    { id: 2, name: "Mèo Anh Lông Ngắn", price: 3000000, quantity: 2 },
    { id: 3, name: "Thức ăn cho chó", price: 200000, quantity: 3 },
];

const OrderPage = () => {
    const [items, setItems] = useState(initialItems);

    const handleQuantityChange = (id, value) => {
        const newItems = items.map((item) =>
            item.id === id
                ? { ...item, quantity: Math.max(1, Number(value)) }
                : item
        );
        setItems(newItems);
    };

    const getTotal = () =>
        items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // Kiểm tra điều kiện số lượng: không được nhỏ hơn 1 và phải là số nguyên
    const isQuantityValid = items.every(
        (item) => Number.isInteger(item.quantity) && item.quantity >= 1
    );

    return (
        <div className="page-container order-page">
        <div className="order-container">
            <h2>Đơn Hàng Của Bạn</h2>
            <table className="order-table">
                <thead>
                    <tr>
                        <th>Mặt Hàng</th>
                        <th>Đơn Giá (VNĐ)</th>
                        <th>Số Lượng</th>
                        <th>Thành Tiền (VNĐ)</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.price.toLocaleString()}</td>
                            <td>
                                <input
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    onChange={(e) =>
                                        handleQuantityChange(item.id, e.target.value)
                                    }
                                />
                            </td>
                            <td>{(item.price * item.quantity).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="order-total">
                <span>Tổng cộng:</span>
                <span>{getTotal().toLocaleString()} VNĐ</span>
            </div>
            <button
                className="checkout-btn"
                disabled={!isQuantityValid}
                title={!isQuantityValid ? "Vui lòng nhập số lượng hợp lệ (>= 1, số nguyên)" : ""}
            >
                Thanh toán
            </button>
        </div>
        </div>
    );
};

export default OrderPage;