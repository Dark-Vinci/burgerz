import { motion } from 'framer-motion';

import classes from '../styles/header.module.css';

function Header () {
    return (
        <motion.div 
            className = { classes.container }
            animate = {{ y: 0 }}
            initial = {{ y: '-100vh' }}
            transition = {{ type: 'spring' }}
            style={{ fontFamily: 'Quicksand' }}
        >
            <div style={{ fontFamily: 'Quicksand' }}>Burger mine...</div>
            <p>A mine filled with precious menirals <strong>BURGERS</strong></p>
        </motion.div>
    );
}

export default Header