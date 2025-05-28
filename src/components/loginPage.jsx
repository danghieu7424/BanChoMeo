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

    const length = Math.min(username.length - 16, 19);
    setRotateHead(`${-length}deg`);

    usernameInput?.addEventListener("focus", handleUsernameFocus);
    usernameInput?.addEventListener("blur", handleUsernameBlur);
    passwordInput?.addEventListener("focus", handlePasswordFocus);
    passwordInput?.addEventListener("blur", handlePasswordBlur);

    return () => {
      usernameInput?.removeEventListener("focus", handleUsernameFocus);
      usernameInput?.removeEventListener("blur", handleUsernameBlur);
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

  // Encode and decode helpers
  const encode = (str) => btoa(unescape(encodeURIComponent(str)));
  const decode = (str) => decodeURIComponent(escape(atob(str)));

  // Fake user for demo
  const FAKE_USER = {
    username: "user123",
    password: "123456",
  };

  // On mount, check if already logged in
  useEffect(() => {
    const token = localStorage.getItem("login_token");
    if (token) {
      try {
        const data = JSON.parse(decode(token));
        if (data.username === FAKE_USER.username) {
          alert("Bạn đã đăng nhập!");
        }
      } catch {}
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === FAKE_USER.username && password === FAKE_USER.password) {
      const token = encode(JSON.stringify({ username }));
      localStorage.setItem("login_token", token);
      window.location.href = "/";
    } else {
      alert("Sai tài khoản hoặc mật khẩu!");
    }
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

        <form className="login" onSubmit={handleLogin}>
          <label>
            <svg className="fa" width="20" height="20" viewBox="0 0 24 24">
              <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
            </svg>
            <input
              ref={usernameRef}
              className="username"
              type="text"
              placeholder="Username"
              autoComplete="off"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </label>
          <label>
            <svg className="fa" width="20" height="20" viewBox="0 0 24 24">
              <path d="M7 17a5.007 5.007 0 0 0 4.898-4H14v2h2v-2h2v3h2v-3h1v-2h-9.102A5.007 5.007 0 0 0 7 7c-2.757 0-5 2.243-5 5s2.243 5 5 5zm0-8c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3z"></path>
            </svg>
            <input
              ref={passwordRef}
              className="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="password-button"
              type="button"
              onClick={handleShowPassword}
            >
              {showPassword ? (
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757c-.273.021-.55.038-.841.038-5.351 0-7.424-3.846-7.926-5a8.642 8.642 0 0 1 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379a.994.994 0 0 0 0 .633C2.073 12.383 4.367 19 12 19zm0-14c-1.837 0-3.346.396-4.604.981L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657a.994.994 0 0 0 0-.633C21.927 11.617 19.633 5 12 5zm4.972 10.558-2.28-2.28c.19-.39.308-.819.308-1.278 0-1.641-1.359-3-3-3-.459 0-.888.118-1.277.309L8.915 7.501A9.26 9.26 0 0 1 12 7c5.351 0 7.424 3.846 7.926 5-.302.692-1.166 2.342-2.954 3.558z"></path>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M14 12c-1.095 0-2-.905-2-2 0-.354.103-.683.268-.973C12.178 9.02 12.092 9 12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-.092-.02-.178-.027-.268-.29.165-.619.268-.973.268z"></path>
                  <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
                </svg>
              )}
            </button>
          </label>
          <button className="login-button" type="submit">
            Đăng Nhập
          </button>
        </form>

        <div className="footer">H&H</div>
      </div>
    </div>
  );
};

export default LoginPage;
