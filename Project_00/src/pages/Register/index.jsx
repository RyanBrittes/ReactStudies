import './style.css'

function Register(){


    return(
        <div id="main-container">
            <form>
                <h1>User Register</h1>
                <input type="text" name="name" placeholder="Name"/>
                <input type="number" name="age" placeholder="Age"/>
                <input type="email" name="email" placeholder="E-mail"/>
                <input type="password" name="password" placeholder="Password"/>
                <button type='button'>Register</button>
            </form>
        </div>
    )
}

export default Register