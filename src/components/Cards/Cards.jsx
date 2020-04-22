/** 
 * This module is the cards component.
*/

// Imports.
import React from 'react';
import styles from './Cards.module.css';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

/** 
 * Cards Functional Component.
*/
const Cards = (props) => {

    /** 
     * JSX for the card component
    */
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                           Infected
                        </Typography>  
                        <Typography variant="h5">
                            REAL DATA
                        </Typography> 
                        <Typography color="textSecondary">
                            REAL DATE
                        </Typography> 
                        <Typography variant="body2">
                            Number of active cases of COVID-19
                        </Typography> 
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recovered
                        </Typography>  
                        <Typography variant="h5">
                            REAL DATA
                        </Typography> 
                        <Typography color="textSecondary">
                            REAL DATE
                        </Typography> 
                        <Typography variant="body2">
                            Number of recoveries from COVID-19
                        </Typography> 
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Deaths
                        </Typography>  
                        <Typography variant="h5">
                            REAL DATA
                        </Typography> 
                        <Typography color="textSecondary">
                            REAL DATE
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