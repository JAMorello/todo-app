import React from "react";

function SortBy() {
  return (
    <form>
      <select>
        <option defaultValue value="all">
          All
        </option>
        <option value="Home">Home</option>
        <option value="Work">Work</option>
      </select>
    </form>
  );
}

export default SortBy;
