import { Header } from '../components/Header/Header'
import { FaSpotify } from "react-icons/fa";
import { InfoCard } from '../components/InfoCard/InfoCard';
import { FAQ } from '../components/FAQ/FAQ';
import { faqData } from '../components/FAQ/faqData';
import { cardData } from '../components/InfoCard/cardData';
import { Footer } from '../components/Footer/Footer';
import styles from './HomePage.module.css'

export const HomePage = () => {
    const spotify_url = import.meta.env.VITE_URL_SPOTIFY;

    const login = () => {
        window.location.href = spotify_url
    }

    return (
        <>
            <Header id='inicio'/>
            <main className={styles["main"]}>
                <div className={styles["main__text"]}> 
                <h1 className={styles["main__text-title"]}>Bienvenido a SpotInsights</h1>
                <h2 className={styles["main__text-subtitle"]}> Sumate al análisis colectivo de hábitos musicales en Spotify.
                Conectá tu cuenta y ayudanos a descubrir cómo escucha música la comunidad.</h2>
                <button className={styles["main__text-button"]} onClick={login}> 
                    <FaSpotify className={styles["main__text-button-icon"]} />
                    Iniciar sesión con Spotify
                </button>
                </div> 
                <div className={styles["main__img"]}>
                <img src="/SpotInsights-post.png" alt="" />
                </div>
            </main>

            <section className={styles["info"]} id='por-que-conectar'>
                <h2>¿Por qué conectar tu cuenta?</h2>
                <div className={styles["info__cards"]}>
                {cardData.map((card, i) => (
                    <InfoCard key={i} icon={card.icon} title={card.title} info={card.info} />
                ))}
                </div>
            </section>  



            <section className={styles["faqs"]} id='faqs'>
                <h2 className={styles["faqs__title"]}>¿Tenés preguntas?</h2>
                {faqData.map((faq,i) => (
                <FAQ key={i} question={faq.question} answer={faq.answer} />
                ))}
            
            </section>
            <Footer />
        </>
    )
}

