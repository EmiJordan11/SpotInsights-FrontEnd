import './Header.css'

export const Header = () => {

    return (
        <header className="header">
            <img src="../public/logo-spotinsights.png" alt="Logo SpotInsights" className="header__logo" />

            <nav>
                <ul className="header__nav">
                    {/* <li className="header__nav-item">
                        <a href="#inicio">Inicio</a>
                    </li> */}
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
            
                {/* <li className="header__nav-item">
                    <a href=""></a>
                </li> */}

                {/* <li className="header__nav-item"> godeto</li>
                <li className="header__nav-item">Sobre nosotros</li> */}
            {/* </ul> */}
        </header>

    )

}