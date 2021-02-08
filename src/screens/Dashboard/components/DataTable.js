import React from "react";
import PropTypes from "prop-types";

import TableRow from "./TableRow";
import "./index.css";

const DataTable = ({ rows, onClickItem, onDeleteItem }) => {
  return (
    <div className="data-table__container">
      <table className="data-table">
        {rows.map((row) => {
          return (
            <TableRow
              onDeleteItem={onDeleteItem}
              onClickItem={onClickItem}
              {...row}
            />
          );
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
  onClickItem: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};

export default DataTable;
