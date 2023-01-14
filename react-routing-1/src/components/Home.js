import React from "react";
import hom from "../images/home.png";
const Home = () => {
  return (
    <div className="col-10 mx-auto mt-5 pt-5">
      <div className="row">
        <div className="col-6">
          <p className="heading">
            Leading MEP & Facility management company in Dubai
          </p>
          <p className="urban">
            Urban Science is always ready to accept your challenges Meeting your
            goals is our main objective. Professional services for facility
            management & MEP works.
          </p>
          <button type="button" className="btn btn-primary buto mt-5">
            Company Profile
          </button>
        </div>
        <div className="col-6">
          <img src={hom} alt="home" width={650} height={500} />
        </div>
      </div>
    </div>
  );
};

export default Home;