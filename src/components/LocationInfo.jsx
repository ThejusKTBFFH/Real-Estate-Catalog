import React from "react";
import AddNewProperty from "./addNewProperty";
import Sidebar from "../SideBar/sidebar";
import Property from "../Display/Property";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./LocationInfo.css";

export default function LocationInfo() {
  const navigator = useNavigate()
  const location = useLocation()
  const [locationInfo, setLocationInfo] = useState({
    email: "",
    city: "",
    area: "",
    pincode: "",
    address: "",
    landmark: "",
    latitude: "",
    longitude: "",
  });

  return (
    <>
      <div className="home">
        <div className="one">
          <Sidebar />
        </div>
        <div className="two">
          <Property />
          <AddNewProperty />

          <div className="maincontainer">
            <div className="box1">
              <div className="row">
                <div>
                  <span>Email</span>

                  <div className="selectBox">
                    <input
                      className="selectBox"
                      placeholder="Email"
                      onChange={(e) => {
                        setLocationInfo({
                          ...LocationInfo,
                          email: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>

                <div>
                  <span>City</span>
                  <div className="selectBox">
                    <select
                      defaultValue={"toilet"}
                      className="selectBox"
                      onChange={(e) => {
                        setLocationInfo({
                          ...LocationInfo,
                          city: e.target.value,
                        });
                      }}
                    >
                      <option value={"toilet"}>Select City</option>
                      <option>Delhi</option>
                      <option>Ranchi</option>
                      <option>Mumbai</option>
                      <option>Bangalore</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div>
                  <span> Area</span>

                  <div className="selectBox">
                    <select
                      defaultValue={"toilet"}
                      className="selectBox"
                      onChange={(e) => {
                        setLocationInfo({
                          ...LocationInfo,
                          area: e.target.value,
                        });
                      }}
                    >
                      <option value={"toilet"}>Select Area</option>
                      <option>Yes</option>
                      <option>NO</option>
                    </select>
                  </div>
                </div>

                <div>
                  <span>Pincode</span>
                  <div className="selectBox">
                    <select
                      defaultValue={"toilet"}
                      className="selectBox"
                      onChange={(e) => {
                        setLocationInfo({
                          ...LocationInfo,
                          pincode: e.target.value,
                        });
                      }}
                    >
                      <option value={"toilet"}>Select Pincode</option>
                      <option>834004</option>
                      <option>834001</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="box2">
              <div className="row">
                <div>
                  <span>Address</span>

                  <div className="selectBox">
                    <input
                      className="selectBox"
                      placeholder="Address"
                      onChange={(e) => {
                        setLocationInfo({
                          ...LocationInfo,
                          address: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>

                <div>
                  <span>Landmark</span>
                  <div className="selectBox">
                    <input
                      className="selectBox"
                      placeholder="Landmark"
                      onChange={(e) => {
                        setLocationInfo({
                          ...LocationInfo,
                          landmark: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div>
                  <span>Latitude</span>

                  <div className="selectBox">
                    <input
                      className="selectBox"
                      placeholder="Latitude"
                      onChange={(e) => {
                        setLocationInfo({
                          ...LocationInfo,
                          latitude: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>

                <div>
                  <span>Longitude</span>
                  <div className="selectBox">
                    <input
                      className="selectBox"
                      placeholder="Latitude"
                      onChange={(e) => {
                        setLocationInfo({
                          ...LocationInfo,
                          longitude: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="newbuttoncontainer">
            <div className="newbutton">
              <button
                onClick={() => {
                  navigator("/generalInfo");
                }}
              >
                Previous
              </button>
            </div>

            <div className="newbutton">
              <button>Add Property</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}