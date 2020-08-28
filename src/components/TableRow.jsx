import React from "react";
import EditableTableCell from "./EditableTableCell";
import TableCell from "./TableCell";

const TableRow = (props) => {
  return (
    <tr>
        <TableCell value={props.id} />
        <EditableTableCell value={props.firstName} />
        <EditableTableCell value={props.lastName} />
        <EditableTableCell value={props.email} />
    </tr>
  );
};

export default TableRow;
