import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import store from './store/store';
import WalletLayout from './components/wallet-layout';
import ChainLayout from './components/chain-layout';


const App = () => {
 return <div>
     <Provider store={store}>
     <h1>Microchain 💴</h1>
     <WalletLayout></WalletLayout>
     <ChainLayout></ChainLayout>
     </Provider>
     </div>;
 }
ReactDOM.render(<App />, document.getElementById('app'));