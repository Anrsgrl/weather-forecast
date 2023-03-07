import React, { useState } from 'react';
import "./searchField.scss";
import { BiSearchAlt } from "react-icons/bi"
import axios from 'axios';

const SearchField = () => {
    const [data, setData] = useState([]);
    const [city, setCity] = useState("");
    console.log(data)
    const findCity = async () => {
        const apiKey = "51a961e03c49876e078e90d6f9aa762a";
        const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=eng&appid=${apiKey}&units=metric`

        await axios(baseURL).then(res => setData(res.data));
    }
    return (
        <div className="search-field">
            <h5>Check the weather by the city </h5>
            <div className="inputs">
                <input onChange={(e) => setCity(e.target.value)} type="text" className="form-control" placeholder="Search City" />
                <button onClick={() => { findCity() }} className='search'><BiSearchAlt /></button>
            </div>
        </div>
    )
}

export default SearchField;