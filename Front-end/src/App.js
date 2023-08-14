
import './App.css';

import Imega from './Imega/Imega';
import ImegaRequestHandle from './ImegaApiMethod/Imega.api.method';

function App() {
  return (
    <ImegaRequestHandle>
  <div className="App ext-4xl ">
      <Imega/>
    </div>
    </ImegaRequestHandle>
  
  );
}

export default App;
