import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
//import Login from "./Login";
import "./Register.css";

function Register() {

    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [dob, setdob] = useState("");
    const [mobileno, setmobileno] = useState("");
    const [address, setaddress] = useState("");
    const [pincode, setpincode] = useState("");
    const [state, setstate] = useState("");
    const navigate = useNavigate();
    function loginNavi(event){
        event.preventDefault();
        navigate('/login');
    }

    async function save(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/user/save", {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password,
                dob:dob,
                mobileno:mobileno,
                address:address,
                pincode:pincode,
                state:state,
            });
            // alert("Employee Registation Successfully");
            navigate('/login');

        } catch (err) {
            alert(err);
        }
    }
    return (
        <div>
            <div id="regdiv" class="container mt-2" >
                {/* <div class="card"> */}
                    <h1>User Registation</h1>
                    <hr></hr>
                    <form id="form1" onSubmit="/home">
                        <div class="form-group">
                            <label>FirstName</label>
                            <input type="text" class="form-control" id="firstname" placeholder="Enter First Name"
                                value={firstname}
                                onChange={(event) => {
                                    setfirstname(event.target.value);
                                }}
                            />
                        </div>
                        <div class="form-group">
                            <label>LastName</label>
                            <input type="lastname" class="form-control" id="lastname" placeholder="Enter Last Name"
                                value={lastname}
                                onChange={(event) => {
                                    setlastname(event.target.value);
                                }}
                            />
                        </div>
                        <div class="form-group">
                            <label id="ema">Email.Id</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter Email"
                                value={email}
                                onChange={(event) => {
                                    setemail(event.target.value);
                                }}
                            />
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" id="password" placeholder="Enter Password"
                                value={password}
                                onChange={(event) => {
                                    setpassword(event.target.value);
                                }}
                            />
                        </div>
                        <div class="form-group">
                            <label>DOB</label>
                            <input type="Date" class="form-control" id="dob" placeholder="Enter dob"
                                value={dob}
                                onChange={(event) => {
                                    setdob(event.target.value);
                                }}
                            />
                        </div>
                        <div class="form-group">
                            <label>Mobileno.</label>
                            <input type="text" class="form-control" id="mobileno" placeholder="Enter Mobile Number"
                                value={mobileno}
                                onChange={(event) => {
                                    setmobileno(event.target.value);
                                }}
                            />
                        </div>
                        <div class="form-group">
                            <label>Address</label>
                            <input type="text" class="form-control" id="address" placeholder="Enter address"
                                value={address}
                                onChange={(event) => {
                                    setaddress(event.target.value);
                                }}
                            />
                        </div>
                        <div class="form-group">
                            <label>State</label>
                            <input type="email" class="form-control" id="state" placeholder="Enter state"
                                value={state}
                                onChange={(event) => {
                                    setstate(event.target.value);
                                }}
                            />
                        </div>
                        <div class="form-group">
                            <label>Pincode</label>
                            <input type="text" class="form-control" id="pincode" placeholder="Enter Pincode"
                                value={pincode}
                                onChange={(event) => {
                                    setpincode(event.target.value);
                                }}
                            />
                        </div>
                        <button type="submit" class="btn btn-primary mt-4" onClick={save} >Save</button>    <button type="button" class="btn btn-primary mt-1" onClick={loginNavi}>Go to Login</button>
                    </form>
                {/* </div> */}
            </div>
        </div>
    );
}

export default Register;