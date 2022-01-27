import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"

export default function QouteSection(){
    return (
        <div className="section quote">
            <p className="qoute-text"><FontAwesomeIcon icon={faQuoteLeft} /> Without experimentation, a willingness to ask questions and try new things, we shall surely become static, repetitive, and moribund.</p>
            <p className="qoute-auther">- Anthony Bourdain</p>
        </div>
    )
}