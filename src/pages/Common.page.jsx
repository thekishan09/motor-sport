
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function CommonPage() {
    return (
        <div>
            <div className="relative">
                <div className="fixed top-0 w-full z-50">
                    <Navbar />
                </div>
                <Outlet />
                <div className="relative">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default CommonPage