import useInput from "../hooks/use-input";

const notEmpty = (value) => value.trim() !== "";
const emailValidation = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    value: firstNameVal,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(notEmpty);
  const {
    value: lastNameVal,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetlastName,
  } = useInput(notEmpty);
  const {
    value: emailVal,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(emailValidation);

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }

    console.log(firstNameVal);
    console.log(lastNameVal);
    console.log(emailVal);

    resetEmail();
    resetFirstName();
    resetlastName();
  };

  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameVal}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className="error-text">Plase enter a name</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastNameVal}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">Plase enter a last name</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={emailVal}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="error-text">Plase enter a valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
