import axios from "axios";
import {useNavigate} from "react-router-dom"
import Uslogo from "./HomeLogo/uslogo.svg"
import './Property.css'


import {ToastContainer, toast} from 'react-toastify';

const Property =()=>{
    const navigator = useNavigate()

    // let email = window.localStorage.getItem('email');
    // let setemail = email.split('@')[0]

    const handleLogout = ()=>{
        axios.get('')
        .then((data)=>{
            localStorage.removeItem('email')
            localStorage.removeItem('id')
            toast.success(data.data.massage);
            navigator("/");
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    return(
        <div className="display-property">
            <div className="user">
                <div className="right">
                    USER ID : 06PPD125
                </div>
                <div className="left">
                    <section>
                        <div>
                            <img src={Uslogo} alt={"User"} />
                        </div>
                        <div className="select">
                            <select defaultValue={'Username'} onChange={handleLogout}>
                                <option value="Username">
                                    {/* {`${setemail}`} */}email
                                </option>
                                <option value={'Sign Out'}>
                                    Sign Out
                                </option>
                            </select>
                        </div>
                    </section>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default Property;