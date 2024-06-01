import classes from "./Map.module.css";

const Map = () => {
    return (
        <div className={classes.map}>
            <iframe
                className={classes.mapIframe}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.6155032113916!2d49.95092637560839!3d40.37304917144661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40306357e5b177ef%3A0x7040e87a3661bcda!2z0JDQt9C4INCQ0YHQu9Cw0L3QvtCy!5e0!3m2!1sru!2saz!4v1717122736350!5m2!1sru!2saz"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
}

export default Map;