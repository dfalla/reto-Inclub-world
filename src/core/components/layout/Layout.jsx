import { Outlet } from 'react-router-dom';
import { Navigation } from '../';


export const Layout = () => {
  return (
    <>
        <Navigation/>
            <main>
              <Outlet/>
            </main>
    </>
  )
}

