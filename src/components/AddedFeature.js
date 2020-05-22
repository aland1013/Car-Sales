import React from 'react';
import { connect } from 'react-redux';

const AddedFeature = (props) => {
  return (
    <>
      {props.features.map((feature) => {
        console.log('feature', feature);
        return (
          <li key={feature}>
            {/* Add an onClick to run a function to remove a feature */}
            <button className='button'>X</button>
            {feature}
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

export default connect(mapStateToProps, {})(AddedFeature);
