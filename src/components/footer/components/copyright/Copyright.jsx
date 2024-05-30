import classes from "./Copyright.module.css";

const Copyright = () => {
    return (
        <div className={classes.copyright}>
            <h1 className={classes.copyrightTitle}>
                Copyright &copy; 2024 Codewriting & Design by <a target="_blank" className={classes.copyrightLink} href="https://github.com/gmurad97">gmurad97</a>
            </h1>
        </div>
    );
}

export default Copyright;