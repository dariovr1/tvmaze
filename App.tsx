import { Provider, useDispatch } from 'react-redux';
import FilmSearch from './components/Components/FilmSearch';
import { store } from './Store';
import React from 'react';
import TVResults from './components/Components/TVResults';



const App = () => {
  return (
   <Provider store={store}>
      <FilmSearch />
      <TVResults />
   </Provider>
  );
};



export default App;
