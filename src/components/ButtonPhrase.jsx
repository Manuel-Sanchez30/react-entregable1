import getRandomElementFormArray from "../utils/randomElemntFromArray";
import phrase from "../utils/phrases.json";


const ButtonPhrase = ({setPhraseRandom, setPathtRandom, arrBackground}) => {

  const handleRandomPhrase = () => {
    const newRandomPhrase = getRandomElementFormArray(phrase)
    setPhraseRandom(newRandomPhrase)
    const newPath = getRandomElementFormArray(arrBackground)
    setPathtRandom(newPath)

  }

  


  return (
    <button className="app__btn" onClick={handleRandomPhrase}>Ver Otro</button>
  )
};

export default ButtonPhrase;
