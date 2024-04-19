import './Button.css'

const Button = ({text, moreInfosText, termsLink}) => {
    return(
        <section className='buttonSection'>
            <button className='button'>{text}</button>
            <p className='moreInfosText'>{moreInfosText} <a href="" className='linkText'>{termsLink}</a></p>
        </section>
    )
}

export default Button