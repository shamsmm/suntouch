import React from 'react';
import { motion } from 'framer-motion';

function Home(props) {

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} >
            <div>
                Home
            </div>
        </motion.div>
    );
}

export default Home;