
import { useState } from 'react'
import './App.css'
import  ButtonPhrase  from './components/ButtonPhrase'
import  PhrasesCard  from './components/PhrasesCard';
import  phrases from './utils/phrases.json';
import  randomElementFromArray from './utils/randomElemntFromArray';

const arrBackground = [1,2,3,4]

function App() {
  
  
  const initialvalue = randomElementFromArray(phrases)
  const initialPath  = randomElementFromArray(arrBackground)

  const [phraseRandom, setPhraseRandom] = useState(initialvalue)
  const [pathtRandom, setPathtRandom] = useState(initialPath)

  const objStyle = {
    backgroundImage: `url('/fortuna-1/fondo${pathtRandom}.jpg')`
    
  }
    

  return (
    <>
      <div style={objStyle} className='app'>
        <h1 className='app__tittle'>Galletas de la Fortuna</h1>
        <PhrasesCard phraseRandom = {phraseRandom}/>
        <ButtonPhrase
          setPhraseRandom = {setPhraseRandom}
          setPathtRandom  = {setPathtRandom}
          arrBackground   = {arrBackground}
        />
      </div>
    </>
  )
}

export default App
