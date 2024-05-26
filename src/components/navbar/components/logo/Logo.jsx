import classes from "./Logo.module.css";

const Logo = ({ image }) => {
    return (
        <div className={classes.logo}>
            <img className={classes.logoImg} src={image} alt="Logo" />
        </div>
    );
}

export default Logo;