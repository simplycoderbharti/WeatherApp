import React, { useState, useEffect } from "react";
              
// import cloud from '../../public/video/cloud.mp4'
const WeatherCard = ({ tempInfo }) => {
    const [video, setVideo] = useState('../video/bg.jpg')
    // console.log(cloud)
    const [weatherState, setWeatheState] = React.useState("");
    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
    } = tempInfo;

    // <p></p>


    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Clouds":
                    setWeatheState("wi-day-cloudy");
                    setVideo(require('../video/cloud.mp4'))

                    break;
                case "Haze":
                    setWeatheState("wi-fog");
                    setVideo(require('../video/fog.mp4'))
                    break;
                case "Clear":
                    setWeatheState("wi-day-sunny");
                    setVideo(require('../video/sunny.mp4'))
                    break;
                case "Mist":
                    setWeatheState("wi-dust");
                    setVideo(require('../video/rainy.mp4'))
                    break;

                default:
                    setWeatheState("wi-day-sunny");
                    setVideo(require('../video/sunny.mp4'))
                    break;
            }
        }
    }, [weathermood]);

    // converting the seconds into time
    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;
    return (
        <>
            <div className="row">
                <div className="images">
                    <video src={video} autoPlay />
                    {/* <img src={sunrise} alt="sunrise" /> */}
                </div>
                <div className="col-md-4">
                    <div className="wrap">

                    </div>

                    <div className="dateTime">
                        <div className="date"> {new Date().toLocaleString()} </div>
                    </div>
                    <article className="widget">

                        <div className="weatherIcon">
                            <i className={`wi ${weatherState}`}></i>
                        </div>

                        <div className="weatherInfo">
                            <div className="temperature">
                                <span>{temp}&deg;</span>
                            </div>
                            <div className="description">
                                <div className="weatherCondition">{weathermood}</div>
                                <div className="place">
                                    {name}, {country}
                                </div>
                            </div>
                        </div>

                        



                        {/* our 4column section  */}
                        <div className="extra-temp">
                            <div className="temp-info-minmax">
                                <div className="two-sided-section">
                                    <p>
                                        <i className={"wi wi-sunset"}></i>
                                    </p>
                                    <p className="extra-info-leftside sunset">
                                        <p> Sunset</p>
                                        {timeStr} PM <br />
                                    </p>
                                </div>
                                <div className="horizontal"></div>

                                <div className="two-sided-section">
                                    <p>
                                        <i className={"wi wi-humidity"}></i>
                                    </p>
                                    <p className="extra-info-leftside">
                                        <p> Humidity</p>
                                        {humidity} <br />

                                    </p>
                                </div>
                                <div className="horizontal"></div>

                            </div>

                            <div className="weather-extra-info">
                                <div className="two-sided-section">
                                    <p>
                                        <i className={"wi wi-rain"}></i>
                                    </p>
                                    <p className="extra-info-leftside">
                                        <p> Pressure</p>
                                        {pressure} <br />

                                    </p>
                                </div>
                                <div className="horizontal"></div>


                                <div className="two-sided-section">
                                    <p>
                                        <i className={"wi wi-strong-wind"}></i>
                                    </p>
                                    <p className="extra-info-leftside">
                                        <p> Speed</p>
                                        {speed} <br />

                                    </p>
                                </div>

                                <div className="horizontal"></div>

                            </div>
                        </div>
                    </article>

                </div>
            </div>
        </>
    );
};

export default WeatherCard;