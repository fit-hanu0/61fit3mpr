// README:
// put these files to an Expo project that you have created
// then, please run `npm install redux react-redux`
// then, you can run `npm start` to start the app

import { registerRootComponent } from 'expo';
import App from './Lect10';
import store from './store';
import { Provider } from 'react-redux';

registerRootComponent(
    () => <Provider store={store}>
        <App />
    </Provider>
);
