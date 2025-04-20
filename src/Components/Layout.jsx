import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Sidebar />
            <div className=" p-4 overflow-y-auto">
                <Outlet />
            </div>
        </>
    )
}

export default Layout
