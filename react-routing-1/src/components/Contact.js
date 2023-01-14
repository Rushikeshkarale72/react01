import React from "react";

const Contact = () => {
  return (
    <div className="col-10 mx-auto mt-5">
      <div className="row mt-5">
        <div className="col-6">
          <h1 className="mep">I Connect With Us</h1>
          <div className="ms-3">
            <p className="enquiry">Enquiry</p>
            <p className="ms-3 para">rushikeshkarale72@gmail.com</p>
            <p className="ms-3 para">+91-976-799-0068</p>
          </div>
          <hr />
          <div className="ms-3">
            <p className="enquiry">Procurement Team</p>
            <p className="ms-3 para">rushikeshkarale72@gmail.com</p>
            <p className="ms-3 para">+91-976-799-0068</p>
          </div>
          <hr />
          <div className="ms-3">
            <p className="enquiry">General Enquiry</p>

            <p className="ms-3 para">+91-976-799-0068</p>
          </div>
          <hr />
        </div>
        <div className="col-6">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Name
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Contact Number
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Expected Date
            </label>
            <input
              type="date"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>

          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Message
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button type="button" class="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;