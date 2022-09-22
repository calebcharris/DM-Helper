import { Link } from 'react-router-dom'

const Footer = () => {
    //A link to the about page which can be accessed at any time
    return (
        <footer>
            <p>Created by Caleb Harris 2022</p>
            <Link to='/DM-Helper/About'>About</Link>
        </footer>
    )
}

export default Footer