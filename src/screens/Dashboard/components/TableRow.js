import React from "react";
import PropTypes from "prop-types";

import dateParser from "../../../utils/dateParser";
import TrashCanIcon from "../../../assets/TrashCan.png";
import "./index.css";

const TableRow = ({
  author,
  title,
  date,
  url,
  id,
  onDeleteItem,
  onClickItem,
}) => {
  return (
    <tr
      className="data-table__row"
      onClick={(e) => {
        e.stopPropagation();
        onClickItem(url);
      }}
    >
      <td width="80%">
        <span className="data-table__row--info">{title}</span>
        <span className="data-table__row--author">- {author} -</span>
      </td>
      <td>{dateParser(date)}</td>
      <td>
        <img
          src={TrashCanIcon}
          className="trash-icon"
          width="24"
          height="24"
          alt="React Logo"
          onClick={(event) => {
            event.stopPropagation();
            onDeleteItem(id);
          }}
        />
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClickItem: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};

export default TableRow;
