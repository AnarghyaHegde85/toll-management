import React, { PureComponent } from "react";
import { connect } from "react-redux";
import VehiclelistPageComponent from "./VehiclelistPage.Component";

const mapStateToProps = (state) => ({
  VehicleList: state.vehicle.VehicleList,
  TollList: state.toll.TollList,
  search: state.vehicle.search,
});
class VehicleListPageContainer extends PureComponent {
  state = {
    currentDate: "",
   
  };

  componentDidMount() {
    this.getTime();
  }

  getTime = () => {
      const currentDate = new Date().toLocaleString();
      this.setState({
        currentDate: currentDate,
      });
   
  };

  render() {
    return <VehiclelistPageComponent {...this.props} 
    />;
  }
}

export default connect(mapStateToProps, null)(VehicleListPageContainer);
