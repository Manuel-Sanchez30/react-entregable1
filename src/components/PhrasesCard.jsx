

const PhrasesCard = ({phraseRandom}) => {
    return (
    
        <p className="card">
            {phraseRandom.phrase}<br></br>
            {phraseRandom.author}
        </p>
    )
};

export default PhrasesCard

