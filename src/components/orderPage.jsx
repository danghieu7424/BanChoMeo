import React, { useEffect, useState } from "react";
import "../access/css/orderPage.scss";

// Dummy data for ordered items
const OrderPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    const initialItems = orders.map((order) => ({
      ...order,
      price:
        typeof order.price === "string"
          ? Number(order.price.replace(/[^\d]/g, ""))
          : order.price,
      quantity: order.quantity !== undefined ? order.quantity : 1,
    }));
    setItems(initialItems);
  }, []);

  const handleQuantityChange = (id, value) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, Number(value)) } : item
    );
    setItems(newItems);
  };

  const getTotal = () =>
    items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Kiểm tra điều kiện số lượng: không được nhỏ hơn 1 và phải là số nguyên
  const isQuantityValid = items.every(
    (item) => Number.isInteger(item.quantity) && item.quantity >= 1
  );

  const handleCheckout = () => {
    alert("Thanh toán thành công!");
  };

  const handleDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    localStorage.setItem("orders", JSON.stringify(newItems));
  };

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
              <th>Xóa</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
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
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(item.id)}
                  >
                    Xóa
                  </button>
                </td>
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
          title={
            !isQuantityValid
              ? "Vui lòng nhập số lượng hợp lệ (>= 1, số nguyên)"
              : ""
          }
          onClick={handleCheckout}
        >
          Thanh toán
        </button>
      </div>
    </div>
  );
};

export default OrderPage;
