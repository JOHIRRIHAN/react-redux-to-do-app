// import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import { Link,  } from "react-router-dom";
import { deleteUser } from "../UseReducer";
import Swal from "sweetalert2";

const Home = () => {
  const users = useSelector((state) => state.users);
  // console.log(users)

  const dispatch = useDispatch();
    const handleDelete = (id) =>{
      dispatch(deleteUser({id: id}))

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to delete this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
    }
  
  
  return (
    <div className="container md:px-10 lg:px-20 lg:pt-10">
      <h2 className="text-2xl lg:text-4xl text-center text-zinc-700 font-semibold mb-10 lg:mb-0">
        Crud App With JSON server
      </h2>
      <Link to={'/create'} className=" bg-green-800 text-white py-3 px-5 text-lg font-semibold rounded-xl lg:my-10 lg:py-3">
        Create +
      </Link>

      <div className="relative overflow-x-auto mt-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-sm text-white uppercase bg-green-800 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="lg:px-6 lg:py-3">
                Id
              </th>
              <th scope="col" className="lg:px-6 lg:py-3">
                Name
              </th>
              <th scope="col" className="lg:px-6 lg:py-3">
                Email
              </th>
              <th scope="col" className="lg:px-6 lg:py-3">
                Action
              </th>
            </tr>
          </thead>
          <thead className="">
            {
              users.map((user, index)=> (
                <tr key={index}>
                  <td scope="col" className="lg:px-6 lg:py-3 border-2">{user.id}</td>
                  <td scope="col" className="lg:px-6 lg:py-3 border-2">{user.name}</td>
                  <td scope="col" className="lg:px-6 lg:py-3 border-2">{user.email}</td>
                  <td scope="col" className="lg:px-6 lg:py-3 border-2">
                    <Link to={`/edit/${user.id}`} className=" bg-blue-800 text-white lg:px-5 text-lg p-3 font-semibold rounded-xl lg:py-2">Edit</Link>
                    <button onClick={()=> handleDelete(user.id)} className=" bg-red-800 text-white p-3 lg:px-5 text-lg font-semibold rounded-xl lg:py-2 ml-2 lg:ml-5">Delete</button>
                  </td>
                </tr>
              ))
            }
          </thead>
          
        </table>
      </div>
    </div>
  );
};

export default Home;
