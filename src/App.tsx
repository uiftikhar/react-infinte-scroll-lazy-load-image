import React from 'react';

import * as AppStyles from './App.module.scss';
import { Images } from './components/Images/Images';
import { AppProvider } from './components/Images/Provider/Images.context';

function App() {
  return (
    <AppProvider>
      <div className={AppStyles.default.container}>
        <Images />
      </div>
    </AppProvider>
  );
}

export default App;
