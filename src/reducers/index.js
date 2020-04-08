const initialState = {
  projects: [
    {
      id: 1,
      image: 'some image',
      title: 'Organic Food Market',
      desc:
        'Sklep ecommerce z produktami organicznymi. Dodatkowo posiada blog oparty o Gatsby oraz autoryzację inwentarza dzięki Firebase',
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      return {
        ...state,
        projects: [...state.filter((item) => item.id !== action.payload.id)],
      };
    default:
      return state;
  }
};

export default rootReducer;
