import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThirdwebWeb3Provider } from "@3rdweb/hooks"
import styles from './index.css';

const supportedChainIds = [1, 3, 4, 5, 42, 56, 97, 100, 137, 80001];
const connectors = {
    injected: {}
};

ReactDOM.render(
    <ThirdwebWeb3Provider supportedChainIds={supportedChainIds} connectors={connectors}><App/></ThirdwebWeb3Provider>
, document.getElementById('root'));
