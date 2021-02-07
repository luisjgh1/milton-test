import React from "react";
import PropTypes from "prop-types";

import TableRow from "./TableRow";
import "./index.css";

const DataTable = ({ rows = [] }) => {
  return (
    <div className="data-table__container">
      <table className="data-table">
        {rows.map((row) => {
          const parsedData = { ...row };
          parsedData.title = parsedData.title || parsedData.story_title;
          parsedData.date = parsedData.created_at;
          return <TableRow {...parsedData} />;
        })}
      </table>
    </div>
  );
};

DataTable.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DataTable;
