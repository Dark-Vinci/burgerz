import Footer from "./footer";
import Header from "./header";
import classes from '../styles/layout.css';

function Layout ({ children }) {
    return (
        <div className = { classes.container }>
            <Header />
            { children }
            <Footer />
        </div>
    )
}

export default Layout