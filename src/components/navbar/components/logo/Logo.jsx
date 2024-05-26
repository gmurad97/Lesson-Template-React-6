import "./Logo.css";

const Logo = ({ image }) => {
    return (
        <div className="logo">
            <img className="logo__img" src={image} alt="Logo" />
        </div>
    );
}

export default Logo;