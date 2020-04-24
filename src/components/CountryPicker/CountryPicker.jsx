/**
 * Country Picker Component.
*/

// Imports.
import React, { useState, useEffect }from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

/**
 * Functional Component.
*/
const CountryPicker = (props) => {

    // Create the state using use state.
    const [fetchedCountries, setFetchedCountries] = useState([]);

    // Use effect function.
    useEffect(() => {

        // Fetch API async function.
        const fetchAPI = async () => {

            // Set the countries from the api onto the state.
            setFetchedCountries(await fetchCountries());
        }

        // Invoke the function.
        fetchAPI();

    }, [setFetchedCountries]);

    /**
     * Return JSX.
    */
    return (
       <FormControl className={styles.formControl}>

           {/* Invoke the handle country change from props when on change is called. */}
           <NativeSelect defaultValue="" onChange={(e) => props.handleCountryChange(e.target.value)}>

               {/* Map over the countries */}
                {fetchedCountries.map((country, i) =>
                
                    // Create an option using the country.
                    <option key ={i} value={country}>
                        {country}
                    </option>
                )}
           </NativeSelect>
       </FormControl>
    )
}

// Export the country picker component.
export default CountryPicker;