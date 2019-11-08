import React from 'react';
import Button from './components/Button';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large">BUTTON</Button>
        <Button>BUTTON</Button>
        <Button size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button color="gray" size="large">
          BUTTON
        </Button>
        <Button color="gray">BUTTON</Button>
        <Button color="gray" size="small">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button color="carrot" size="large">
          BUTTON
        </Button>
        <Button color="carrot">BUTTON</Button>
        <Button color="carrot" size="small">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" outline>
          BUTTON
        </Button>
        <Button color="gray" outline>
          BUTTON
        </Button>
        <Button color="carrot" size="small" outline>
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" fullWidth className="customized-button">
          BUTTON
        </Button>
        <Button color="gray" fullWidth>
          BUTTON
        </Button>
        <Button
          color="carrot"
          size="small"
          fullWidth
          onClick={() => console.log('click!!')}
          onMouseMove={() => console.log('MouseMove')}
        >
          BUTTON
        </Button>
      </div>
    </div>
  );
}

export default App;
