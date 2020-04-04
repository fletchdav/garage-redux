import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class CarsIndex extends Component {

  render() {
    return(
      <div className="cars-list">
        <h1>list of cars</h1>
        {this.props.cars.map((car, index) => {
          return (
            <div className="car" key={index}>
              <h2>{car.brand} - {car.model}</h2>
              <p><b>Owner:</b> {car.owner}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStatetoProps (state) {
  return {
    cars: state.cars
  };
}

export default connect(mapStatetoProps) (CarsIndex);
