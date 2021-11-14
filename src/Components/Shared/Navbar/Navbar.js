import { Link } from 'react-router-dom'
import './Navbar.css'
import Images from '../../../res/images/logo.png'

export default function Navbar() {
    return (
        <>
            <header >
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container">
                        <Link class="navbar-brand" to="#"><img src={Images} alt="" style={{height:"70px"}} /></Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav ms-auto">
                            <li class="nav-item dropdown">
                                    <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Medicine
                                    </Link>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link class="dropdown-item" to="#">Genric Name (Allopathic)</Link></li>
                                        <li><Link class="dropdown-item" to="#">Genric Name (Herbal)</Link></li>
                                        <li><Link class="dropdown-item" to="#">Brand Name (Allopathic)</Link></li>
                                        <li><Link class="dropdown-item" to="#">Brand Name (Herbal)</Link></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="#">Drug Companies</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="#">Drug Classes</Link>
                                </li>
                                <li class="nav-item dropdown">
                                    <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        More
                                    </Link>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link class="dropdown-item" to="#">About Us</Link></li>
                                        <li><Link class="dropdown-item" to="#">Blog</Link></li>
                                        <li><Link class="dropdown-item" to="#">Contact</Link></li>
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
