import React from 'react';

function Contact() {
  return (
    <div className="container my-5">
      <h1 className="display-5 my-3">Contact Me</h1>
      <div className="row">
        <div className="col">
          <label for="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            aria-label="First name"
          />
        </div>
        <div className="col">
          <label for="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            aria-label="Last name"
          />
        </div>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Send a message!
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button type="button" className="btn btn-light">
        Submit
      </button>
    </div>
  );
}

export default Contact;
