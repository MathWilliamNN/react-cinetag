import styles from "../NotFound/NotFound.module.css"


const NotFound = () =>{
    return( 
        <section className={styles.container}>
            <h2>Oops!</h2>
            <p> It seems you've reached a page that doesn't exist. Try going back to the homepage! </p>
        </section>
    )
}

export default NotFound