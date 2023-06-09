import * as React from 'react';
import { MenuAppBar } from './pages/appbar/MenuAppbar';
import './Main.css';
import { RenderSwitch } from './pages/appbar/RenderSwitch';

function App() {
  const [pageSelected, setPageSelected] = React.useState('');

  return (
    <div>
        <MenuAppBar setPageSelected={setPageSelected}/>
        <RenderSwitch page={pageSelected}/>
    </div>
  );
}

export default App;
