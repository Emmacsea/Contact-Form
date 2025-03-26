import { useState } from "react";
import PropTypes from "prop-types";
// import checkboxsel from "../assets/assets/images/icon-checkbox-check.svg";
// import radiosel from "../assets/assets/images/icon-radio-selected.svg";
import success from "../assets/assets/images/icon-success-check.svg";

export const ContactForm = ({
  firstname,
  lastname,
  emailaddress,
  message,
  query,
  consent,
  onChangeFirstname,
  onChangeLastname,
  onChangeEmailAddress,
  onChangeMessage,
  onChangeQuery,
  onChangeConsent,
  onSubmitDetails,
}) => {
  const [error, setError] = useState({});
  const [successdisp, setSuccessDisp] = useState(false)

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const submitDetails = (e) => {
    e.preventDefault();
    const newError = {};

    if (!firstname) newError.firstname = `This field is required`;
    if (!lastname) newError.lastname = `This field is required`;
    if (!message) newError.message = `This field is required`;
    if (!query) newError.query = (`Please select a query type`);
    if (!consent) newError.consent = (`To submit this form, please consent to being contacted`);

    if (!emailaddress || !validateEmail(emailaddress))
      newError.emailaddress = `Please enter a valid email address`;

    setError(newError);
    if (Object.keys(newError).length === 0) {
      setSuccessDisp(true);
      onSubmitDetails();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-primary-green200 font-body">
      {successdisp && (
        <div className="bg-neutral-grey900 px-5 flex flex-col justify-center items-start rounded-md h-16">
        <div className="flex items-center gap-2">
          <div><img className="w-4" src={success} alt="" /></div>
          <p className="text-primary-green200 font-medium text-lg">Message Sent!</p>
        </div>
        <p className="text-primary-green200 font-light text-xs">Thanks for completing this form. We&apos;ll be in touch soon!</p>
      </div>
      )}

      <div className="flex flex-col items-start md:py-4 sm:py-2 px-6 bg-neutral-white rounded-md w-auto h-auto">
        <h2 className="text-neutral-grey900 font-bold md:text-2xl sm:text-xl mb-2">
          Contact Us
        </h2>

        <form action="" onSubmit={submitDetails} method="get">
          <div className="flex flex-col space-y-1 w-full">
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-3 w-full">
              <div className="flex flex-col items-start w-full">
                <label className="lab" htmlFor="">
                  First Name *
                </label>
                <div className="flex flex-col">
                  <input
                    className={`inp ${
                      error.firstname
                        ? "border-primary-red"
                        : "border-neutral-grey500"
                    }`}
                    type="text"
                    value={firstname}
                    onChange={onChangeFirstname}
                  />
                  {error.firstname && (
                    <p className="text-primary-red text-sm font-medium">
                      {error.firstname}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col items-start w-full">
                <label className="lab" htmlFor="">
                  Last Name *
                </label>
                <div className="flex flex-col">
                  <input
                    className={`inp ${
                      error.lastname
                        ? "border-primary-red"
                        : "border-neutral-grey500"
                    }`}
                    type="text"
                    value={lastname}
                    onChange={onChangeLastname}
                  />
                  {error.lastname && (
                    <p className="text-primary-red text-sm font-medium">
                      {error.lastname}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start w-full">
              <label className="lab" htmlFor="">
                Email Address *
              </label>
              <div className="flex flex-col w-full">
                <input
                  className={`inp ${
                    error.emailaddress
                      ? "border-primary-red"
                      : "border-neutral-grey500"
                  }`}
                  type="text"
                  value={emailaddress}
                  onChange={onChangeEmailAddress}
                />
                {error.emailaddress && (
                  <p className="text-primary-red text-sm font-medium">
                    {error.emailaddress}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col items-start w-full">
              <label className="lab" htmlFor="">
                Query Type *
              </label>
              <div className="flex gap-3 items-center w-full">
                <div className="quer flex space-x-3 items-center px-5 h-10 border-2 border-neutral-grey500 rounded-md bg-transparent w-1/2 ">
                  <input className="querytype" type="radio" name="query" value="General Enquiry" onChange={onChangeQuery} checked={query === "General Enquiry"} />
                  <label className="typ" htmlFor="">
                    General Enquiry
                  </label>
                </div>

                <div className="quer flex space-x-3 items-center px-5 h-10 border-2 border-neutral-grey500 rounded-md bg-transparent w-1/2">
                <input className="querytype" type="radio" name="query" value="Support Request" onChange={onChangeQuery} checked={query === "Support Request"} />
                  <label className="typ" htmlFor="">
                    Support Request
                  </label>
                </div>
              </div>
              {error.query && (<p className="text-primary-red text-sm font-medium">{error.query}</p>)}
            </div>

            <div className="flex flex-col items-start w-full">
              <label className="lab" htmlFor="">
                Message *
              </label>
              <div className="flex flex-col w-full">
                <textarea
                  className={`textarea ${
                    error.message
                      ? "border-primary-red"
                      : "border-neutral-grey500"
                  }`}
                  name=""
                  value={message}
                  onChange={onChangeMessage}
                  id=""
                  cols="46"
                  rows="3"
                ></textarea>
                {error.message && (
                  <p className="text-primary-red text-sm font-medium">
                    {error.message}
                  </p>
                )}
              </div>
            </div>

            <div>
            <div className="flex gap-3 items-center">
              <input
                className="accent-primary-green600 text-neutral-white"
                type="checkbox"
                checked={consent}
                onChange={onChangeConsent}
              />
              <p className="text-neutral-grey900 text-base font-semibold ">
                I consent to being contacted by the team *
              </p>
            </div>
            {error.consent && (<p className="text-primary-red text-sm font-medium">{error.consent}</p>)}
            </div>

            <div>
              <button
                className="bg-primary-green600 hover:bg-green-950 text-center text-neutral-white w-full rounded-md text-lg font-medium py-3"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
ContactForm.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  emailaddress: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
  consent: PropTypes.bool.isRequired,
  onChangeFirstname: PropTypes.func.isRequired,
  onChangeLastname: PropTypes.func.isRequired,
  onChangeEmailAddress: PropTypes.func.isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  onChangeQuery: PropTypes.func.isRequired,
  onChangeConsent: PropTypes.func.isRequired,
  onSubmitDetails: PropTypes.func.isRequired,
};
