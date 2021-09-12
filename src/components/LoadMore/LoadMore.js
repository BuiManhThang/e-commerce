import React from 'react'
import styles from './LoadMore.module.css'
import { Link } from 'react-router-dom'

const LoadMore = () => {
    return (
        <Link to='/products' className={styles.btn}>
            Load More
        </Link>
    )
}

export default LoadMore
