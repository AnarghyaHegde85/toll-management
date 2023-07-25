import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import TolllistComponent from './Tolllist.Component';


 class TolllistContainer extends PureComponent {
  render() {
    return (
      <div>
        <TolllistComponent {...this.props}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  TollList:state.toll.TollList,
  VehicleList:state.vehicle.VehicleList,

})

export default connect (mapStateToProps)(TolllistContainer);