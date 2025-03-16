import {Form, FormGroup, Input, Label} from "reactstrap";
import {useState} from "react";
import ObsidianButton from "./ObsidianButton.tsx";
import SuccessCheck from "./SuccessCheck.tsx";
import EmailService from "../services/EmailService.ts";
import {useSanitizeEmail, useSanitizeInput, useSanitizePhone} from "../constants/Sanitize.ts";
import {
    EMAIL_REQUIRED, PHONE_REQUIRED, INVALID_EMAIL,
    INVALID_PHONE, EMAIL_EXISTS, UNEXPECTED_ERROR,
    FIRST_NAME_REQUIRED, LAST_NAME_REQUIRED, SERVICE_REQUIRED,
    COMPANY_REQUIRED, DISINFECTING, SHIPPING,
    FLOORS, JANITORIAL, SUBMIT_ESTIMATE, SUCCESSFUL_SUBMISSION
} from "../constants/Strings.ts";

const Estimates = () => {

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [emailAddress, setEmail] = useState<string>("");
    const [companyName, setCompanyName] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [serviceRequested, setServiceRequested] = useState<string[]>([]);
    const [additionalComments, setAdditionalComments] = useState<string>("");
    const [formErrors, setFormErrors] = useState<boolean[]>([]);
    const [displaySuccess, setDisplaySuccess] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<string>("");
    const [phoneError, setPhoneError] = useState<string>("");

    const handleInputChange = (setter: any, index: number, validator: any) => (e: any) => {
        const value = useSanitizeInput(e.target.value.trim());
        setter(value);

        if (validator && !validator(value)) {
            setFormErrors((prev) => {
                let errors = [...prev];
                errors[index] = true;
                return errors;
            });
        } else {
            setFormErrors((prev) => {
                let errors = [...prev];
                errors[index] = false;
                return errors;
            });
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        setEmailError("");
        setPhoneError("");

        let newFormErrors = [!firstName, !lastName, !companyName, !emailAddress, !phoneNumber, !serviceRequested];
        let hasError = newFormErrors.includes(true);

        if (!emailAddress) {
            newFormErrors[3] = true;
            setEmailError(EMAIL_REQUIRED);
            hasError = true;
        }

        if (emailAddress && !useSanitizeEmail(emailAddress)) {
            newFormErrors[3] = true;
            setEmailError(INVALID_EMAIL);
            hasError = true;
        }

        if (!phoneNumber) {
            newFormErrors[4] = true;
            setPhoneError(PHONE_REQUIRED);
            hasError = true;
        }

        if (phoneNumber && !useSanitizePhone(phoneNumber)) {
            newFormErrors[4] = true;
            setPhoneError(INVALID_PHONE);
            hasError = true;
        }

        if (serviceRequested.length === 0) {
            newFormErrors[5] = true;
            hasError = true;
        }

        setFormErrors(newFormErrors);

        if (!hasError) {
            try {
                const response = await EmailService.requestEstimate({
                    firstName,
                    lastName,
                    companyName,
                    emailAddress,
                    phoneNumber,
                    serviceRequested,
                    additionalComments
                });
                if (response.error) {
                    throw response.error;
                }
                alert(SUCCESSFUL_SUBMISSION);
                resetForm();
            } catch (error: any) {
                if (error.status === 409 || error.message.includes("duplicate key")) {
                    alert(EMAIL_EXISTS);
                } else {
                    alert(UNEXPECTED_ERROR);
                }
            }
        }
    };

    const resetForm = () => {
        setEmail("");
        setFirstName("");
        setLastName("");
        setCompanyName("");
        setPhoneNumber("");
        setServiceRequested([]);
        setAdditionalComments("");
        setFormErrors([]);
        setDisplaySuccess(false);
    };

    const selectService = (service: string) => {
        setServiceRequested((prevServices: string[]) =>
            prevServices.includes(service) ? prevServices.filter(s => s !== service) : [...prevServices, service]
        );
    };

    return (
        <div className={"tw-p-6 tw-relative"}>
            <div className={"tw-text-primary-black"}>
                <h2 className={"tw-font-poppins tw-font-bold tw-text-lg"}> Request an Estimate </h2>
                <p className={"tw-w-3/4 tw-py-3"}> Fill out the form below to request a free estimate, including your name, email, the services you are looking for, and an optional description/message. </p>
            </div>
            <hr className={"tw-text-primary-black"}/>
            <Form onSubmit={handleSubmit} className={"tw-text-xs tw-flex tw-flex-col tw-py-3 tw-font-poppins"}>
                <FormGroup className={"tw-flex tw-flex-col tw-gap-y-2"}>
                    <Label className={"tw-text-xs"}>
                        First Name: &nbsp;
                        <Input
                            value={firstName}
                            type={"text"}
                            placeholder={"First Name"}
                            onChange={handleInputChange(setFirstName, 0, null)}
                            style={{
                                fontSize:".55rem"
                            }}
                        />
                        {formErrors[0] && (
                            <p className={"tw-text-error tw-mb-0"}> {FIRST_NAME_REQUIRED} </p>
                        )}
                    </Label>
                    <Label className={"tw-text-xs"}>
                        Last Name: &nbsp;
                        <Input
                            value={lastName}
                            type={"text"}
                            placeholder={"Last Name"}
                            onChange={handleInputChange(setLastName, 1, null)}
                            style={{
                                fontSize:".55rem"
                            }}
                        />
                        {formErrors[1] && (
                            <p className={"tw-text-error tw-mb-0"}> {LAST_NAME_REQUIRED} </p>
                        )}
                    </Label>
                    <Label className={"tw-text-xs"}>
                        Company Name: &nbsp;
                        <Input
                            type={"text"}
                            value={companyName}
                            placeholder={"Company Name"}
                            onChange={handleInputChange(setCompanyName, 2, null)}
                            style={{
                                fontSize:".55rem"
                            }}
                        />
                        {formErrors[2] && (
                            <p className={"tw-text-error tw-mb-0"}> {COMPANY_REQUIRED} </p>
                        )}
                    </Label>
                    <Label className={"tw-text-xs"}>
                        Email: &nbsp;
                        <Input
                            type={"text"}
                            value={emailAddress}
                            placeholder={"Email Address"}
                            onChange={handleInputChange(setEmail, 3, useSanitizeEmail)}
                            style={{
                                fontSize:".55rem"
                            }}
                        />
                        {formErrors[3] && (
                            <p className={"tw-text-error tw-mb-0"}> {emailError} </p>
                        )}
                    </Label>
                    <Label className={"tw-text-xs"}>
                        Phone: &nbsp;
                        <Input
                            value={phoneNumber}
                            type={"tel"}
                            placeholder={"Phone Number"}
                            onChange={handleInputChange(setPhoneNumber, 4, useSanitizePhone)}
                            style={{
                                fontSize:".55rem"
                            }}
                        />
                        {formErrors[4] && (
                            <p className={"tw-text-error tw-mb-0"}> {phoneError} </p>
                        )}
                    </Label>
                    {/* Allow multiple selections for dropdown, change to checkbox */}
                    <Label className="tw-text-xs tw-bg-none tw-flex tw-flex-col">
                        Service(s) Requested: &nbsp;
                        <div className={"tw-grid tw-grid-cols-2"}>
                            <FormGroup check inline>
                                <Input
                                    className={"tw-text-xs"}
                                    type={"checkbox"}
                                    checked={serviceRequested.includes("Nightly Janitorial")}
                                    onChange={() => selectService('Nightly Janitorial')}
                                />
                                <Label check>{JANITORIAL}</Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Input
                                    className={"tw-text-xs"}
                                    type={"checkbox"}
                                    checked={serviceRequested.includes(FLOORS)}
                                    onChange={() => selectService( FLOORS)}
                                />
                                <Label check>{FLOORS}</Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Input
                                    className={"tw-text-xs"}
                                    type={"checkbox"}
                                    checked={serviceRequested.includes(SHIPPING)}
                                    onChange={() => selectService( SHIPPING)}/>
                                <Label check>{SHIPPING}</Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Input
                                    className={"tw-text-xs"}
                                    type={"checkbox"}
                                    checked={serviceRequested.includes(DISINFECTING)}
                                    onChange={() => selectService(DISINFECTING)}/>
                                <Label check>{DISINFECTING}</Label>
                            </FormGroup>
                        </div>
                        {formErrors[5] && (
                            <p className={"tw-text-error tw-mb-0"}> {SERVICE_REQUIRED} </p>
                        )}
                    </Label>
                    <Label className={"tw-flex tw-flex-col"}>
                        Additional Comments (Optional): &nbsp;
                        <textarea
                            className={"tw-border-[#ccc] tw-text-primary-black tw-border-b-2 tw-bg-[#fff] tw-text-xs"}
                            placeholder={"Anything else you'd like us to know?"}
                            onChange={(e) => setAdditionalComments(e.target.value)}
                        />
                    </Label>
                    <ObsidianButton
                        onClick={(e: any) => handleSubmit(e)}
                        type={"submit"}
                    >
                        {SUBMIT_ESTIMATE}
                    </ObsidianButton>
                </FormGroup>
            </Form>
            {displaySuccess &&
                <div className={"tw-fixed tw-top-1/4 tw-left-[33%] tw-bg-[#fff] tw-p-6 tw-border tw-border-primary-gray tw-rounded-lg"}>
                    <SuccessCheck/>
                    <p className={"tw-text-success tw-font-poppins tw-font-semibold"}>Estimate successfully submitted!</p>
                    <div className={"tw-w-full tw-flex tw-justify-center"}>
                        <ObsidianButton onClick={() => setDisplaySuccess(false)}> Close </ObsidianButton>
                    </div>
                </div>
            }
        </div>
    );
};

export default Estimates;