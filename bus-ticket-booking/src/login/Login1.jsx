import styles from "./login.module.css"


export default function Login(){
    return(
        <div className={styles.main}>
                <h1>Log in</h1>
                <form action="">
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <button>Submit</button>
                </form>
            
        </div>
    );
}

  

