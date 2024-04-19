import './Apresentation-Text.css'

const ApresentationText = ({title, text}) => {
    return(
        <>
        <h1 className='title'>{title}</h1>
        <p className='text'>{text}</p>
        </>
    )
}

export default ApresentationText