import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

import Layout from '../component/layout';
import classes from '../styles/bread.module.css';
import BreadContext from '../contexts/breadContext';

function Bread () {
    const [ clicked, setClicked ] = useState(false);
    const [ breadType, setBreadType ] = useState('');
    const { push } = useHistory();

    const breads = [
        'Agege Bone',
        'Chocolate Flavoured',
        'Wheat Flowered'
    ]

    const buttonClickHandler = () => {
        push('/ingredient');
    }

    const breadClickHandler = (type) => {
        setBreadType(type);
        setClicked(true);
        console.log(clicked);
        console.log(breadType);
    }

    return (
        <Layout>
            <BreadContext.Provider value = { breadType }>
                <motion.div 
                    className={ classes.container }
                    initial = {{ x: '100vw' }}
                    animate = {{ x: 0 }}
                    transition = {{ delay: 0.5, type: 'spring', stiffness: 120 }}
                >
                    <p
                        style = {{ textDecoration: 'underline'}}
                    >Type of bread to mine</p>
                    <ul>
                        {
                            breads.map((type) => {
                                return <li 
                                    key={type}
                                    onClick = { () => breadClickHandler(type) }
                                    > { type } </li>
                            })
                        }
                    </ul>

                    {
                        clicked && <motion.button
                            onClick = { buttonClickHandler }
                        >continue</motion.button>
                    }
                </motion.div>
            </BreadContext.Provider>
        </Layout>
    );
}
export default Bread;