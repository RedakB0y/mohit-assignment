import ReactDOM from 'react-dom/client';
import App from './App';
import store from './container/store';
import { Provider } from 'react-redux';


const container = document.getElementById('root');

// create a root
const root = ReactDOM.createRoot(container);

//render app to root
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);