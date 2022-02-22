import Score from './Score'
import style from './css/app.module.css'

function App() {
  return (
    <div className="App">
      <Score/>
      
      <div className={style.grid}>
        <div className={style.cell}></div>
        <div className={style.cell}></div>
        <div className={style.cell}></div>
        <div className={style.cell}></div>
        <div className={style.cell}></div>
        <div className={style.cell}></div>
        <div className={style.cell}></div>
        <div className={style.cell}></div>
        <div className={style.cell}></div>
      </div>
    </div>
  );
}

export default App;
