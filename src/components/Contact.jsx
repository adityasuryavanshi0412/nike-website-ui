import React, { useState } from "react";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");

  const submithandle = (e) => {
    e.preventDefault();
    console.log("Name: ", name, "\nEmail: ", email, "\nAddress: ", address);
    setname("");
    setemail("");
    setaddress("");
    alert("Message Sent Successfully");
  };
  return (
    <>
      <div className="p-3">
        <div className="text-center text-md-start mb-4">
          <h1 className="fw-bold">GET IN TOUCH WITH US</h1>
          <p>
            WE'RE HERE TO HELP YOU. REACH OUT TO US FOR ANY ASSISTANCE,
            QUESTIONS OR FEEDBACK.
          </p>
        </div>

        <div className="d-flex flex-column flex-lg-row gap-4 w-100">
          <div className="d-flex justify-content-center w-100 w-lg-50">
            <div className="d-flex flex-column align-items-center bg-success-subtle p-3 w-100 rounded-3">
              <h3>CONTACT FORM</h3>

              <form
                onSubmit={submithandle}
                className="p-3 d-flex flex-column gap-2 w-100"
              >
                <input
                  required
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  className="p-2 rounded-2 border"
                  type="text"
                  placeholder="Name"
                />

                <input
                  required
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  className="p-2 rounded-2 border"
                  type="email"
                  placeholder="Email"
                />

                <textarea
                  required
                  rows={4}
                  value={address}
                  onChange={(e) => setaddress(e.target.value)}
                  className="p-2 rounded-2 border"
                  placeholder="Message"
                />

                <button className="text-uppercase px-3 py-2 border-0 bg-danger text-white rounded-2">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="d-flex justify-content-center w-100 w-lg-50">
            <div className="d-flex flex-column bg-success-subtle p-3 w-100 rounded-3">
              <h3 className="text-center">CUSTOMER SERVICE</h3>

              <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 mt-3">
                <div>
                  <dl>
                    <dt>Call Us</dt>
                    <dd>+91 8563849320</dd>
                  </dl>

                  <dl>
                    <dt>Email Us</dt>
                    <dd>nike@email.com</dd>
                  </dl>
                </div>

                <img
                  src="images/shoes4.jpeg"
                  alt="Customer Service"
                  className="w-50 rounded-3 img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
