import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Canvas, Dom } from 'react-three-fiber';
import * as serviceWorker from './serviceWorker';
import Controls from './components/Controls';
import Scene from './components/Scene';
import './index.css';

function App() {
  return (
    <Canvas camera={{ zoom: 40, position: [0, 0, 500] }}>
      <Suspense
        fallback={<Dom center className="loading" children="Loading..." />}
      >
        {' '}
        <Controls />
        <Scene />
      </Suspense>
    </Canvas>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
