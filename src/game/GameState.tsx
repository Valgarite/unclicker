import resetGif from '../assets/reset.gif'

const resetGameState = () => {
    return (<>
        <img ref={resetGif}></img>
    </>)
}

function GameState(gameState: number){
    switch (gameState) {
        case 9:
            return resetGameState;
               
        default:
            return (<>pavo</>)
    }
}

export default GameState;