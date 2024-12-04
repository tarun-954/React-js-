import { useEffect, useState } from "react";

function User() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [income, setIncome] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (isNaN(amount) || Number(amount) <= 0) {
      newErrors.amount = "Loan amount must be a positive number that is greater than 0";
    }

    if (!income.trim()) {
      newErrors.income = "Income is required";
    }

    setErrors(newErrors);
  }, [name, email, amount, income]);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      console.log("Form submitted with data:", { name, email, amount, income });
    } else {
      console.log("Form have errors!!!!!:", errors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Please enter your name"
      />
      <br/>
      {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email here"
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      <br/>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter loan amount"
      />
      {errors.amount && <p style={{ color: "red" }}>{errors.amount}</p>}
      <br/>
      <input
        type="number"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        placeholder="Enter income"
      />
       <br/>
      {errors.income && <p style={{ color: "red" }}>{errors.income}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default User;
