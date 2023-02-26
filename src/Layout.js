import {Outlet} from 'react-router-dom'
import Navigation from './navbar'

function Layout() {
    return (
        <div>
            <Navigation />
            <Outlet />
        </div>
    )
}
export default Layout;

