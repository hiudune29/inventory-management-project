import Sidebar from "./Sidebar";
import {Outlet} from "react-router-dom";
function Layout() {
    return (
        <div className={'layout'}>
            <Sidebar/>
            <div className={'main'}>
                <div className={'content'}>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}
export default Layout;