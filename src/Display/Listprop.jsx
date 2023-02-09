import React from "react";
import "./Listprop.css"
import Imagelogo from "./HomeLogo/imglogo.svg"
import Eyelogo from "./HomeLogo/eyelogo.svg"
import Editlogo from "./HomeLogo/editlogo.svg"

import {useState} from "react";
import { useEffect } from "react";
import axios from "axios";

const Listprop =()=>{
    const [photo,setPhoto] = useState(false);
    const [status,setStatus] = useState(false);

    const [clickedid, setClickedid] = useState('');
    // const [days,setDays] = useState(true);
    const [posts, setPosts] = useState();

    const id = window.localStorage.getItem("id");

    useEffect(()=>{
        
        axios.get("http://localhost:8080/userdetails/63e3cf6993f18a1555c086a6")
        .then((data)=>{
            console.log(data)
            let user = data.data.userProperties;
            const property = user.map((obj)=>{
                return{
                    property: obj.properties.map((prop)=> prop),
                };
            });

            property.map((data)=>{
                let user = data.property;
                return setPosts(user);
            })
        })
        .catch((error)=>{
            console.log(error);
        })
    },[id]);

    return(
        <>

        <div className="mainList">
            <div className="listprop">
                <div>PPD ID</div>
                <div>Image</div>
                <div>Property</div>
                <div>Contact</div>
                <div>Area</div>
                <div>Views</div>
                <div>Status</div>
                <div>DaysLeft</div>
                <div>Action</div>
            </div>
        </div>
        <div>

        

            {posts && posts.length>0 ?(

                posts.map((data)=>{
                    return(
                        <div className="dislist" key={data._id}>
                            <div>{data.ppdId}</div>
                            <div
                            onClick={()=>{
                                setPhoto(photo ? false: true);
                                setClickedid(data._id);
                            }}
                            className="imgClass"                            
                            >
                            
                            <img
                             src={
                                photo && clickedid === data._id ? data.siteImage : Imagelogo
                              }
                              alt={"img"}
                            />


                        </div>
                        <div>Plot</div>
                         <div>{data.mobile}</div>
                        <div>1200</div>
                          <div>{data.views}</div>

                          <div
                            onClick={() => {
                                setStatus(true);
                            }}
                            className="statusClass"
                            >
                                 {status ? "Sold" : ` ${data.status}`}
                            </div>
                            {status === true ? <p>00</p> : <div>{data.daysLeft}</div>}
                            <div className="action">
                            <img src={Eyelogo} alt="Eye" />

                            <img src={Editlogo} alt="Edit" />
                            </div>
                            </div>
                         );
                         
                })
                
            ):(
            <h1 className="noprop"> No Property Detail Added yet</h1>
            )}

            

        </div>
        


        </>
    )

}

export default Listprop;