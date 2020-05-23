import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_FEATURE } from '../reducers/reducer';

const AdditionalFeature = (props) => {
  const additionalFeatures = useSelector((state) => state.additionalFeatures);
  const dispatch = useDispatch();

  return (
    <>
      {additionalFeatures.map((feature) => {
        return (
          <li key={feature.id}>
            {/* Add an onClick that will let you add a feature to your car */}
            <button
              onClick={() => dispatch({ type: ADD_FEATURE, payload: feature })}
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

export default AdditionalFeature;
