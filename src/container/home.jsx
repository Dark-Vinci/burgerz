import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion'

import classes from '../styles/home.module.css';
import Layout from '../component/layout';

function Home () {
    const { push } = useHistory();

    const buttonClickHandler = () => {
        push('/bread')
    }

    return (
        <Layout>
            <motion.div 
                className = { classes.container }
                initial = {{ x: '-100vw' }}
                animate = {{ x: 0 }}
                transition = {{ delay: 0.5, type: 'spring', stiffness: 120 }}
            >
                <div>
                    <p>Welcome miner </p>
                    <div>We hope you mine the most nutricius burger ever</div>
                </div>
                <div>Click the <strong>start</strong> button to start mining</div>
                <motion.button
                    whileHover = {{ scale: 1.05 }}
                    onClick = { buttonClickHandler }
                > start </motion.button>
            </motion.div>
        </Layout>
    );
}

export default Home