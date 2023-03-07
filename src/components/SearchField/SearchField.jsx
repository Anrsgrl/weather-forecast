import React, { useState } from 'react';
import "./searchField.scss";
import "./weatherModal.scss";
import { BiSearchAlt } from "react-icons/bi"
import axios from 'axios';
import { WiHumidity, WiBarometer, WiWindy, WiThermometer } from "react-icons/wi";
import { AiOutlineClose, AiOutlineLoading3Quarters } from "react-icons/ai";
import { motion } from 'framer-motion';

const SearchField = () => {
    const [data, setData] = useState("");
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);
    const [searchModal, setSearchModal] = useState(false);
    const [loading, setLoading] = useState(false);
    console.log(data)
    const findCity = async () => {
        const apiKey = "51a961e03c49876e078e90d6f9aa762a";
        const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=eng&appid=${apiKey}&units=metric`

        await axios(baseURL).then((res) => {
            setData(res.data)
            setLoading(true)
            setTimeout(() => {
                setError(false)
                setSearchModal(true)
                setCity("")
                setLoading(false)
            }, 3000)
        }).catch(() => { setError(true) });
    }
    return (
        <>
            <div className="search-field">
                <h5>Check the weather by the city </h5>
                <form className="inputs" onSubmit={(e) => { e.preventDefault(); findCity() }}>
                    <input onChange={(e) => setCity(e.target.value)} type="text" className="form-control" placeholder="Search City" value={city} />
                    {loading ? (<motion.span
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 4,
                            yoyo: Infinity,
                            ease: "easeInOut"
                        }}
                        className='loading'><AiOutlineLoading3Quarters /></motion.span>) : (<button type='submit' className='search'><BiSearchAlt /></button>)}
                </form>
                {error && <p className='pt-2 text-danger'>Make sure you entered the city name correctly</p>}
            </div>
            {searchModal &&
                <div
                    className={searchModal ? "weather-modal modal-open" : "weather-modal"}>
                    <button className='close-button' onClick={() => { setSearchModal(false) }}><AiOutlineClose /></button>
                    <div className="weather-modal-content align-items-center d-flex flex-column">
                        <div className="weather-image col-12">
                            <img src={`https://openweathermap.org/img/wn/${data.weather[0]?.icon}@2x.png`} alt="icon" />
                            <h4>{data.name}<span>/{data.sys?.country}</span></h4>
                            <h6 className='pt-1'>{data.weather[0]?.description}</h6>
                        </div>
                        <div className="weather-infos col-12">
                            <h6 className='weather-details'>Weather details</h6>
                            <div className="row">
                                <div className="col-12">
                                    <div className="single-info">
                                        <div className="info-title">
                                            <WiThermometer />
                                            <h6>Temperature</h6>
                                        </div>
                                        <div className="weather-info">
                                            <span>{data.main?.temp}°</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="single-info">
                                        <div className="info-title">
                                            <WiHumidity />
                                            <h6>Humidity</h6>
                                        </div>
                                        <div className="weather-info">
                                            <span>{data.main?.humidity}%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="single-info">
                                        <div className="info-title">
                                            <WiBarometer />
                                            <h6>Pressure</h6>
                                        </div>
                                        <div className="weather-info">
                                            <span>{data.main?.pressure}mbar</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="single-info">
                                        <div className="info-title">
                                            <WiWindy />
                                            <h6>Wind</h6>
                                        </div>
                                        <div className="weather-info">
                                            <span>{data.wind?.speed} km/h</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    )
}

export default SearchField;