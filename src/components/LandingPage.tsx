import Stock from "../assets/images/CleaningStockImage.jpg";
import Office from "../assets/images/office.jpg";
import LoadingDock from "../assets/images/LoadingDock.jpg";
import StoreFront from "../assets/images/StoreFront.png";
import Lab from "../assets/images/Lab.jpg";
import {useNavigate} from "react-router";
import ObsidianButton from "./ObsidianButton.tsx";

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <>
        <div className={"tw-flex tw-flex-col tw-justify-between tw-h-full"}>
            <div className={"tw-relative"}>
                <img src={Stock} className={"tw-w-full tw-brightness-75"}/>
                <div className={"tw-absolute tw-left-10 xs:tw-top-7 md:tw-top-20 tw-font-poppins"}>
                    <h3 className={"tw-font-bold tw-w-3/5 tw-text-primary-white tw-pb-3 xs:tw-text-md"}> Professional Cleaning Service since 2019 </h3>
                    <ObsidianButton onClick={() => navigate("/Estimates")}> Get Started </ObsidianButton>
                </div>
            </div>
            <div className={"tw-flex tw-flex-row tw-py-3 tw-text-primary-dark-blue tw-font-poppins"}>
                <div className={"xs:tw-hidden md:tw-grid tw-grid-cols-2 tw-p-6 tw-text-xs"}>
                    <div className={"tw-flex tw-flex-col tw-items-center"}>
                        <p className={"tw-font-semibold tw-leading-tight"}>Offices</p>
                        <div
                            className={"tw-min-w-[5rem] tw-min-h-[5rem] tw-bg-gray-100 tw-flex tw-items-center tw-justify-center tw-rounded-lg"}>
                            <img src={Office} className={"tw-object-cover tw-w-full tw-h-full tw-p-2 tw-rounded-lg"} alt="Office"/>
                        </div>
                    </div>
                    <div className={"tw-flex tw-flex-col tw-items-center"}>
                        <p className={"tw-font-semibold tw-leading-tight"}>Receiving</p>
                        <div
                            className={"tw-min-w-[5rem] tw-min-h-[5rem] tw-bg-gray-100 tw-flex tw-items-center tw-justify-center"}>
                            <img src={LoadingDock} className={"tw-object-cover tw-w-full tw-h-full tw-p-2"} alt="Receiving"/>
                        </div>
                    </div>
                    <div className={"tw-flex tw-flex-col tw-items-center"}>
                        <div
                            className={"tw-min-w-[5rem] tw-min-h-[5rem] tw-bg-gray-100 tw-flex tw-items-center tw-justify-center"}>
                            <img src={Lab} className={"tw-object-cover tw-w-full tw-h-full tw-p-2"}
                                 alt="Laboratories"/>
                        </div>
                        <p className={"tw-text-[.65rem] tw-font-semibold tw-leading-tight"}>Laboratories</p>
                    </div>
                    <div className={"tw-flex tw-flex-col tw-items-center"}>
                        <div
                            className={"tw-min-w-[5rem] tw-min-h-[5rem] tw-bg-gray-100 tw-flex tw-items-center tw-justify-center"}>
                            <img src={StoreFront} className={"tw-object-cover tw-w-full tw-h-full tw-p-2"}
                                 alt="Retail Spaces"/>
                        </div>
                        <p className={"tw-text-[.65rem] tw-font-semibold tw-leading-tight"}>Commercial</p>
                    </div>
                </div>
                <div className={"tw-p-6 tw-flex tw-justify-center tw-flex-col tw-gap-y-3"}>
                    <h2 className={"tw-font-bold tw-text-sm"}> Keep Your Business Walkthrough Ready with Obsidian Cleaning!</h2>
                    <p className={"tw-text-xs"}> From office cleaning and janitorial services, to floor stripping and waxing, all the way to shipping and receiving garages, let Obsidian Cleaning
                        be your one stop shop to keep your business looking its best! Call today for a free estimate, or get an estimate below! Don't forget to check out
                        all of the services we offer!
                    </p>
                    <div className={"tw-w-full tw-flex md:tw-flex-col tw-gap-2 lg:tw-flex-row tw-justify-around tw-text-primary-white"}>
                        <ObsidianButton onClick={() => navigate("/Services")}>
                            Our Services
                        </ObsidianButton>
                        <ObsidianButton onClick={() => navigate("/Estimates")}>
                            Request an Estimate
                        </ObsidianButton>
                    </div>
                </div>
            </div>
            <div className={"xs:tw-flex md:tw-hidden tw-w-full tw-bg-primary-orange tw-p-3"}>
                <p className={"tw-text-md tw-text-center tw-p-0 tw-m-0"}>Call us today for a free estimate at
                   585-555-5555
                </p>
            </div>
        </div>
        </>
    );
};

export default LandingPage;