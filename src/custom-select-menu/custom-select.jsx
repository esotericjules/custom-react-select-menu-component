import React, { Fragment } from "react";
import Select, { components } from "react-select";
import "./index.css";

const Menu = (props) => {
  return (
    <Fragment>
      <components.Menu {...props}>
        <div>
          {props.selectProps.fetchingData ? (
            <span className="fetching">Fetching data...</span>
          ) : (
            <div>{props.children}</div>
          )}
          <button
            className={"change-data"}
            onClick={props.selectProps.changeOptionsData}
          >
            Change data
          </button>
        </div>
      </components.Menu>
    </Fragment>
  );
};

const Option = (props) => {
  return (
    <Fragment>
      <components.Option {...props}>{props.children}</components.Option>
    </Fragment>
  );
};

const CustomSelect = ({
  options,
  changeOptionsData,
  fetchingData,
  onChange
}) => {
  return (
    <div>
      <Select
        options={options}
        components={{ Menu, Option }}
        fetchingData={fetchingData}
        changeOptionsData={changeOptionsData}
        onChange={onChange}
      />
    </div>
  );
};
export default CustomSelect;
