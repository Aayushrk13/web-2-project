import styles from "./index.module.css";
function Tourpackage(){

    return(
        <div className={styles.package}>
            <h2 style={{textAlign:"center",fontWeight:"500"}}>Tour packages</h2>
            <div>Book bus tickets with a fast booking process</div>
            <ul>
                <li>Comfortable transport</li>
                <li>Popular destination</li>
                <li>Affordable prices</li>
            </ul>
            <button className={styles.btn}>Book Tour Package</button>
            
        </div>
    );
}

export default Tourpackage;