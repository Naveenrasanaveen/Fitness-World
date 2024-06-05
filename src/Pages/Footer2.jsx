import React from "react";
import "./Footer2.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";

const Footer2 = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2995e12a-862b-4e00-88aa-bb27e9ddc4b2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email send Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <h1>Get in Touch</h1>
      <div className="message-container">
        <div className="message-content">
          <ul>
            <li>
              <h3>Send us a message</h3>
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              placeat sapiente <br /> veritatis alias velit eaque natus mollitia
              vero, error aliquid pariatur voluptate, adipisci <br />
              Aut fugiat dignissimos doloremque at voluptas?
            </li>
            <li>
              <FaPhoneAlt />
              <p>+123-456-809</p>
            </li>
            <li>
              <IoMail />
              <p>Contact@gmail.com</p>
            </li>
            <li>
              <IoLocationSharp />
              <p>
                77 massachunset Ave,Cambridge <br /> MA 01234,United States
              </p>
            </li>
          </ul>
        </div>
        <div className="messageing">
          <form onSubmit={onSubmit}>
            <label htmlFor="">your name</label>
            <input
              type="text"
              placeholder="Enter Your name"
              required
              name="name"
            />
            <label htmlFor="">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your number"
              required
              name="phone"
            />
            <label htmlFor="">Write Your message Here</label>
            <textarea
              name="message"
              required
              placeholder="Enter your message"
            ></textarea>
            <button type="submit">Submit now</button>
          </form>
          <br />
          <span className="sending-btn">{result}</span>
        </div>
      </div>
    </>
  );
};

export default Footer2;
