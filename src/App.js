/**
 * This module is the main app component.
 */

// Imports.
import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css'
import { fetchData } from './api';

/**
 * The main class for the app component.
 * @class App
 * @extends {React.Component}
 */
class App extends React.Component {

    // The state of the component.
    state = {
        data: {}
    }

    /**
     * Function that is executed when the component mounts.
     * Retrieve the data from the API.
     * @memberof App
     */
    async componentDidMount() {

        // Retrieve the data using the fetch data function.
        const fetchedData = await fetchData();

        // Set the data onto the state.
        this.setState({
            data: fetchedData
        });
    }

    /**
     * The render function renders the app.
     * @returns The JSX for the app.
     * @memberof App
     */
    render() {

        // Retrieve the data from the state.
        const { data } = this.state;

        return (
            <div className={styles.container}>
                <Cards data={data}/>
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

// Export the App class.
export default App;