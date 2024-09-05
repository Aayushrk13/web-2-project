import styles from "./login.module.css"

function Login(){
    return(
        <div>

            <form action="">
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Login;