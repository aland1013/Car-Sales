import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const AddedFeature = () => {
  const features = useSelector((state) => state.car.features);
  console.log('features', features);
  const dispatch = useDispatch();

  return (
    <>
      {features.map((feature) => {
        return (
          <li key={feature.id}>
            {/* Add an onClick to run a function to remove a feature */}
            <button
              onClick={() =>
                dispatch({ type: 'REMOVE_FEATURE', payload: feature })
              }
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

export default AddedFeature;
