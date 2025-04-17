import './Footer.css'
import { contactData } from './contactData'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__info">
                <img src="../../public/logo-spotinsights.png" alt="Logo SpotInsights" className='footer__info-logo'/>
                <p>© 2025 | Proyecto desarrollado por Emiliano Jordan · Datos obtenidos mediante la API oficial de Spotify</p>
                <p>Proyecto realizado solo con fines educativos</p>
            </div>
            <div className="footer__contact">
                <p>Contacto</p>
                <div className='footer__contact-links'>
                    {contactData.map((c) => (
                        <Contact key={c.name} icon={c.icon} />
                    ))}
                </div>
                
            </div>
        </footer>
    )

}

const Contact = ({ icon : Icon}) => {
    return (
        <>
            <Icon className='contact-icon' />
        </>
    )
}