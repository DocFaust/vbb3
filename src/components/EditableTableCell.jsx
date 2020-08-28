import React, { useState } from "react";
import "./TableCell.css"
const TableCell = (props) => {
  const [value, setValue] = useState(props.value);
  const [edit, setEdit] = useState(false);

  function handleClick(event) {
    setEdit(true);
  }

  function handleChange(event) {
    console.log("here " + event.target.value);
    setValue(event.target.value);
  }

  function handleFocusOut(event){
      console.log("focusout");
      setEdit(false);
  }

  return (
    <td style={{ width: "250px" }}>
      {edit ? (
        <input autoFocus className="form-control-sm" type="text" onChange={handleChange} onBlur={handleFocusOut} value={value}/>
      ) : (
        <label onClick={handleClick} >{value}</label>
      )}
    </td>
  );
};

export default TableCell;
