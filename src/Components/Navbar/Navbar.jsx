import React from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
const Navbar = () => {
  const data = "hiii";
  const [data2, setData2] = React.useState();
  React.useEffect(() => {
    fetch("https://dummyjson.com/products/1")
      .then((res) => res.json())
      .then((json) => setData2(json));
  }, []);
  return (
    <div className="w-[100%] h-[100%]">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-center items-center">
          <ul className="flex space-x-4">
            <NavLink
              to="Top"
              state={{ data2 }}
              style={({ isActive }) => ({
                color: isActive ? "#E21717" : "",
                textDecoration: isActive ? "underline" : "",
              })}
            >
              <li className="text-white hover:text-gray-300">Top</li>
            </NavLink>
            <NavLink
              to="ReduxCounter"
              state={{ data2 }}
              style={({ isActive }) => ({
                color: isActive ? "#E21717" : "",
                textDecoration: isActive ? "underline" : "",
              })}
            >
              <li className="text-white hover:text-gray-300">ReduxCounter</li>
            </NavLink>
            <NavLink
              to="Count"
              style={({ isActive }) => ({
                color: isActive ? "#E21717" : "",
                textDecoration: isActive ? "underline" : "",
              })}
            >
              <li className="text-white hover:text-gray-300">Count</li>
            </NavLink>
            <NavLink
              to="ReducerCount"
              style={({ isActive }) => ({
                color: isActive ? "#E21717" : "",
                textDecoration: isActive ? "underline" : "",
              })}
            >
              <li className="text-white hover:text-gray-300">ReducerCount</li>
            </NavLink>
            <NavLink
              to="ReducerTodo"
              style={({ isActive }) => ({
                color: isActive ? "#E21717" : "",
                textDecoration: isActive ? "underline" : "",
              })}
            >
              <li className="text-white hover:text-gray-300">ReducerTodo</li>
            </NavLink>
            <NavLink
              to="Mount"
              style={({ isActive }) => ({
                color: isActive ? "#E21717" : "",
                textDecoration: isActive ? "underline" : "",
              })}
            >
              <li className="text-white hover:text-gray-300">Mount</li>
            </NavLink>
            <NavLink
              to="Update"
              style={({ isActive }) => ({
                color: isActive ? "#E21717" : "",
                textDecoration: isActive ? "underline" : "",
              })}
            >
              <li className="text-white hover:text-gray-300">Update</li>
            </NavLink>
            <NavLink
              to="SideEffect"
              style={({ isActive }) => ({
                color: isActive ? "#E21717" : "",
                textDecoration: isActive ? "underline" : "",
              })}
            >
              <li className="text-white hover:text-gray-300">SideEffect</li>
            </NavLink>
            <NavLink
              to="ContextData"
              style={({ isActive }) => ({
                color: isActive ? "#E21717" : "",
                textDecoration: isActive ? "underline" : "",
              })}
            >
              <li className="text-white hover:text-gray-300">ContextData</li>
            </NavLink>
            <NavLink
              to="Title"
              style={({ isActive }) => ({
                color: isActive ? "#E21717" : "",
                textDecoration: isActive ? "underline" : "",
              })}
            >
              <li className="text-white hover:text-gray-300">Title</li>
            </NavLink>
            <NavLink
              to="ColorData"
              style={({ isActive }) => ({
                color: isActive ? "#E21717" : "",
                textDecoration: isActive ? "underline" : "",
              })}
            >
              <li className="text-white hover:text-gray-300">ColorData</li>
            </NavLink>
            <NavLink
              to="RefHook"
              style={({ isActive }) => ({
                color: isActive ? "#E21717" : "",
                textDecoration: isActive ? "underline" : "",
              })}
            >
              <li className="text-white hover:text-gray-300">RefHook</li>
            </NavLink>
            <NavLink
              to="RefForm"
              style={({ isActive }) => ({
                color: isActive ? "#E21717" : "",
                textDecoration: isActive ? "underline" : "",
              })}
            >
              <li className="text-white hover:text-gray-300">RefForm</li>
            </NavLink>
            <NavLink
              to="RefFormhook"
              style={({ isActive }) => ({
                color: isActive ? "#E21717" : "",
                textDecoration: isActive ? "underline" : "",
              })}
            >
              <li className="text-white hover:text-gray-300">RefFormhook</li>
            </NavLink>
            <NavLink
              to="Hidden"
              style={({ isActive }) => ({
                color: isActive ? "#E21717" : "",
                textDecoration: isActive ? "underline" : "",
              })}
            >
              <li className="text-white hover:text-gray-300">Hidden</li>
            </NavLink>
            <NavLink
              to="Parent"
              style={({ isActive }) => ({
                color: isActive ? "#E21717" : "",
                textDecoration: isActive ? "underline" : "",
              })}
            >
              <li className="text-white hover:text-gray-300">Parent</li>
            </NavLink>
            <NavLink
              to="Parent/Child"
              style={({ isActive }) => ({
                color: isActive ? "#E21717" : "",
                textDecoration: isActive ? "underline" : "",
              })}
            >
              <li className="text-white hover:text-gray-300">Parent-Child</li>
            </NavLink>
            <NavLink
              to="RedirectTesting"
              style={({ isActive }) => ({
                color: isActive ? "#E21717" : "",
                textDecoration: isActive ? "underline" : "",
              })}
            >
              <li className="text-white hover:text-gray-300">
                Redirect-Testing
              </li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
