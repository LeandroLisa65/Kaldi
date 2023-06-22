import * as React from 'react';
import { NavBar } from './components/NavBar';
import { LogIn } from './components/LogIn';
import './Main.css';
import RenderSwitch from './components/RenderSwitch';

const Main = () => {
  const [logged, setLogged] = React.useState(false);
  const [pageSelected, setPageSelected] = React.useState('');

  const handleLogIn = (event) => {
    event.preventDefault();
    setLogged(true);
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const selectPage = (page) => {
    console.log('this is:', page.target.innerText);
    setPageSelected(page.target.innerText);
  };

  const selectMenuItem = (menuItem) => {
    if(menuItem === 'Logout')
      setLogged(false);
    setPageSelected(menuItem);
  }

  let main;
  if (!logged) {
    main = <div><LogIn logInEvent={handleLogIn} /></div>;
  }
  else {
    main = <div>
      <NavBar setPageSelected={selectPage} setMenuItem={selectMenuItem} />
      <RenderSwitch page={pageSelected}/>
    </div>;
  }

  return (
    main
  );
}

export default Main;
