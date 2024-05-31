import React from 'react';
import classes from './Feedback.module.css';

const Feedback = () => {
    return (
        <div className={classes.feedback}>
            <div className={classes.header}>
                <h1 className={classes.title}>We Value Your Feedback</h1>
                <p className={classes.subtitle}>Your thoughts and suggestions help us improve our services.</p>
            </div>
            <div className={classes.form}>
                <input className={classes.input} type="text" placeholder="Your Name" />
                <input className={classes.input} type="email" placeholder="Your Email" />
                <textarea className={classes.textarea} placeholder="Your Feedback"></textarea>
                <button className={classes.button}>Submit</button>
            </div>
        </div>
    );
}

export default Feedback;
