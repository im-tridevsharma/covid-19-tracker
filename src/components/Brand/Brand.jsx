import React from "react";
import styles from './Brand.module.css';
import { Typography } from '@material-ui/core';

const Brand = () => {
	return (
		<div className={styles.container}>
            <Typography variant="h2" component="h3">
             C<img className={styles.covidimg} src="https://cutt.ly/ehEsot3" alt="covid-19"/>VID-19
            </Typography>
        </div>
	)
}

export default Brand;