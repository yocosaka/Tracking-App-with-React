import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import './assets/styles/style.scss';

/* eslint-disable no-console */
const store = configureStore();

// store.subscribe(() => {
//   const {
//     user, items, tracks, trackDates,
//   } = store.getState();
//   console.log('user', user);
//   console.log('items', items);
//   console.log('tracks', tracks);
//   console.log('trackDates', trackDates);
// });

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
/* eslint-enable no-console */
