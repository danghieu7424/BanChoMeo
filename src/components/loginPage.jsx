import React, { useState, useEffect, useRef } from "react";
import _ from "lodash";
import "../access/css/loginPage.scss";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [handsHidden, setHandsHidden] = useState(false);
  const [handsPeek, setHandsPeek] = useState(false);
  const [rotateHead, setRotateHead] = useState("0deg");

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const tongueRef = useRef(null);

  useEffect(() => {
    const usernameInput = usernameRef.current;
    const passwordInput = passwordRef.current;

    const handlePasswordFocus = () => {
      setHandsHidden(true);
      setHandsPeek(false);
      tongueRef.current?.classList.remove("breath");
    };

    const handlePasswordBlur = () => {
      setHandsHidden(false);
      setHandsPeek(false);
      tongueRef.current?.classList.add("breath");
    };

    const handleUsernameFocus = () => {
      const length = Math.min(username.length - 16, 19);
      setRotateHead(`${-length}deg`);
      setHandsHidden(false);
      setHandsPeek(false);
    };

    const handleUsernameBlur = () => {
      setRotateHead("0deg");
    };

    const handleUsernameInput = _.throttle((e) => {
      const length = Math.min(e.target.value.length - 16, 19);
      setRotateHead(`${-length}deg`);
    }, 100);

    usernameInput?.addEventListener("focus", handleUsernameFocus);
    usernameInput?.addEventListener("blur", handleUsernameBlur);
    usernameInput?.addEventListener("input", handleUsernameInput);
    passwordInput?.addEventListener("focus", handlePasswordFocus);
    passwordInput?.addEventListener("blur", handlePasswordBlur);

    return () => {
      usernameInput?.removeEventListener("focus", handleUsernameFocus);
      usernameInput?.removeEventListener("blur", handleUsernameBlur);
      usernameInput?.removeEventListener("input", handleUsernameInput);
      passwordInput?.removeEventListener("focus", handlePasswordFocus);
      passwordInput?.removeEventListener("blur", handlePasswordBlur);
    };
  }, [username]);

  const handleShowPassword = () => {
    if (showPassword) {
      setHandsPeek(false);
      setHandsHidden(true);
    } else {
      setHandsHidden(false);
      setHandsPeek(true);
    }
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="mainform">
      <div className="login-container">
        <div className="ear ear--left"></div>
        <div className="ear ear--right"></div>
        <div className="face" style={{ "--rotate-head": rotateHead }}>
          <div className="eyes">
            <div className="eye eye--left">
              <div className="glow"></div>
            </div>
            <div className="eye eye--right">
              <div className="glow"></div>
            </div>
          </div>
          <div className="nose">
            <svg width="38.161" height="22.03">
              <path
                d="M2.017 10.987Q-.563 7.513.157 4.754C.877 1.994 2.976.135 6.164.093
              16.4-.04 22.293-.022 32.048.093c3.501.042 5.48 2.081 6.02 4.661q.54 2.579-2.051
              6.233-8.612 10.979-16.664 11.043-8.053.063-17.336-11.043z"
                fill="#243946"
              />
            </svg>
            <div className="glow"></div>
          </div>
          <div className="mouth">
            <svg className="smile" viewBox="-2 -2 84 23" width="84" height="23">
              <path
                d="M0 0c3.76 9.279 9.69 18.98 26.712 19.238 17.022.258 10.72.258
              28 0S75.959 9.182 79.987.161"
                fill="none"
                stroke="#243946"
                strokeWidth="3"
                strokeLinecap="square"
                strokeMiterlimit="3"
              />
            </svg>
            <div className="mouth-hole"></div>
            <div className="tongue breath" ref={tongueRef}>
              <div className="tongue-top"></div>
              <div className="line"></div>
              <div className="median"></div>
            </div>
          </div>
        </div>

        <div className="hands">
          <div
            className={`hand hand--left ${handsHidden ? "hide" : ""} ${
              handsPeek ? "peek" : ""
            }`}
          >
            {[...Array(3)].map((_, i) => (
              <div className="finger" key={`l-${i}`}>
                <div className="bone"></div>
                <div className="nail"></div>
              </div>
            ))}
          </div>
          <div
            className={`hand hand--right ${handsHidden ? "hide" : ""} ${
              handsPeek ? "peek" : ""
            }`}
          >
            {[...Array(3)].map((_, i) => (
              <div className="finger" key={`r-${i}`}>
                <div className="bone"></div>
                <div className="nail"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="login">
          <label>
            <div className="fa fa-phone"></div>
            <input
              ref={usernameRef}
              className="username"
              type="text"
              placeholder="Username"
              autoComplete="on"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            <div className="fa fa-commenting"></div>
            <input
              ref={passwordRef}
              className="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="password-button" onClick={handleShowPassword}>
              {showPassword ? "Ẩn Mật Khẩu" : "Hiện Mật Khẩu"}
            </button>
          </label>
          <button className="login-button">Đăng Nhập</button>
        </div>

        <div className="social-buttons">
          <div className="social">
            <div className="fa fa-wechat"></div>
          </div>
          <div className="social">
            <div className="fa fa-weibo"></div>
          </div>
          <div className="social">
            <div className="fa fa-paw"></div>
          </div>
        </div>

        <div className="footer">H&H</div>
      </div>
    </div>
  );
};

export default LoginPage;
