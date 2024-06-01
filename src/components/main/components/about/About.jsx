import classes from './About.module.css';

const About = () => {
    return (
        <div className={classes.about}>
            <div className={classes.aboutContent}>
                <p className={classes.aboutContentDescription}>
                    We are a team of passionate developers dedicated to delivering high-quality software solutions.
                </p>
                <div className={classes.aboutContentCards}>
                    <div className={classes.aboutContentCard}>
                        <h2 className={classes.aboutContentCardTitle}>Our Core Values</h2>
                        <p className={classes.aboutContentCardText}>
                            We prioritize integrity, ensure customer satisfaction, and foster teamwork in every project.
                        </p>
                    </div>
                    <div className={classes.aboutContentCard}>
                        <h2 className={classes.aboutContentCardTitle}>Our Mission</h2>
                        <p className={classes.aboutContentCardText}>
                            To innovate and provide top-notch software solutions that drive success and transformation.
                        </p>
                    </div>
                    <div className={classes.aboutContentCard}>
                        <h2 className={classes.aboutContentCardTitle}>Our Vision</h2>
                        <p className={classes.aboutContentCardText}>
                            To be a global leader in software development, shaping the future through technology and
                            innovation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;