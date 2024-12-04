import React, { useState, useEffect } from "react";

const Validation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPass] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Enter your name.";
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      newErrors.email = "Enter a valid email.";
    }

    if (!age || age <= 0) {
      newErrors.age = "Please enter a valid age.";
    }

    if (!password.trim() || password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    setErrors(newErrors);
  }, [name, email, age, password]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(errors).length === 0) {
      console.log("Form successfully submitted with data:", {
        name,
        email,
        age,
        password,
      });
    } else {
      console.log("Form contains errors:", errors);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name."
          style={{ padding: "10px", width: "100%" }}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>

      <div style={{ marginBottom: "15px" }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email."
          style={{ padding: "10px", width: "100%" }}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <div style={{ marginBottom: "15px" }}>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter your age."
          style={{ padding: "10px", width: "100%" }}
        />
        {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
      </div>

      <div style={{ marginBottom: "15px" }}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Enter your password."
          style={{ padding: "10px", width: "100%" }}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>

      <button
        type="submit"
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </form>
  );
};
Validation();
export default Validation;
