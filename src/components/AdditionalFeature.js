import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../actions';

const AdditionalFeature = (props) => {
  return (
    <>
      {props.features.map((feature) => {
        return (
          <li key={feature.id}>
            {/* Add an onClick that will let you add a feature to your car */}
            <button
              onClick={() => props.addFeature(feature.id)}
              className='button'
            >
              Add
            </button>
            {feature.name} (+{feature.price})
          </li>
        );
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    features: state.additionalFeatures
  };
};

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
