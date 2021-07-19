import React, { useState } from 'react';
import './asset/style.css';

import renderRouters from './core/routersConfig.jsx';
import routers from './routers.jsx';
import AppProvider from './core/AppProvider.jsx';

export let Context = React.createContext()

function App() {

  return (
    <AppProvider>
      {renderRouters(routers)}
    </AppProvider>
  );
}

export default App;
