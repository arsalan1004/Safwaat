import React from "react";
import classes from './ErrorPage.module.css';
import caveman from '../../assets/Gifs/caveman.gif';
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className={classes.ErrorPage}>
            <h1>404</h1>
            <img src={caveman}  />
            <p className={classes.FirstLine}>Uh oh! Looks like you got lost in the
                <br/>
                <span>Caveman Era!</span>
            </p>
            <p>The Page you requested could not be found</p>
            <p>Don't Worry and Return Back Home </p>
            <Link to='/'>
                <button className={classes.Button}>
                        Back Home 
                </button>
            </Link>
        </div>
    );
}


export default ErrorPage;