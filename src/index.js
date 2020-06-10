import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all';
import 'normalize.css';
import App from './components/App';
import reducer from './reducers';
import './index.scss';
import './content.scss';
import './header.scss';
import './filter.scss';
import './book.scss';
import './books_form.scss';
import './book_details.scss';
import './book_progress.scss';
import './book_state.scss';

const store = createStore(reducer);

store.subscribe(() => {
  window.localStorage.setItem('books', JSON.stringify(store.getState().books));
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
