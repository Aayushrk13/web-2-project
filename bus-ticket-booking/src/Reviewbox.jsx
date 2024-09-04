import styles from "./index.module.css"

export default function Reviewbox({name,reviewdes}){

    return(
        <>
            <div  className={styles.reviewlist}>
                <div>
                <img src="" alt="customer photo" />
                <p>{name}</p>
                </div>
                <div>
                    <p>{reviewdes}</p>
                </div>
            </div>
        </>
    );
}