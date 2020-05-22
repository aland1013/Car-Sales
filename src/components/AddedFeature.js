import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions';

const AddedFeature = (props) => {
  return (
    <>
      {props.features.map((feature) => {
        return (
          <li key={feature.id}>
            {/* Add an onClick to run a function to remove a feature */}
            <button
              onClick={() => props.removeFeature(feature)}
              className='button'
            >
              X
            </button>
            {feature.name}
          </li>
        );
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    features: state.car.features
  };
};

export default connect(mapStateToProps, { removeFeature })(AddedFeature);
