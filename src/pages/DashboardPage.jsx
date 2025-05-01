import { useEffect } from "react"
import { Header } from "../components/Header/Header"
import confetti from "canvas-confetti"
import { Footer } from "../components/Footer/Footer"
import { faqData } from "../components/FAQ/faqData"
import { FAQ } from "../components/FAQ/FAQ"
import { sendAuthorizationCode } from "../services/DataSyncService"
import { useNavigate } from "react-router-dom"

export const DashboardPage = () => {

    const navigate = useNavigate()

    useEffect (()=> {
        const authorize = async()=> {
            const code = new URLSearchParams(window.location.search).get("code");
            if (code) {
                try{
                    confetti()
                    const response = await sendAuthorizationCode(code);
                    if (response.status==200) {
                        console.log("Autorizacion exitosa")
                    }
                    else{
                        console.log("Hubo un error al autorizar")
                    }
                } catch (error){
                    console.error("Error al enviar el code: ", error)
                }
            } else{
                navigate('/')
            }
        }
        authorize()
    }, [])

    return (
        <>
            <Header/>
            <main className='main'>
                <div className='main__text'> 
                    <h1 className='main__text-title'>¡Ya sos parte de SpotInsights!</h1>
                    <h2 className='main__text-subtitle'>Gracias por conectarte, Hemos registrado tu historial reciente de Spotify para contribuir al análisis colectivo. Próximamente podrás ver los resultados en nuestro dashboard de Power BI.</h2>
                </div> 
                <div className='main__img'>
                    <img src="../public/SpotInsights-post.png" alt="" />
                </div>
            </main>

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