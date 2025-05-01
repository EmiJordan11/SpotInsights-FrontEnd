import { useState } from 'react'
import './Header.css'
import { IoMenu } from "react-icons/io5"
import { RxCross2 } from "react-icons/rx";
import { Navigate, useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate()

    const handleClickLogo = () => {
        navigate('/')
    }

    const menuIcon = {
        burguer: IoMenu,
        x: RxCross2
    }

    const [showMenu, setShowMenu] = useState(false)

    const classNameNavBar = showMenu ? "header__nav show__menu" : "header__nav"
    const Icon = showMenu ? menuIcon.x : menuIcon.burguer

    return (
        <header className="header">
            <img src="/Logo-spotinsights.png" alt="Logo SpotInsights" className="header__logo" onClick={handleClickLogo} />

            <nav>
                <ul className={classNameNavBar}>
                    <li className="header__nav-item">
                        <a href="#por-que-conectar">¿Por qué conectar?</a>
                    </li>
                    <li className="header__nav-item">
                        <a href="#faqs">FAQs</a>
                    </li>
                    <li className="header__nav-item">
                        <a href="#contacto">Contacto</a>
                    </li>
                </ul>
            </nav>
            <Icon className='header__menu' onClick={() => {setShowMenu(!showMenu)}} />
        </header>

    )

}