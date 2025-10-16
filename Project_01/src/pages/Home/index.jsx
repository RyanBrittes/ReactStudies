import './style.css'
import api from '../../services/api'
import { useState, useRef } from 'react'
import SendIcon from "../../assets/send_icon.png"

function Home(){

    let [output, setOutput] = useState([])

    const inputMessage = useRef()

    async function getOutput(){
        console.log(output["data"])
    }   

    async function postInput(){
        output = await api.post('/input', {
            input: inputMessage.current.value
        })

        setOutput(output)
        getOutput()
    }

    return (
        <div id="main-container"> 
            <span id='chat-content'>
                <h1>Assistente Virtual</h1>
                {<span>{output['data']}</span>}
                <input autofocus type="text" name="input-user" placeholder="Digite alguma coisa aqui" ref={inputMessage}/>
                <button type="button" onClick={postInput}>Enviar</button>
            </span>
        </div>
    )
}

export default Home