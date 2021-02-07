import React from "react";
import PropTypes from "prop-types";

import dateParser from "../../../utils/dateParser";
import "./index.css";

const TableRow = ({ author, title, date, url, id }) => {
  return (
    <tr className="data-table__row">
      <td width="80%">
        <span className="data-table__row--info">{title}</span>
        <span className="data-table__row--author">- {author} -</span>
      </td>
      <td>{dateParser(date)}</td>
    </tr>
  );
};

TableRow.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default TableRow;
