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
      <Header />
      <main className='main'>
        <h1 className='main__welcome'>Bienvenido a SpotInsights</h1>
        <button className='main__button'> 
          <FaSpotify className='main__button-icon' />
          Iniciar sesión con Spotify
        </button>
      </main>

      <section className="info">
        <h2>¿Por qué conectar tu cuenta?</h2>
        <div className="info__cards">
          {cardData.map((card, i) => (
            <InfoCard key={i} icon={card.icon} title={card.title} info={card.info} />
          ))}
        </div>
      </section>  



      <section className="faqs">
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
