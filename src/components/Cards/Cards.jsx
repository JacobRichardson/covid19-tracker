/** 
 * This module is the cards component.
*/

// Imports.
import React from 'react';
import styles from './Cards.module.css';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

/** 
 * Cards Functional Component.
*/
const Cards = (props) => {

    // Retrieve data from props.
    const data = props.data;
    
    // If confirmed is undefined on data.
    if (!data.confirmed) {
        
        // Return the string loading.
        return 'Loading...';
    }

    // Retrieve values from data.
    const { confirmed, recovered, deaths, lastUpdate } = data;

    /** 
     * JSX for the card component
    */
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                           Infected
                        </Typography>  
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator={","} />
                        </Typography> 
                        <Typography color="textSecondary">
                           { new Date(lastUpdate).toDateString() }
                        </Typography> 
                        <Typography variant="body2">
                            Number of active cases of COVID-19
                        </Typography> 
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recovered
                        </Typography>  
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={2.5} separator={","} />
                        </Typography> 
                        <Typography color="textSecondary">
                            { new Date(lastUpdate).toDateString() }
                        </Typography> 
                        <Typography variant="body2">
                            Number of recoveries from COVID-19
                        </Typography> 
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Deaths
                        </Typography>  
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={2.5} separator={","} />
                        </Typography> 
                        <Typography color="textSecondary">
                            { new Date(lastUpdate).toDateString() }
                        </Typography> 
                        <Typography variant="body2">
                            Number of deaths caused by COVID-19
                        </Typography> 
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

// Export the Cards functional component.
export default Cards;