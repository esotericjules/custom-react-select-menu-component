import React from "react";
import "./styles.css";
import CustomSelect from "./custom-select-menu/custom-select";
import { stateOptions, updatedCountries } from "./custom-select-menu/data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: stateOptions,
      fetchingData: false,
      selectedOption: ""
    };
  }

  changeOptionsData = () => {
    this.setState({ fetchingData: true });
    setTimeout(() => {
      this.setState((prevState) => ({
        data:
          prevState.data === updatedCountries ? stateOptions : updatedCountries,
        fetchingData: false
      }));
    }, 1000);
  };

  handleChange = (selectedOption) => {
    this.setState({
      selectedOption: selectedOption ? selectedOption.label : ""
    });
  };

  render() {
    const { data, fetchingData, selectedOption } = this.state;

    return (
      <div className="App">
        <h3>Custom react-select menu component</h3>
        <div className="select-option-wrapper">
          {selectedOption === "" ? (
            <p className="selected-option">Select an option </p>
          ) : (
            <p className="selected-option">You selected: </p>
          )}
          {selectedOption}
        </div>
        <CustomSelect
          options={data}
          changeOptionsData={this.changeOptionsData}
          fetchingData={fetchingData}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
