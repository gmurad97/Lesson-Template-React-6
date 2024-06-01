import classes from "./Button.module.css";

const Button = ({ width, height, onClick, children }) => {
    return (
        <button
            className={classes.button}
            style={{ "height": height, "width": width }}
            onClick={() => onClick()}
        >
            {children}
        </button>
    );
}

export default Button;