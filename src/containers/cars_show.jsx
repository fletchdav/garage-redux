import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCar } from '../actions/index';

class CarsShow extends Component {

  componentWillMount () {
    if (!this.props.cars) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  render() {
    return (
     <div className="car">
       <p>{this.props.cars.model}</p>
       <p>{this.props.cars.brand}</p>
       <p>{this.props.cars.plate}</p>
       <p>{this.props.cars.owner}</p>
     </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCar }, dispatch);
}

function mapStateToProps(state, ownProps) {
const idFromUrl = parseInt(ownProps.match.params.id, 10);
const cars = state.cars.find(p => p.id === idFromUrl);
return { cars };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
