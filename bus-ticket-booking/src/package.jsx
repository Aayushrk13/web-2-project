import styles from "./index.module.css";
function Tourpackage(){

    return(
        <div className={styles.package}>
            <h2 style={{textAlign:"center"}}>Tour packages</h2>
            <span>Book bus tickets with a fast booking process</span>
            <ul>
                <li>Comfortable transport</li>
                <li>Populare destination</li>
            </ul>
        </div>
    );
}

export default Tourpackage;