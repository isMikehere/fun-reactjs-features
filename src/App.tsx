import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css'; 

const LazyBus = React.lazy(() => import('./lazy/LazyBus'));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>loading</div>}>
          <LazyBus/>
        </Suspense>
    </div>
  );
}

export default App;
