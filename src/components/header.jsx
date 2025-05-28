import React from "react";
import { Link } from "react-router-dom";

import "../access/css/header.scss";

export default function Header() {
  const encode = (str) => btoa(unescape(encodeURIComponent(str)));
  const decode = (str) => decodeURIComponent(escape(atob(str)));

  const [username, setUsername] = React.useState(null);

  React.useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("login_token");

      if (token) {
        try {
          setUsername(JSON.parse(decode(token)));
          console.log("Username from token:", JSON.parse(decode(token)));
        } catch (e) {
          setUsername(null);
        }
      } else {
        setUsername(null);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("login_token");
    localStorage.removeItem("username");
    setUsername(null);
    window.location.reload();
  };

  return (
    <header>
      <div className="header-logo"></div>
      <div className="header-nav">
        <ul>
          <li>
            <Link to="/">Trang chủ</Link>
          </li>
          <li>
            <span>Sản phẩm</span>
            <ul>
              <li>
                <Link to="/Product/dog">Giống chó</Link>
              </li>
              <li>
                <Link to="/product/cat">Giống mèo</Link>
              </li>
            </ul>
          </li>
          <li>
            <span>Dịch vụ</span>
            <ul>
              <li>
                <Link to="/services/dog">Cho chó</Link>
              </li>
              <li>
                <Link to="/services/cat">Cho mèo</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="header-user">
        {username ? (
          <div className="user-info">
            <span>{username.username}</span>
            <ul className="infor-more">
              <li>
                <Link to="/order">Đơn đặt</Link>
              </li>
              <li>
                <Link to="/change-password">Đổi mật khẩu</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Đăng xuất</button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">login</Link>
        )}
      </div>
    </header>
  );
}
