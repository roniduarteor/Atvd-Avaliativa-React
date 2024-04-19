import './Input.css'

const Input = ({text}) => {
    return(
        <>
        <input type="text" placeholder={text} required/>
        </>
    )
}

export default Input