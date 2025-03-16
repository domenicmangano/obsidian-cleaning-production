import Logo from "../assets/images/ObsidianNew.png";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhone } from "react-icons/fa";
import {Collapse, Nav, Navbar, NavbarToggler} from "reactstrap";
import {useState} from "react";

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleNav = () => {
        setMenuOpen(!menuOpen);
    };

    // const navigate = useNavigate();

    return (
        <Navbar
            className={"tw-w-full tw-z-1 tw-flex tw-flex-col tw-items-center tw-bg-primary-dark-blue tw-shadow-lg tw-relative"}>
            <div className={"tw-flex tw-w-full tw-items-start tw-justify-between"}>
                <img src={Logo} className={"tw-w-48 tw-p-2"} alt={'Obsidian Logo'}/>
                <div className={"tw-text-primary-white tw-h-full tw-font-poppins xs:tw-hidden md:tw-flex tw-justify-center tw-items-center tw-gap-x-6 tw-mt-3 tw-px-6"}>
                    <div className={"tw-flex tw-flex-col tw-items-start"}>
                        <div className={"tw-flex tw-text-sm tw-items-center"}>
                            <FaPhone className={"tw-fill-primary-orange"}/>
                            <div className={"tw-pl-1"}> Call Us! </div>
                        </div>
                        <p className={"tw-font-bold tw-text-sm"}>585-555-5555</p>
                    </div>
                    <div>
                        <div className={"tw-flex tw-text-sm tw-items-center"}>
                            <FaMapMarkerAlt className={"tw-fill-primary-orange"}/>
                            <div className={"tw-pl-1"}> Service Area </div>
                        </div>
                        <p className={"tw-font-bold tw-text-sm"}>Rochester, NY</p>
                    </div>
                </div>
                {window.innerWidth < 500 && (
                    <div className={"tw-p-3"}>
                        <NavbarToggler
                            style={{
                                position: "absolute",
                                right: "1rem",
                                top: "1rem",
                                filter: "brightness(0) invert(1)"
                            }}
                            onClick={toggleNav}
                            navbar
                        />
                        <Collapse isOpen={menuOpen} className={"tw-absolute tw-z-10 tw-bg-primary-white tw-border tw-border-primary-gray tw-shadow-lg tw-p-3 tw-pl-6 tw-rounded-lg tw-right-2 tw-mt-10"} navbar>
                            <Nav navbar className={"ms-auto tw-flex tw-flex-col tw-items-end tw-gap-y-2"}>
                                <a href={"/"}
                                   className={"hover:tw-border-b-2 hover:tw-border-b-primary-orange tw-text-md tw-text-primary-dark-blue tw-font-medium tw-no-underline"}>
                                    Home
                                </a>
                                <a href={"/Services"}
                                   className={"hover:tw-border-b-2 hover:tw-border-b-primary-orange tw-text-md tw-text-primary-dark-blue tw-font-medium  tw-no-underline"}>
                                    Services
                                </a>
                                <a href={"/Estimates"}
                                   className={"hover:tw-border-b-2 hover:tw-border-b-primary-orange tw-text-md tw-text-primary-dark-blue tw-font-medium  tw-no-underline"}>
                                    Get an Estimate
                                </a>
                                <a href={"/About"}
                                   className={"hover:tw-border-b-2 hover:tw-border-b-primary-orange tw-text-md tw-text-primary-dark-blue tw-font-medium  tw-no-underline"}>
                                    About
                                </a>
                            </Nav>
                        </Collapse>
                    </div>
                )}
            </div>
            <div className={"tw-bg-primary-dark-blue tw-w-full xs:tw-hidden md:tw-flex tw-justify-center"}>
                <div
                    className={"tw-flex tw-font-poppins tw-font-semibold tw-w-full tw-px-6 tw-gap-x-3 tw-items-center tw-text-xs tw-justify-between tw-p-2 tw-h-[2rem]"}>
                    <a href={"/"}
                       className={"hover:tw-border-b-2 hover:tw-border-b-primary-orange tw-text-[.75rem] tw-text-primary-white tw-no-underline"}>
                        Home
                    </a>
                    <a href={"/Services"}
                       className={"hover:tw-border-b-2 hover:tw-border-b-primary-orange tw-text-[.75rem] tw-text-primary-white tw-no-underline"}>
                        Services
                    </a>
                    <a href={"/Estimates"}
                       className={"hover:tw-border-b-2 hover:tw-border-b-primary-orange tw-text-[.75rem] tw-text-primary-white tw-no-underline"}>
                        Get an Estimate
                    </a>
                    <a href={"/About"}
                       className={"hover:tw-border-b-2 hover:tw-border-b-primary-orange tw-text-[.75rem] tw-text-primary-white tw-no-underline"}>
                        About
                    </a>
                    <a href={"/Gallery"}
                       className={"hover:tw-border-b-2 hover:tw-border-b-primary-orange tw-text-[.75rem] tw-text-primary-white tw-no-underline"}>
                        Gallery
                    </a>
                </div>
            </div>
        </Navbar>
    );
};

export default Navigation;