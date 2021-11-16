import { Link } from 'react-router-dom'
import './Navbar.css'
import Images from '../../../res/images/logo.png'

export default function Navbar() {
    return (
        <>
            <header >
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <Link className="navbar-brand" to="#"><img src={Images} alt="" style={{height:"70px"}} /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ms-auto">
                            <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Medicine
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link className="dropdown-item" to="#">Genric Name (Allopathic)</Link></li>
                                        <li><Link className="dropdown-item" to="#">Genric Name (Herbal)</Link></li>
                                        <li><Link className="dropdown-item" to="#">Brand Name (Allopathic)</Link></li>
                                        <li><Link className="dropdown-item" to="#">Brand Name (Herbal)</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">Drug Companies</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">Drug Classes</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        More
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link className="dropdown-item" to="#">About Us</Link></li>
                                        <li><Link className="dropdown-item" to="#">Blog</Link></li>
                                        <li><Link className="dropdown-item" to="#">Contact</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
