import {Helmet} from 'react-helmet'
import './App.css';


import CesaerCipherForm from './components/CesaerCipherForm/CesaerCipherForm';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Caesar Cipher</title>
        <meta name="description" content="A simple caesar cipher" />
      </Helmet>
      <CesaerCipherForm />
    </div>
  );
}

export default App;
