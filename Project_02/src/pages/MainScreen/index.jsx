import './style.css'
import RightArrow from '../../assets/right-arrow.png'
import Timer from '../../assets/timer.png'
import Plus from '../../assets/plus.png'

function MainScreen() {

    return (
        <span id="chat-container">
            <p>Texto de output</p>
            <h2>Como posso lhe ajudar hoje?</h2>
            <form>
                <input autoFocus type="text" placeholder='Envie uma mensagem...' />
                <button type="button">
                    <img src={RightArrow} alt="Send Button" />
                </button>
                <div id="additional-buttons">
                    <button type="button">
                        <img src={Plus} alt="Send Button" />
                    </button>
                    <button type="button">
                        <img src={Timer} alt="Send Button" />
                    </button>
                </div>
            </form>
        </span>
    )
}

export default MainScreen