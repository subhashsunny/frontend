import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import './Login.css';
import Captcha from "./Captcha";
function Login() {

    const [email, setemailId] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState("");
    const handleLogin = () => {
        if (!email.trim()) {
            setError("*Please Enter your Email");
            return;
        }
        if (!password.trim()) {
            setError("*Please Enter your Password");
            return;
        }
        setLoggedIn(true);
    };
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    const navigate = useNavigate();
     function login(event) {
        event.preventDefault();
        try {
             axios.post("http://localhost:8080/api/user/login", {
                email: email,
                password: password,
            }).then((res) => {
                console.log(res.data);

                if (res.data.message == "emailId not exist") {
                    alert("Please Enter your Email");
                }
                else if (res.data.message == "Login Success") {
                    navigate('/home');
                }
                else {
                    alert("Incorrect Email or Password");
                }
            }, fail => {
                console.error(fail); // Error!
            });
        }
        catch (err) {
            alert(err);
        }
    }
    return (
        <>
          <table id="table" cellSpacing={2}>
              <thead>
                  <tr>
                      <td id="Register">
                      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
        <div id="wel" className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div id="log1" className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2  className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-15 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label id ="email" htmlFor="email" >
                Email address
                </label>
                <div >
                  <input
                    id="email2"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label id="pass" htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button>
                <a href="home"
                  type="submit" id="btn1" 
                 className="flex w-full justify-center text-black rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Sign in
                  </a>
                </button>
              </div>
              <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
            </form>
            <p id="Reg2" className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a href="register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Register
              </a>
            </p>
            <Captcha/>
          </div>
        </div>
      </>
      </td>
      <td align="center">
      <img class="images"  />
      </td>
      </tr>
      </thead>
      </table>
        </>  
      )
  }
  export default Login;