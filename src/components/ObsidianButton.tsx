import PropTypes from "prop-types";

const ObsidianButton = (props: {
    onClick: any,
    type?: "submit" | "reset" | "button",
    style?: string,
    children: any,
}) => {
    const {
        onClick,
        type,
        style,
        children
    } = props;

    return (
        <button onClick={onClick} type={type} className={`tw-rounded-full tw-shadow-lg tw-bg-primary-orange hover:tw-bg-[#D35A04FF] tw-px-3 tw-py-1 tw-text-primary-white tw-text-sm ${style}`}>
            {children}
        </button>
    );
};

ObsidianButton.propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.string,
    children: PropTypes.string,
    style: PropTypes.string
};

export default ObsidianButton;