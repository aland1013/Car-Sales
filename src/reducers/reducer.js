export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      const addedFeature = action.payload;

      return {
        additionalPrice: state.additionalPrice + addedFeature.price,
        car: {
          ...state.car,
          features: [...state.car.features, addedFeature]
        },
        additionalFeatures: [...state.additionalFeatures]
          .filter((feature) => feature !== addedFeature)
          .sort((a, b) => a.id - b.id)
      };

    case REMOVE_FEATURE:
      const removedFeature = action.payload;

      return {
        additionalPrice: state.additionalPrice - removedFeature.price,
        car: {
          ...state.car,
          features: [...state.car.features].filter(
            (feature) => feature !== removedFeature
          )
        },
        additionalFeatures: [...state.additionalFeatures, removedFeature].sort(
          (a, b) => a.id - b.id
        )
      };

    default:
      return state;
  }
};
