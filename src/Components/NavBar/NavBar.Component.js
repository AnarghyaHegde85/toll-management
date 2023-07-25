import React, { PureComponent } from "react";
import logo from "../../Assets/filters.svg";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import { vehicleList } from "../../Store/VehicleList/VehicleListAction";

// import search from "../../Assets/search.svg"

class NavBarComponent extends PureComponent {
  // checkDisable = () => {
  //   const { vehicleType, VehicleNumber } = this.props;
  //   // console.log(vehicleType ,VehicleNumber);
  //   if (vehicleType && VehicleNumber) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // };

  // getTollValue = () => {
  //   const tollValue = this.props?.TollList.find(
  //     (e) => this.props.name === e.name
  //   );
  //   console.log(this.props.TollList?.find((e)=> console.log(this.props.name,"///",e.name)));
  //   const toll1 = this.props.VehicleNumber ? tollValue?.option1singleRate : "";
  //   console.log(toll1);

  //   if (this.props.vehicleType === tollValue?.option1) {
  //     this.setState({ tariff: toll1 });
  //     return toll1;
  //   }
  //   //  else if (this.props.vehicleType === tollValue?.option2)
  //   //   return this.props.VehicleNumber ? tollValue?.option2singleRate : "";
  //   // else if (this.props.vehicleType === tollValue?.option3)
  //   //   return this.props.VehicleNumber ? tollValue?.option3singleRate : "";
  //   // else if (this.props.vehicleType === tollValue?.option4)
  //   //   return this.props.VehicleNumber ? tollValue?.option4singleRate : "";
  // };

//   getTollValue(){
//     const tariff=this.props.vehicle.tollName;
//      console.log(tariff);
// }

