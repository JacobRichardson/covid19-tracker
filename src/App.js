/**
 * This module is the main app component.
 */

// Imports.
import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css'
import { fetchData,  } from './api';
import covid_19Image from './images/COVID-19.png';

/**
 * The main class for the app component.
 * @class App
 * @extends {React.Component}
 */
class App extends React.Component {

    // The state of the component.
    state = {
        data: {},
        country: ''
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
     * Fetches data when the country is changed.
     * @param {String} country The chosen country.
     * @memberof App
     */
    handleCountryChange = async (country) => {

        // Fetch the data using the fetch data function.
        const fetchedData = await fetchData(country);

        // Set the state.
        this.setState({
            data: fetchedData,
            country: country
        });
        
    }
    /**
     * The render function renders the app.
     * @returns The JSX for the app.
     * @memberof App
     */
    render() {

        // Retrieve the data from the state.
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <img className={styles.image} src={covid_19Image} alt="COVID-19"/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country} />
            </div>
        )
    }
}

// Export the App class.
export default App;