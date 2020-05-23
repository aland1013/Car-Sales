import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const AddedFeature = () => {
  const features = useSelector((state) => state.car.features);
  console.log('features', features);
  const dispatch = useDispatch();
  const removeFeature = useCallback(
    (feature) => dispatch({ type: 'removeFeature', payload: feature }),
    [dispatch]
  );

  return (
    <>
      {features.map((feature) => {
        return (
          <li key={feature.id}>
            {/* Add an onClick to run a function to remove a feature */}
            <button onClick={removeFeature} className='button'>
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
