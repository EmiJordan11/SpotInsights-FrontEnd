import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { DashboardPage } from './pages/DashboardPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      {/* <Header id='inicio'/>
      <main className='main'>
        <div className='main__text'> 
          <h1 className='main__text-title'>Bienvenido a SpotInsights</h1>
          <h2 className='main__text-subtitle'> Sumate al análisis colectivo de hábitos musicales en Spotify.
          Conectá tu cuenta y ayudanos a descubrir cómo escucha música la comunidad.</h2>
          <button className='main__text-button' onClick={login}> 
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
      <Footer /> */}
    </>
  )
}

export default App
