import React from 'react';
import "./addNewProperty.css";
export default function addNewProperty() {
   const tab ={}
    return (
        <>
            <h3>ADD NEW PROPERTY</h3>
            <div className="addnewproperty">
                <div className="addpages">
                    <div className={tab === '/BasicInfo' ? "tabs" : "tabs2"}>
                        <span>1</span><div>Basic Info</div>
                        </div>

                    <div className={tab === "/PropertyDetails" ? "tabs" : "tabs2"}>
                        <span>2</span><div>Property Details</div>
                    </div>

                    <div className={tab === "/GeneralInfo" ? "tabs" : "tabs2"}>
                        <span>3</span><div>General Info</div>
                    </div>

                    <div className={tab === "/LocationInfo" ? "tabs" : "tabs2"}>
                        <span>4</span><div>Location Info</div>
                    </div>

                </div>
            </div>
        </>
    )
}