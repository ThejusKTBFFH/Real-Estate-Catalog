import React from "react";
import "./GeneralInfo.css";
import Property from "../Display/Property";
import AddNewProperty from "./addNewProperty";
import Sidebar from "../SideBar/sidebar";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";






const GeneralInfo = () => {
//   const location = useLocation();
//   const navigator = useNavigate();
//   const propertyDetails = location.state.propertyDetails;
//   const basicDetails = location.state.basicDetails;

  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    mobile: "",
    posted_by: "",
    saleType: "",
    featuredPackage: "",
    ppdPackage: "",
    file: null,
  });
//   const onContinue = () => {
//     //console.log(generalInfo);
//     // navigator("/locationInfo", {
//     //   state: { generalInfo, propertyDetails, basicDetails },
//     });
  
  return (
    <>
      <div className="home">
        <section className="one">
          <Sidebar />
        </section>

        <section className="two">
          <Property />
          <AddNewProperty />
          <div className="maincontainer">
            <div className="row">
              <div>
                <span>Name</span>

                <div className="selectBox">
                  <select
                    defaultValue={"toilet"}
                    className="selectBox"
                    onChange={(e) => {
                      setGeneralInfo({ ...generalInfo, name: e.target.value });
                    }}
                  >
                    <option value={"toilet"}>Owner</option>
                    <option>Yes</option>
                    <option>NO</option>
                  </select>
                </div>
              </div>

              <div>
                <span>Mobile</span>
                <div className="selectBox">
                  <input
                    className="selectBox"
                    placeholder="Enter Mobile Number"
                    type="text"
                    required
                    onChange={(e) => {
                      setGeneralInfo({
                        ...generalInfo,
                        mobile: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div>
                <span>Posted by</span>

                <div className="selectBox">
                  <select
                    defaultValue={"toilet"}
                    className="selectBox"
                    onChange={(e) => {
                      setGeneralInfo({
                        ...generalInfo,
                        posted_by: e.target.value,
                      });
                    }}
                  >
                    <option value={"toilet"}>Posted by</option>
                    <option>Yes</option>
                    <option>NO</option>
                  </select>
                </div>
              </div>

              <div>
                <span>Sale Type</span>
                <div className="selectBox">
                  <select
                    defaultValue={"toilet"}
                    className="selectBox"
                    onChange={(e) => {
                      setGeneralInfo({
                        ...generalInfo,
                        saleType: e.target.value,
                      });
                    }}
                  >
                    <option value={"toilet"}>Please Select</option>
                    <option>Yes</option>
                    <option>NO</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              <div>
                <span>Featured Package</span>

                <div className="selectBox">
                  <select
                    defaultValue={"toilet"}
                    className="selectBox"
                    onChange={(e) => {
                      setGeneralInfo({
                        ...generalInfo,
                        featuredPackage: e.target.value,
                      });
                    }}
                  >
                    <option value={"toilet"}>Please Select</option>
                    <option>Yes</option>
                    <option>NO</option>
                  </select>
                </div>
              </div>

              <div>
                <span>PPD Package</span>
                <div className="selectBox">
                  <select
                    defaultValue={"toilet"}
                    className="selectBox"
                    onChange={(e) => {
                      setGeneralInfo({
                        ...generalInfo,
                        ppdPackage: e.target.value,
                      });
                    }}
                  >
                    <option value={"toilet"}>Please Select</option>
                    <option>Yes</option>
                    <option>NO</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="filephoto">
            <img
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/camera-274-123431.png"
              alt="pic"
            />
            <input
              type="file"
              id="photo"
              name="file"
              onChange={(e) => {
                setGeneralInfo({ ...generalInfo, file: e.target.files[0] });
              }}
            />
          </div>


          <div className="newbuttoncontainer">
            <div className="newbutton">
              <button
                onClick={() => {
                  navigator("/propertyDetail", 
                //   { state: { propertyDetails } }
                  );
                }}
              >
                Previous
              </button>
            </div>
 
            <div className="newbutton">
              <button
            //    onClick={onContinue}
               >Save & Continue</button> 
            </div>
          </div> 
        </section>
      </div>

    
    </>
  );
};

export default GeneralInfo;