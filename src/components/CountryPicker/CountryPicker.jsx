import React, {useEffect, useState} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setfetchedCountries] = useState([]);

    useEffect(() => {
       const fetchAPI = async () => {
           setfetchedCountries(await fetchCountries());
       }
       
       fetchAPI();
    },[setfetchedCountries]);
    
    // console.log(fetchedCountries);

    return (
        <FormControl className = {styles.formcontrol}>
            <NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
                <option value = "global">Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}


export default CountryPicker;