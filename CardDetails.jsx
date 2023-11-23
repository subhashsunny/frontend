import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./Card.css";
function CardDetails(){
const [number, setNumber] = useState("");
const [name, setName] = useState("");
const [expiry, setExpiry] = useState("");
const [cvc, setCvc] = useState("");
const [focus, setFocus] = useState("");

const handleNumberChange = (e) => {
  const inputNumber = e.target.value.replace(/\D/g,'');
  if (inputNumber.length <= 16) { // Maximum card number length is 16 digits
    setNumber(inputNumber);
  }
};

const handleNameChange = (e) => {
  const inputName = e.target.value.replace(/[^a-zA-Z\s]/g,'');
  if (inputName.length <= 30) { // Maximum name length is 50 characters
    setName(inputName);
  }
};

const handleExpiryChange = (e) => {
  const inputExpiry = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
  const currentYear = new Date().getFullYear() % 100; // Get last 2 digits of current year
  const currentMonth = new Date().getMonth() + 1; // January is 0 in JavaScript
 
  // Check if the input has at least 4 characters (MM/YY)
  if (inputExpiry.length >= 4) {
    const inputMonth = parseInt(inputExpiry.slice(0, 2), 10);
    const inputYear = parseInt(inputExpiry.slice(2, 4), 10);
 
    // Validate for future dates
    if (
      inputYear > currentYear ||
      (inputYear === currentYear && inputMonth >= currentMonth)
    ) {
      const formattedExpiry = `${inputMonth}/${inputYear}`;
      setExpiry(formattedExpiry);
    } else {
      // If it's a past date, handle it accordingly (you can show an error message, for example)
      // For now, set the expiry as an empty string
      setExpiry('');
    }
  } else {
    // If the input doesn't have enough characters, update the expiry as entered
    setExpiry(inputExpiry);
  }
}; 

const handleCvcChange = (e) => {
  const inputCvc = e.target.value.replace(/\D/g,'');
  if (inputCvc.length <= 3) { // Maximum CVC length is 3 digits
    setCvc(inputCvc);
  }
};


return (
  <div id="f1"  className="App" >
    <Cards
      number={number}
      name={name}
      expiry={expiry}
      cvc={cvc}
      focused={focus}
    />
      <br></br>
    <form>
      <input
        type="tel"
        name="number"
        placeholder="card Number"
        value={number}
        onChange={handleNumberChange}
        onFocus={(e) => setFocus(e.target.inputNumber)}
      ></input>
      <br></br>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
        onFocus={(e) => setFocus(e.target.name)}
      ></input>
      <br></br>

      <input
        type="text"
        name="expiry"
        placeholder="MM/YY Expiry"
        value={expiry}
        onChange={handleExpiryChange}
        onFocus={(e) => setFocus(e.target.expiry)}
      ></input>
      <br></br>

      <input
        type="tel"
        name="cvc"
        placeholder=" CVC"
        value={cvc}
        pattern="\d{3}"
        required="true"
        onChange={handleCvcChange}
        onFocus={(e) => setFocus(e.target.cvc)}
      ></input><br></br>
      <br></br>
      <button
      className="btn"
      >submit</button>
    </form>
  </div>
);
}
export default CardDetails;