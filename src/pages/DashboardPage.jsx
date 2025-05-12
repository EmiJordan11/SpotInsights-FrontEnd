import { useEffect } from "react"
import { Header } from "../components/Header/Header"
import confetti from "canvas-confetti"
import { Footer } from "../components/Footer/Footer"
import { faqData } from "../components/FAQ/faqData"
import { FAQ } from "../components/FAQ/FAQ"
import { sendAuthorizationCode } from "../services/DataSyncService"
import { useNavigate } from "react-router-dom"
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import styles from './DashboardPage.module.css'

export const DashboardPage = () => {

    const navigate = useNavigate()

    useEffect (()=> {
        const authorize = async()=> {
            const code = new URLSearchParams(window.location.search).get("code");
            if (code) {
                try{
                    confetti({
                        origin:{
                            x:0.25,
                        }
                    })
                    confetti({
                        origin:{
                            x:0.75,
                        }
                    })
                    const response = await sendAuthorizationCode(code);
                    if (response.status==204) {
                        console.log("Autorización exitosa")
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
            <main className={styles["main"]}>
                <div className={styles["main__text"]} /*style={{ position: 'relative', zIndex: 2 }}*/> 
                    <h1 className={styles["main__text-title"]}>¡Ya sos parte de SpotInsights!</h1>
                    <h2 className={styles["main__text-subtitle"]}>Gracias por conectarte, hemos registrado tu historial reciente de Spotify para contribuir al análisis colectivo. Próximamente podrás ver los resultados en nuestro dashboard de Power BI.</h2>
                </div> 
                <DotLottieReact
                    src="https://lottie.host/d111e6e2-7df4-4eb7-97c4-f4a51c7d9340/Hp7KyAxbDN.lottie"
                    loop
                    autoplay
                    className={styles["main__lottie"]}
                />
            </main>

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