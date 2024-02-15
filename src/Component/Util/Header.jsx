import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../logo.png"

const Header = () => {
  return (
    <header className="head bg-blue-900 flex justify-evenly h-16 w-full">
      {/* strarting to search bar */}
    <div className="flex justify-around h-full items-center ">
      {/* LOGO */}
      <Link to="/" className="pr-20 h-8 ">
        <img src={logo} alt="" className=" w-35 h-full" />
      </Link>
      {/* SEARCH BAR */}
      <div className="bg-blue-50 h-9 pr-4 ml-28 rounded-s-lg ">
        <input
          type="text"
          placeholder="Search for products, categories etc..."
          className=" min-w-96 pl-8 pr-4 h-full rounded-sm bg-blue-50"
        >  </input>
        {/* <i class="fa-solid fa-magnifying-glass " ></i> */}
      </div>
    </div>
    {/* after serach bar */}
    <div className="flex justify-evenly items-center h-full w-4/12 ">
      <Link to={"/"}>
        <button className="h-8 w-28 bg-white text-blue-700 font-bold">
          Login
        </button>
      </Link>
      <Link to={"/"} className="text-white">
        Become a Seller
      </Link>
      <Link to={"/"} className="text-white">
        New Customer? SignUp
      </Link>
      <Link to={"/"} className="text-white">
        Cart
      </Link>
    </div>
  </header>
  )
}

export default Header
