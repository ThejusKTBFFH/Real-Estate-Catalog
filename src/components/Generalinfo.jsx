import React from "react";
import "./GeneralInfo.css";
import Property from "../Display/Property";
import AddNewProperty from "./AddNewProperty";
import Sidebar from "../SideBar/sidebar";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FileBase64 from "react-file-base64"





const GeneralInfo = () => {
  const location = useLocation();
  const navigator = useNavigate();


  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    mobile: "",
    posted_by: "",
    saleType: "",
    featuredPackage: "",
    ppdPackage: "",
    siteImage: ""
  });



  const propertyDetails = location.state.propertyDetails;
  const basicDetails = location.state.basicDetails;
  const onContinue = () => {
    //console.log(generalInfo);
    navigator("/locationInfo", {
      state: { generalInfo, propertyDetails, basicDetails },
    });
  };
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
                    defaultValue={"property"}
                    className="selectBox"
                    onChange={(e) => {
                      setGeneralInfo({ ...generalInfo, name: e.target.value });
                    }}
                  >
                    <option value={"property"}>Owner</option>
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
                    defaultValue={"property"}
                    className="selectBox"
                    onChange={(e) => {
                      setGeneralInfo({
                        ...generalInfo,
                        posted_by: e.target.value,
                      });
                    }}
                  >
                    <option value={"property"}>Posted by</option>
                    <option>Yes</option>
                    <option>NO</option>
                  </select>
                </div>
              </div>

              <div>
                <span>Sale Type</span>
                <div className="selectBox">
                  <select
                    defaultValue={"property"}
                    className="selectBox"
                    onChange={(e) => {
                      setGeneralInfo({
                        ...generalInfo,
                        saleType: e.target.value,
                      });
                    }}
                  >
                    <option value={"property"}>Please Select</option>
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
                    defaultValue={"property"}
                    className="selectBox"
                    onChange={(e) => {
                      setGeneralInfo({
                        ...generalInfo,
                        featuredPackage: e.target.value,
                      });
                    }}
                  >
                    <option value={"property"}>Please Select</option>
                    <option>Yes</option>
                    <option>NO</option>
                  </select>
                </div>
              </div>

              <div>
                <span>PPD Package</span>
                <div className="selectBox">
                  <select
                    defaultValue={"property"}
                    className="selectBox"
                    onChange={(e) => {
                      setGeneralInfo({
                        ...generalInfo,
                        ppdPackage: e.target.value,
                      });
                    }}
                  >
                    <option value={"property"}>Please Select</option>
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
            <FileBase64
              onDone={(e) => {
                if (new Blob([e.base64]).size > 5000000) {
                  alert("max file size is 5 mb")
                  return
                } else {
                  setGeneralInfo({ ...generalInfo, siteImage: e.base64 })
                }
              }}
            />
            <img src={generalInfo.siteImage} style={{ width: "100px" }} />
          </div>


          <div className="newbuttoncontainer">
            <div className="newbutton">
              <button
                onClick={() => {
                  navigator("/propertyDetail", { state: { propertyDetails } });
                }}
              >
                Previous
              </button>
            </div>

            <div className="newbutton">
              <button onClick={onContinue}>Save & Continue</button>
            </div>
          </div>
        </section>
      </div>


    </>
  );
};

export default GeneralInfo;