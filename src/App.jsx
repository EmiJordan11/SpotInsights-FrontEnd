import './App.css'
import { Header } from './components/Header/Header'
import { FaSpotify } from "react-icons/fa";
import { InfoCard } from './components/InfoCard/InfoCard';
import { FAQ } from './components/FAQ/FAQ';
import { faqData } from './components/FAQ/faqData';
import { cardData } from './components/InfoCard/cardData';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header id='inicio'/>
      <main className='main'>
        <div className='main__text'> 
          <h1 className='main__text-title'>Bienvenido a SpotInsights</h1>
          <h2 className='main__text-subtitle'> Sumate al análisis colectivo de hábitos musicales en Spotify.
          Conectá tu cuenta y ayudanos a descubrir cómo escucha música la comunidad.</h2>
          <button className='main__text-button'> 
            <FaSpotify className='main__text-button-icon' />
            Iniciar sesión con Spotify
          </button>
        </div> 
        <div className='main__img'>
          <img src="../public/SpotInsights-post.png" alt="" />
        </div>
      </main>

      <section className="info" id='por-que-conectar'>
        <h2>¿Por qué conectar tu cuenta?</h2>
        <div className="info__cards">
          {cardData.map((card, i) => (
            <InfoCard key={i} icon={card.icon} title={card.title} info={card.info} />
          ))}
        </div>
      </section>  



      <section className="faqs" id='faqs'>
        <h2 className='faqs__title'>¿Tenés preguntas?</h2>
        {faqData.map((faq,i) => (
          <FAQ key={i} question={faq.question} answer={faq.answer} />
        ))}
       
      </section>
      <Footer />
    </>
  )
}

export default App
