import React from "react";
// import EachPost from "../../Components/Photos/EachPost";
import { PrettyParagraph } from "../Photos/styles";
import MakeDatePicker from "./Components/DatePicker";

const Search = () => {
  return(
    <div>
      <PrettyParagraph>Search</PrettyParagraph>
      <MakeDatePicker />
  
      <form>
        <input tyoe="search" placeholder="search">
        </input>
        <button type="submit">Submit</button>
      </form>
      {/* <EachPost /> */}
    </div>
  )
}

export default Search