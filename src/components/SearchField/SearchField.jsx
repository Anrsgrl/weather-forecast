import React from 'react';
import "./searchField.scss";
import { BiSearchAlt } from "react-icons/bi"

const SearchField = () => {
    return (
        <div className="search-field">
            <h5>Check the weather by the city </h5>
            <div class="inputs">
                <input type="text" class="form-control" placeholder="Search City" />
                <button className='search'><BiSearchAlt /></button>
            </div>
        </div>
    )
}

export default SearchField;