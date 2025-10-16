import './style.css'

function Login(){

    
    return(
        <div id="main-container">
            <form>
                <h1>User Login</h1>
                <input type="email" name="email" placeholder="E-mail"/>
                <input type="password" name="password" placeholder="Password"/>
                <button type='button'>Login</button>
            </form>
        </div>
    )
}

export default Login