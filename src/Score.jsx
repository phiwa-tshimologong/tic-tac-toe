import style from './css/score.module.css'

const Score = () => {
    return(
        <div className={style.score}>
            <div className="player-score">
                <h1>Player 1: </h1>
            </div>
            <h1>Tic Tac Toe</h1>
            <div className="player-score">
                <h1>Player 2: </h1>
            </div>
        </div>
    );
}

export default Score;