  render() {
    const {
      showDialog,
      handleChange,
      showFilter,
      handleSave,
      TollPage,
      handleFilterBy,
      showFilterData,
      showDialogVehicle,
      handleDialogToggle,
      handleVehicleSave,
      handleVehicleToggle,
      handleSearch,
      handleAll,
      search,
      // getTollValue,
    } = this.props;

    // const filteredVehicleList=this.state.filteredVehicleList;

    return (
      <div className="navbar">
        <div className="navbar-sub">
          <h3 className="navbar-head">Toll entries/Vehicle entries</h3>

          <div className="navbar-filter">
            <img
              className="navbar-filter-icon"
              src={logo}
              alt="filter"
              onClick={showFilter}
            />
            {vehicleList && (
              <div>
                <li onClick={handleAll}>All</li>
                {this.props.TollList.map((item) => {
                  return <li onClick={handleFilterBy}>{item.name}</li>;
                })}
              </div>
            )}
          </div>

          <div className="navbar-searchbar">
            <input
              className="navbar-searchbar-input"
              type="text"
              onChange={handleSearch}
              placeholder="search vehicle..."
              value={search}
            ></input>
          </div>
          
        </div>

        <div className="navbar-pages">
          <button
            className="navbar-pages-btn1"
            onClick={this.props.handleDialogToggle}
          >
            {/* Add Toll{" "} */}
            Add Toll
          </button>
          <button
            className="navbar-pages-btn2"
            onClick={this.props.handleVehicleToggle}
          >
            {/* Add Vehicle{" "} */}
            Add Vehicle
          </button>
          <NavLink
            className="navbar-pages-btn3"
            onClick={this.props.handlePages}
            to={TollPage ? "/tolllist" : "/"}
          >
            {TollPage ? "Toll List Page" : "Back to Vechilelist"}
          </NavLink>
        </div>


        {/* <form className={showDialog ? "form" : "hidden"} onSubmit={handleSave}> */}
        <form className={showDialog ? "form" : "hidden"} >

          <div className="addTOll">
            <div className="addTOll-content">
              <h2 className="addTOll-content-title">Add New toll</h2>
              <div className="addTOll-heading">
                <label className="addTOll-heading-name">Toll Name</label>
                <input
                  className="addTOll-heading-input1"
                  type="text"
                  name="tollName"
                  value={this.props.name }
                  placeholder="Enter toll name"
                  onChange={handleChange}
                />
              </div>
              <h3 className="addTOll-title">Vehicle Fare Details</h3>
              <div className="addTOll-add1">
                <div className="addTOll-add1-menu">
                  <select
                    className="addTOll-add1-menu-select"
                    name="option1"
                    onChange={handleChange}
                  >
                    <option
                      className="addTOll-add1-menu-option"
                      selected
                      value=""
                    >
                      Select Vehicle type
                    </option>
                    <option name="option1" value="Car/Jeep/Van">
                      Car/Jeep/Van
                    </option>
                    <option name="option2" value="LCV">
                      LCV
                    </option>
                    <option name="option3" value="Truck">
                      Truck/Bus
                    </option>
                    <option name="option4" value="HeavyVehicle">
                      Heavy Vehicle
                    </option>
                  </select>

                  <input
                    className="addTOll-add1-menu-input"
                    type="number"
                    name="option1singleRate"
                    value={this.props.option1singleRate}
                    placeholder="Single Journey"
                    onChange={handleChange}
                  />
                  <input
                    className="addTOll-add1-menu-input"
                    type="number"
                    name="option1returnRate"
                    value={this.props.option1returnRate}
                    placeholder="Return Journey"
                    onChange={handleChange}
                  />
                </div>

                <div className="addTOll-add1-menu">
                  <select
                    className="addTOll-add1-menu-select"
                    name="option2"
                    onChange={handleChange}
                  >
                    <option className="addTOll-add1-menu-option" value="">
                      Select Vehicle type
                    </option>
                    <option name="option1" value="Car/Jeep/Van">
                      Car/Jeep/Van
                    </option>
                    <option name="option2" value="LCV">
                      LCV
                    </option>
                    <option name="option3" value="Truck">
                      Truck/Bus
                    </option>
                    <option name="option4" value="HeavyVehicle">
                      Heavy Vehicle
                    </option>
                  </select>

                  <input
                    className="addTOll-add1-menu-input"
                    type="number"
                    name="option2singleRate"
                    value={this.props.option2singleRate}
                    placeholder="Single Journey"
                    onChange={handleChange}
                  />
                  <input
                    className="addTOll-add1-menu-input"
                    type="number"
                    name="option2returnRate"
                    value={this.props.option2returnRate}
                    placeholder="Return Journey"
                    onChange={handleChange}
                  />
                </div>

                <div className="addTOll-add1-menu">
                  <select
                    className="addTOll-add1-menu-select"
                    name="option3"
                    onChange={handleChange}
                  >
                    <option className="addTOll-add1-menu-option" value="">
                      Select Vehicle type
                    </option>
                    <option name="option1" value="Car/Jeep/Van">
                      Car/Jeep/Van
                    </option>
                    <option name="option2" value="LCV">
                      LCV
                    </option>
                    <option name="option3" value="Truck">
                      Truck/Bus
                    </option>
                    <option name="option4" value="HeavyVehicle">
                      Heavy Vehicle
                    </option>
                  </select>

                  <input
                    className="addTOll-add1-menu-input"
                    type="number"
                    name="option3singleRate"
                    value={this.props.option3singleRate}
                    placeholder="Single Journey"
                    onChange={handleChange}
                  />
                  <input
                    className="addTOll-add1-menu-input"
                    type="number"
                    name="option3returnRate"
                    value={this.props.option3returnRate}
                    placeholder="Return Journey"
                    onChange={handleChange}
                  />
                </div>

                <div className="addTOll-add1-menu">
                  <select
                    className="addTOll-add1-menu-select"
                    name="option4"
                    onChange={handleChange}
                  >
                    <option className="addTOll-add1-menu-option" value="">
                      Select Vehicle type
                    </option>
                    <option name="option1" value="Car/Jeep/Van">
                      Car/Jeep/Van
                    </option>
                    <option name="option2" value="LCV">
                      LCV
                    </option>
                    <option name="option3" value="Truck">
                      Truck/Bus
                    </option>
                    <option name="option4" value="HeavyVehicle">
                      Heavy Vehicle
                    </option>
                  </select>

                  <input
                    className="addTOll-add1-menu-input"
                    type="number"
                    name="option4singleRate"
                    value={this.props.option4singleRate}
                    placeholder="Single Journey"
                    onChange={handleChange}
                  />
                  <input
                    className="addTOll-add1-menu-input"
                    type="number"
                    name="option4returnRate"
                    value={this.props.option4returnRate}
                    placeholder="Return Journey"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="addTOll-button">
                <button className="addTOll-button-button1" type="submit" onClick={handleSave}>
                  Add Details
                </button>
                <button className='addTOll-button-button1' onClick={handleDialogToggle}>Cancel</button>
              </div>
            </div>
          </div>
        </form>


        <form
          className={showDialogVehicle ? "vehicleform" : "Vehiclehidden"}
          onSubmit={handleVehicleSave}
        >
          <div className="addVehicle">
            <div className="addVehicle-content">
              <h2>Add New Vehicle</h2>
              <div className="addVehicle-label">
                <label>Select Vehicle Type:</label>
                <select
                  className="addVehicle-select1"
                  name="vehicleType"
                  value={this.props.vehicleType}
                  onChange={handleChange}
                >
                  <option value="Select Vehicle Type">
                    Select Vehicle Type
                  </option>
                  <option value="Car/Jeep/Van">Car/Jeep/Van</option>
                  <option value="LCV">LCV</option>
                  <option value="Truck/Bus">Truck/Bus</option>
                  <option value="Heavy Vehicle">Heavy Vehicle</option>
                </select>
              </div>

              <div className="addVehicle-label">
                <label className="addVehicle-heading-name">Toll Name</label>

                <select
                  className="addVehicle-select"
                  name="tollName"
                  value={this.props.tollName}
                  onChange={handleChange}
                >
                  <option value="Select TollName">Select TollName</option>
                  {this.props.tollList &&
                    this.props.TollList?.map((option, index) => (
                      <option key={index}>{option.name}</option>
                    ))}
                  ;
                </select>
              </div>

              <div className="addVehicle-label">
                <label>Vehicle Number:</label>
                <input
                  className="addVehicle-select"
                  type="text"
                  name="vehicleNumber"
                  value={this.props.vehicleNumber}
                  placeholder="Enter Vehicle number"
                  onChange={handleChange}
                />
              </div>

              <div className="addVehicle-label">
                <label>Tariff:</label>
                <input
                  className="addVehicle-select"
                  type="text"
                  name="tariff"
                  placeholder="tariff amount"
                  onChange={handleChange}
                  value={this.props.tariff}
                 />
                 {/* // onClick={getTollValue}
                  // disabled={this.checkDisable()}
                  // value={this.getTollValue()}
                  // {...this.props.vehicleList && 
                  this.props.vehicleList.map((option) => (option))} */}
              </div>

              <div className="addVehicle-label">
                <label>SingleTariff:</label>
                <input
                  className="addVehicle-select"
                  type="text"
                  name="tariff"
                  placeholder="tariff amount"
                  onChange={handleChange}
                  value={this.props.Singletariff}
                 />
              </div>

              <div className="addVehicle-label">
                <label>ReturnTariff:</label>
                <input
                  className="addVehicle-select"
                  type="text"
                  name="tariff"
                  placeholder="tariff amount"
                  onChange={handleChange}
                  value={this.props.Returntariff}
                 />
              </div>
              <div className="addVehicle-buttons">
                <button className="addVehicle-buttons-button1" type="submit">
                  Add Entry
                </button>
                <button className='addVehicle-buttons-button1' onClick={this.props.handleVehicleToggle}>Cancel</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default NavBarComponent;
