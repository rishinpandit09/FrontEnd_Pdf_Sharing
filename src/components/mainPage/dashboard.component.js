import React, { useState, useEffect } from "react";
import HomePageHeader from "../homepage_header/homepage_header.componenet";
import PdfCard from "../card/card.component";
import "../mainPage/Dashboard.css";
// import axios from "axios";
function DashBoard() {
  // const [items, setItems] = useState([]);
  // useEffect(() => {
  //   fetchData();
  // }, []);
  const newArray = [];

  for (let i = 1; i <= 18; i++) {
    const item = {
      id: i,
      original_filename: `File ${i}`,
      s3_url: `https://example.com/file${i}.pdf`,
    };

    newArray.push(item);
  }

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.post("/get-file", {
  //       search: "",
  //     });
  //     setItems(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  return (
    <div class="container">
      <HomePageHeader />
      <br></br>
      <br></br>
      <br></br>
      <div class="content">
        {newArray.map((item) => (
          <PdfCard
            key={item._id}
            original_filename={item.original_filename}
            s3_url={item.s3_url}
            uploader={false}
          />
        ))}
      </div>
    </div>
  );
}
export default DashBoard;
