import { motion } from 'framer-motion';

import classes from '../styles/footer.module.css';

function Footer () {
    return (
        <motion.div 
            className = { classes.container }
            animate = {{ y: 0 }}
            initial = {{ y: '100vh' }}
            transition = {{ delay: 1, type: 'spring' }}
        >
            <div>Made with love <i 
                style = {{ color: 'red', fontSize: '20px' }}
                className = "fa fa-heart"></i> by tomiwa</div>
            <div>Phone: 09034119761</div>
            <div>follow on social our social media</div>
            <div className = { classes.icon }>
                <i 
                    className = "fa fa-twitter"
                    style = {{ 
                        backgroundColor: 'blue', 
                        padding: '5px',
                        borderRadius: '50%' 
                    }}
                ></i>
                <i 
                    className = "fa fa-github"
                    style = {{ 
                        backgroundColor: 'black', 
                        padding: '5px',
                        borderRadius: '50%' 
                    }}
                ></i>
                <i 
                    className = "fa fa-whatsapp"
                    style = {{ 
                        backgroundColor: 'green', 
                        padding: '5px',
                        borderRadius: '50%' 
                    }}
                ></i>
            </div>
            <div>Terms and condition</div>
        </motion.div>
    )
}

export default Footer