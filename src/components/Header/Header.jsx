import './Header.css'

export const Header = () => {

    return (
        <header className="header">
            <img src="../public/logo-spotinsights.png" alt="Logo SpotInsights" className="header__logo" />

            <ul className="header__nav">
                <li className="header__nav-item"> godeto</li>
                <li className="header__nav-item">Sobre nosotros</li>
            </ul>
        </header>

    )

}