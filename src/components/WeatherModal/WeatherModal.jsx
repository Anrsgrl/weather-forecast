import React, { useState } from 'react';
import "./weatherModal.scss";
import { WiHumidity, WiBarometer, WiWindy } from "react-icons/wi";
import { AiOutlineClose } from "react-icons/ai";

const WeatherModal = (props) => {
    const { city, description, icon, humidity, pressure, wind, } = props;
    const [modal, setModal] = useState(false);
    return (
        <div className={modal ? "weather-modal modal-active" : "weather-modal"}>
            <button onClick={() => { setModal(false) }} className='close-button'><AiOutlineClose /></button>
            <div className="weather-modal-content align-items-center d-flex flex-column">
                <div className="weather-image col-12">
                    <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" />
                    <h4>{city}</h4>
                    <h6 className='pt-1'>{description}</h6>
                </div>
                <div className="weather-infos col-12">
                    <h6 className='weather-details'>Weather details</h6>
                    <div className="row">
                        <div className="col-12">
                            <div className="single-info">
                                <div className="info-title">
                                    <WiHumidity />
                                    <h6>Humidity</h6>
                                </div>
                                <div className="weather-info">
                                    <span>{humidity}%</span>
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
                                    <span>{pressure}mbar</span>
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
                                    <span>{wind} km/h</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherModal