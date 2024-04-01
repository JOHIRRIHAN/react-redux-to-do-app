// import React from 'react'

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { updateUser } from "../UseReducer";
import Swal from "sweetalert2";


const Edit = () => {
  const {id} = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter(f => f.id == id);
  const {name, email} = existingUser[0];
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(updateUser({
      id: id,
      name: uname,
      email: uemail
    }));
    navigate('/')
    Swal.fire({
      title: "Good job!",
      text: "Update User Data",
      icon: "success"
    });
  }


  return (
    <div className=" ">
    <h3 className="text-4xl text-center  mb-5"> Update User Data</h3>
    <form onSubmit={handleUpdate}
      className="max-w-sm mx-auto my-20 rounded-lg bg-slate-600 text-white p-10"
    >
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium  dark:text-white"
        >
          Your Name
        </label>
        <input
          type="text"
          name="name"
          className="bg-gray-50 border border-gray-300 text-black  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your name"
          value={uname}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium  dark:text-white"
        >
          Your Email
        </label>
        <input
          type="email"
          name="email"
          className="bg-gray-50 border text-black border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@gmail.com"
          value={uemail}
          onChange={e => setEmail(e.target.value)}

        />
      </div>

      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Update
      </button>
    </form>
  </div>
  )
}

export default Edit