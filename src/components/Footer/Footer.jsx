import './Footer.css'
import { contactData } from './contactData'

export const Footer = () => {
    return (
        <footer className="footer" id='contacto'>
            <div className="footer__info">
                <img src="/Logo-spotinsights.png" alt="Logo SpotInsights" className='footer__info-logo'/>
                <p>© 2025 | Proyecto desarrollado por Emiliano Jordan </p>
                <p className='footer__info-faded'>Datos obtenidos mediante la API oficial de Spotify</p>
                <p className='footer__info-faded'>Proyecto realizado solo con fines educativos</p>
            </div>
            <div className="footer__contact">
                <p className="footer__contact-title">Contacto</p>
                <div className='footer__contact-links'>
                    {contactData.map((c) => (
                        <Contact key={c.name} icon={c.icon} link={c.link}/>
                    ))}
                </div>
                
            </div>
        </footer>
    )

}

const Contact = ({ icon : Icon, link}) => {
    return (
        <a href={link} target='_blank'>
            <Icon className='contact-icon' />
        </a>
    )
}