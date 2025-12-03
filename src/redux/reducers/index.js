const initialState = {
  favorites: {
    content: []
  }
};

const mainReducer = function (currentState = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return {
        ...currentState,
        favorites: {
          ...currentState.favorites,
          content: [...currentState.favorites.content, action.payload]
        }
      };

    case 'REMOVE_FROM_FAVORITES':
      return {
        ...currentState,
        favorites: {
          ...currentState.favorites,
          content: currentState.favorites.content.filter((company) => {
            return company !== action.payload;
          })
        }
      };

    default:
      return currentState;
  }
};

export default mainReducer;
