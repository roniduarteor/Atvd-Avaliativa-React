import './App.css'
import backgroundImage from '../../images/bg-intro-desktop.png'
import ApresentationText from '../Apresentation-Text/Apresentation-Text'
import Anuncio from '../Anuncio/Anuncio'
import Card from '../Card/Card'


const App = () => {
    return(
        <section className='conteudo'>
        <section className='apresentation'>
        <ApresentationText
        title="Learn to code by watching others"
        text="See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but undestanding how developers think is invaluable"
        />
        </section>

        <section className='register'>
        <Anuncio/>
        
        <Card
        
        />
        </section>
        </section>
        

        
    )
}

export default App