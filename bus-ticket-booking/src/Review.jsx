import styles from "./index.module.css"
import Reviewbox from "./Reviewbox"
export default function Review(){

    const reviews=[{
        id:0,
        name:"Aayush Rajkarnikar",
        review:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
    },{
        id:1,
        name:"Aayush Rajkarnikar",
        review:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
    },{
        id:2,
        name:"Aayush Rajkarnikar",
        review:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
    }
    ];
    const reviewlist=reviews.map(review=>
        <li key={review.id}>
            <Reviewbox name={review.name} reviewdes={review.review} ></Reviewbox>
        </li>
    )
    return(
        <>
            <div className={styles.container}>
                <div >
                    <h2>Reviews</h2>
                    <ul className={styles.reviewblock}>{reviewlist}</ul>
                </div>
            </div>
        </>
    );
}