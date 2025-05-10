import { IoIosArrowDown } from "react-icons/io";
import './FAQ.css'
import { useState } from "react";

export const FAQ = ({question, answer}) => {

    const [openQuestion, setOpenQuestion] = useState(false)

    return (
        <div>
            <h2 className={openQuestion? 'question question__selected' : 'question'} onClick={() => {setOpenQuestion(!openQuestion)}}>
                {question}
                <IoIosArrowDown className={openQuestion? 'question__icon question__icon-open' : 'question__icon'} />
            </h2>
            
            { openQuestion && <Answer> {answer} </Answer>
            }
            
        </div>
    )
}

const Answer = ({children}) => {
    return (
        <div className="answer" style={{ whiteSpace: 'pre-line' }}>
            <p>{children}</p>
        </div>
    )
}