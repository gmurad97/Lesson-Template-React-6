import classes from "./Logo.module.css";

const Logo = ({ image }) => {
    return (
        <div className={classes.logo}>
            <img className={classes.logoImg} src={image} alt="Logo Dark" />
        </div>
    );
}

export default Logo;