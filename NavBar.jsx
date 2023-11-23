import React from "react";
import { NavLink } from 'react-router-dom';
//import useScripts from "./useScripts";
import Dropdown from 'react-bootstrap/Dropdown';

const Navbar = props => {
    //useScripts("https://cdn.tailwindcss.com")
    return (
        <nav class="flex px-10 border-b md:shadow-lg items-center relative ">
            <div class="text-lg font-bold md:py-0 py-4">
                <img src="https://mma.prnewswire.com/media/386629/Infinite_Computer_Solutions_Logo.jpg?p=facebook" alt="Infinite" width="80" height="50" />
            </div>
            <ul class="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0">
                <NavLink to={"/home"}>
                    <li>
                        <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-50">
                            <span>Home</span>
                        </a>
                    </li>
                </NavLink>
                <NavLink to={"/Stocks"}>
                    <li>
                        <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-50">
                            <span>Stocks</span>
                        </a>
                    </li>
                </NavLink>
                <NavLink to={"/Mutual"}>
                    <li>
                        <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-50">
                            <span>Mutual Funds</span>
                        </a>
                    </li>
                </NavLink>
                <NavLink to={"/About"}>
                    <li>
                        <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-50">
                            <span>About</span>
                        </a>
                    </li>
                </NavLink>
                <NavLink to={"/Contact"}>
                    <li>
                        <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-50">
                            <span>Contact Us</span>
                        </a>
                    </li>
                </NavLink>

               

                <li>
                    <div href="#" class="flex md:inline-flex p-4 items-center ">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Profile
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/Personal">Personal Info</Dropdown.Item>
                                <Dropdown.Item href="/Close">Close Account</Dropdown.Item>
                                <Dropdown.Item href="/Register">Log Out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </li>
            </ul>
            <div class="ml-auto md:hidden text-gray-500 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" /></svg>
            </div>
        </nav>
    );
}

export default Navbar;