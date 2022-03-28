import React, { useState } from "react";
import { RiCloseFill } from "react-icons/ri";

const InputCard = ({ title, placeHolder, value, setValue, inputType }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h6 style={{ fontSize: 18, fontWeight: 600, margin: "10px 0" }}>
        {title}
      </h6>
      <input
        style={{
          padding: "10px",
          border: "none",
          borderBottom: "2px solid #00000040",
          fontSize: 16,
          marginBottom: 40,
          outline: "none",
        }}
        type={inputType ? inputType : "text"}
        placeholder={placeHolder}
        value={value}
        onChange={(val) => setValue(val.target.value)}
      />
    </div>
  );
};

const LoginCard = ({ setIsLoginOpen, setIsLoginCard }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div
      style={{
        padding: 40,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
        borderRadius: 10,
        width: "40%",
        alignItems: "center",
        zIndex: 1000,
        position: "relative",
      }}
    >
      <RiCloseFill
        onClick={() => setIsLoginOpen(false)}
        style={{
          position: "absolute",
          right: 20,
          top: 20,
          fontSize: 22,
          cursor: "pointer",
        }}
      />
      <h4
        style={{
          fontSize: 30,
          fontWeight: 700,
          letterSpacing: 2,
          marginBottom: 60,
        }}
      >
        Login
      </h4>
      <div style={{ width: "100%" }}>
        <InputCard
          title="User Name"
          placeHolder="Enter user name here"
          value={userName}
          setValue={setUserName}
        />
        <InputCard
          title="Password"
          placeHolder="Password here"
          value={password}
          setValue={setPassword}
          inputType="password"
        />
      </div>
      <button
        style={{
          padding: "10px 0",
          border: "none",
          backgroundColor: "#00aa0080",
          fontSize: 22,
          fontWeight: 600,
          color: "#ffffff",
          width: "50%",
          borderRadius: 10,
          marginBottom: 20,
          cursor: "pointer",
        }}
      >
        Login
      </button>
      <h4 style={{ fontSize: 18 }}>
        Have no account ?{" "}
        <span
          onClick={() => setIsLoginCard(false)}
          style={{
            fontSize: 18,
            fontWeight: 600,
            cursor: "pointer",
            marginLeft: 10,
          }}
        >
          Create New{" "}
        </span>
      </h4>
    </div>
  );
};

const SignUpCard = ({ setIsLoginOpen, setIsLoginCard }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div
      style={{
        padding: 40,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
        borderRadius: 10,
        width: "40%",
        alignItems: "center",
        zIndex: 1000,
        position: "relative",
      }}
    >
      <RiCloseFill
        onClick={() => setIsLoginOpen(false)}
        style={{
          position: "absolute",
          right: 20,
          top: 20,
          fontSize: 22,
          cursor: "pointer",
        }}
      />
      <h4
        style={{
          fontSize: 30,
          fontWeight: 700,
          letterSpacing: 2,
          marginBottom: 60,
        }}
      >
        SignUp
      </h4>
      <div style={{ width: "100%" }}>
        <InputCard
          title="User Name"
          placeHolder="Enter user name here"
          value={userName}
          setValue={setUserName}
        />
        <InputCard
          title="Password"
          placeHolder="Password here"
          value={password}
          setValue={setPassword}
          inputType="password"
        />
        <InputCard
          title="Confirm Password"
          placeHolder="Confirm password"
          value={confirmPassword}
          setValue={setConfirmPassword}
          inputType="password"
        />
      </div>
      <button
        style={{
          padding: "10px 0",
          border: "none",
          backgroundColor: "#00aa0080",
          fontSize: 22,
          fontWeight: 600,
          color: "#ffffff",
          width: "50%",
          borderRadius: 10,
          marginBottom: 20,
          cursor: "pointer",
        }}
      >
        SignUp
      </button>
      <h4 style={{ fontSize: 18 }}>
        Already have an account ?{" "}
        <span
          onClick={() => setIsLoginCard(true)}
          style={{
            fontSize: 18,
            fontWeight: 600,
            cursor: "pointer",
            marginLeft: 10,
          }}
        >
          Login
        </span>
      </h4>
    </div>
  );
};

export const LoginSignUp = ({ setIsLoginOpen, isLoginOpen }) => {
  const [isLoginCard, setIsLoginCard] = useState(true);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",

        zIndex: 1,
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        onClick={() => setIsLoginOpen(false)}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "#00000060",
        }}
      ></div>
      {isLoginCard ? (
        <LoginCard
          setIsLoginOpen={setIsLoginOpen}
          setIsLoginCard={setIsLoginCard}
        />
      ) : (
        <SignUpCard
          setIsLoginOpen={setIsLoginOpen}
          setIsLoginCard={setIsLoginCard}
        />
      )}
    </div>
  );
};
