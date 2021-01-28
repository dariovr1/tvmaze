import { Provider, useDispatch } from 'react-redux';
import FilmSearch from './components/Components/FilmSearch';
import { store } from './Store';
import React from 'react';



const App = () => {
  return (
   <Provider store={store}>
      <FilmSearch />
   </Provider>
  );
};



export default App;
