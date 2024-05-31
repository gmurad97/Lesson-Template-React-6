import React from 'react';
import classes from './About.module.css';

const About = () => {
    return (
        <div className={classes.about}>
            <div className={classes.hero}>
                <h1 className={classes.title}>About Us</h1>
                <p className={classes.subtitle}>Innovating the future of technology</p>
            </div>
            <div className={classes.content}>
                <p className={classes.description}>
                    We are a team of passionate developers dedicated to delivering high-quality software solutions.
                </p>
                <div className={classes.cards}>
                    <div className={classes.card}>
                        <h2 className={classes.cardTitle}>Our Mission</h2>
                        <p className={classes.cardText}>
                            To innovate and excel in the field of technology.
                        </p>
                    </div>
                    <div className={classes.card}>
                        <h2 className={classes.cardTitle}>Our Values</h2>
                        <p className={classes.cardText}>
                            Integrity, Customer Satisfaction, Teamwork.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
