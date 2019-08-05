import React from 'react'
import styles from './Spinner.module.css';

export default function Spinner() {
    return (
        <div>
            <div className={styles.Loader}>Loading...</div>
        </div>
    )
}
