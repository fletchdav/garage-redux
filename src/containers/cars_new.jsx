import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {createCar} from '../actions/index';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

class CarsNew extends Component {

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
      </div>
    );
  }

  onSubmit = (values) => {
  this.props.createCar(values, this.props.garage, (car) => {
    this.props.history.push('/');
      return car;
  });
  }

  render() {
    return(
      <div className="cars-new">

        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            label="Brand"
            name="brand"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Model"
            name="model"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Owner"
            name="owner"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Plate"
            name="plate"
            type="text"
            component={this.renderField}
          />
          <button className="btn btn-primary" type="submit"
          disabled={this.props.pristine || this.props.submitting}>
          Add Car
          </button>
        </form>


        <Link className="btn btn-primary btn-cta" to="/">
          Back to cars
        </Link>

      </div>
    );
  }
}

function mapStatetoProps (state) {
  return {
    garage: state.garage
  };
}

function mapDispatchtoProps (dispatch) {
  return bindActionCreators({ createCar }, dispatch);
}


export default reduxForm({ form: 'newCarForm' })(
  connect(mapStatetoProps, { createCar })(CarsNew)
);


