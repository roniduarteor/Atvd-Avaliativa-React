import './Card.css'
import Input from '../Input/Input'
import Button from '../Button/Button'

const Card = () => {
    return(
        <section className="cardBox">
        
        <Input
        text="First Name"
        />

        <Input
        text="Last Name"
        />

        <Input
        text="Email Address"
        />

        <Input
        text="Password"
        />

        <Button
        text="CLAIM YOUR FREE TRIAL"
        moreInfosText="By clicking the button, you are agreeing to our"
        termsLink="Terms and Services"
        />
        </section>
    )   
}

export default Card