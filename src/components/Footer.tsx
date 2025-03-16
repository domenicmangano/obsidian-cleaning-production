import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhone } from "react-icons/fa";
import { FaMailBulk} from "react-icons/fa";
import { FaPerson} from "react-icons/fa6";
import ObsidianButton from "./ObsidianButton.tsx";

const Footer = () => {
    return (
        <div className={"xs:tw-mt-0 md:tw-mt-10 tw-bg-primary-dark-blue tw-text-primary-white tw-w-full tw-p-6"}>
            <div className={"tw-grid tw-grid-cols-3 tw-gap-x-4"}>
                <div>
                    <div className={"tw-flex tw-gap-x-2"}>
                        <h4 className={"tw-font-semibold tw-text-sm tw-font-poppins"}>About Us</h4>
                        <FaPerson className={"tw-fill-primary-orange"}/>
                    </div>
                    <div>
                        <p className={"tw-leading-tight"}>Obsidian is a local, family-owned company since 2020. Click below to learn more!</p>
                    </div>
                    <ObsidianButton onClick={() => (window.location.href = "About")}>
                        About Us
                    </ObsidianButton>
                </div>
                <div className={"tw-col-span-1"}>
                    <div className={"tw-flex tw-gap-x-2"}>
                        <h4 className={"tw-font-semibold tw-text-sm tw-font-poppins"}>Address</h4>
                        <FaMapMarkerAlt className={"tw-fill-primary-orange"}/>
                    </div>
                    <div className={"tw-text-sm"}>
                        <p className={"tw-leading-tight"}>
                            Obsidian Cleaning Service <br/>
                            Rochester, NY 14609
                        </p>
                    </div>
                </div>
                <div className={"tw-flex tw-flex-col tw-gap-y-2"}>
                    <div>
                        <div className={"tw-flex  tw-gap-x-2"}>
                            <h4 className={"tw-font-semibold tw-text-sm tw-font-poppins"}>Phone</h4>
                            <FaPhone className={"tw-fill-primary-orange"}/>
                        </div>
                        <div>
                            <p>585-555-5555</p>
                        </div>
                    </div>
                    <div>
                        <div className={"tw-flex tw-gap-x-2"}>
                            <h4 className={"tw-font-semibold tw-text-sm tw-font-poppins"}>Email</h4>
                            <FaMailBulk className={"tw-fill-primary-orange"}/>
                        </div>
                        <div>
                            <p>ObsidianCleaning@outlook.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <p className={"tw-text-center tw-text-xs"}> &copy; All Rights Reserved. Obsidian Cleaning Service.</p>
        </div>
    );
};

export default Footer;