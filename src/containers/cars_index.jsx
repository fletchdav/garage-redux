import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {fetchCars} from '../actions/index';
import { Link } from 'react-router-dom';

class CarsIndex extends Component {

  componentWillMount() {
    this.props.fetchCars(this.props.garage);
  }

  render() {

    return(
      <div className="cars-list">
        <h1>list of cars</h1>
        {this.props.cars.map((car, index) => {
          return (
            <div className="car" key={index}>
              <h2>{car.brand} - {car.model}</h2>
              <p><b>Owner:</b> {car.owner}</p>
              <Link className="btn btn-primary btn-cta" to={`/cars/${car.id}`}>
                go to car
              </Link>
            </div>
          );
        })}
        <Link className="btn btn-primary btn-cta" to="/cars/new">
          Add a car
        </Link>
      </div>
    );
  }
}

function mapStatetoProps (state) {
  return {
    cars: state.cars,
    garage: state.garage
  };
}

function mapDispatchtoProps (dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStatetoProps, mapDispatchtoProps) (CarsIndex);
