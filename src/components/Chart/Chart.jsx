/** 
 * Chart Component.
*/

// Imports.
import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api/';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

/** 
 * Functional Component.
*/
const Chart = () => {

    // Create the state using use state.
    const [dailyData, setDailyData] = useState([]);

    // Use effect function.
    useEffect(() => {

        // Create an async function.
        const fetchAPI = async () => {

            // Retrieve the data from the api and set it onto the state.
            setDailyData(await fetchDailyData())
        }

        // Invoke the async fetch api function.
        fetchAPI();
    }, []);

    // Create the line chart.
    const lineChart = (

        // If daily data has values in the array
        dailyData.length ?
        (
            // Create the JXS for the line chart.
            <Line 
                data={{
                    labels: dailyData.map((data) => data.date),
                    datasets: [
                        
                        {
                            data: dailyData.map((data) => data.confirmed),
                            label: 'Infected',
                            borderColor: '#333fff',
                            fill: true
                        }
                        , {
                            data: dailyData.map((data) => data.deaths),
                            label: 'Deaths',
                            borderColor: 'red',
                            backgroundColor: 'rgba(255, 0, 0, 0.5)',
                            fill: true
                        }
                    ],
                }}
            />
        )
        // Else, return null.
        : null
    );

    /** 
     * Return the JSX.
    */
    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

// Export the Chart component.
export default Chart;