


import { Link } from "react-router-dom"
import logo from "./logo.png"
import styles from "./header.module.css"
import HeaderLink from "../HeaderLink"

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="./">
                <img src={logo} alt="cinetag logo"></img>
            </Link>
            <nav>
                <HeaderLink url={"./"}>
                    Home
                </HeaderLink>
                <HeaderLink url={"./favorites"}>
                    Favorites
                </HeaderLink>
            </nav>
        </header>
    )
}

export default Header