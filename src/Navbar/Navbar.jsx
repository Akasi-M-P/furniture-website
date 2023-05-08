/* eslint-disable no-unused-vars */
import { useState } from "react";
import Dropdown from "./Dropdown";
import TextField from "@mui/material/TextField";
import { MdFavoriteBorder } from "react-icons/md";
import { TbShoppingCartX } from "react-icons/tb";
import { HiOutlineUser } from "react-icons/hi";

const Navbar = () => {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <header>
      <nav>
        <ul className="nav-list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <Dropdown />
          </li>
          <li>
            <a href="#">Sale</a>
          </li>
        </ul>

        <ul className="nav-list">
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">
              <h2 className="furnito-text">Furnito</h2>
            </a>
          </li>
          <li className="main">
            <a className="search">
              <TextField
                id="outlined-basic"
                onChange={inputHandler}
                variant="outlined"
                fullWidth
                label="Search"
                InputLabelProps={{
                  style: { color: "white", fontFamily: "Ysabeau" },
                }}
              />
            </a>
          </li>
        </ul>

        <ul className="nav-icons">
          <li>
            <a href="#">
              <MdFavoriteBorder className="icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <TbShoppingCartX className="icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <HiOutlineUser className="icon" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
