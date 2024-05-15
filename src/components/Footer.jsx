import { Link } from "react-router-dom"

const Footer = () => {
    return(
        <div>
        <footer>
            <a href="https://github.com/e-scarafoni">
                <img src="/src/assets/github-mark.svg" id="github" alt="github logo"></img>
            </a>
            <a href="https://github.com/e-scarafoni">
                <h4> Eugenio Scarafoni </h4>
            </a>
            <Link to="/credits">
                <p> Credits </p>
            </Link>
        </footer>
        </div>
    )
}

export default Footer