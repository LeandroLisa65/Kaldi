import * as React from 'react';
import { MenuAppBar } from './pages/appbar/MenuAppbar';
import './Main.css';
import { RenderSwitch } from './pages/appbar/RenderSwitch';

function App() {
  const [pageSelected, setPageSelected] = React.useState('');

  const selectPage = (page) => {
    console.log('this is:', page.target.innerText);
    setPageSelected(page.target.innerText);
  };

  const selectMenuItem = (menuItem) => {
    setPageSelected(menuItem);
  }

  return (
    <div>
        <MenuAppBar setPageSelected={selectPage} setMenuItem={selectMenuItem}/>
        <RenderSwitch page={pageSelected}/>
    </div>
  );
}

export default App;
