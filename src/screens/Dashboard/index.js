import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import DataTable from "./components/DataTable";
import { getStories } from "../../utils/service";
import parseData from "../../utils/dataParse";

import "./index.css";

const DashboardScreen = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    getStories().then(async (data) => {
      const realData = await data.json();
      const parsedData = parseData(realData);
      setStories(parsedData);
    });
  }, []);

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  const handleDelete = (id) => {
    const storageItems = window.localStorage.getItem("deletedStories");
    const deletedStories = (storageItems && JSON.parse(storageItems)) || [];
    deletedStories.push(id);
    window.localStorage.setItem(
      "deletedStories",
      JSON.stringify(deletedStories)
    );
    setStories((prevStories) => prevStories.filter((story) => story.id !== id));
  };

  return (
    <div className="dashboard-screen">
      <Header />
      <DataTable
        rows={stories}
        onDeleteItem={handleDelete}
        onClickItem={handleClick}
      />
    </div>
  );
};

export default DashboardScreen;
