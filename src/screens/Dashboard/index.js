import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import "./index.css";
import DataTable from "./components/DataTable";

const DashboardScreen = () => {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/story", {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }).then(async (data) => {
      const parsedData = await data.json();
      setStories(parsedData.stories);
    });
  }, []);
  console.log(stories);
  return (
    <div className="dashboard-screen">
      <Header />
      <DataTable rows={stories} />
    </div>
  );
};

export default DashboardScreen;
