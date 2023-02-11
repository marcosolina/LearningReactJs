import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChagedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChagedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.trim().indexOf("@") > -1);

  const formIsValid = enteredNameIsValid && enteredEmailIsValid;

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);

    //nameInputRef.current.value = ""; // NOT elegant because you are directly manipulating the DOM. We should let React manipulating the DOM
    nameReset();
    emailReset();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChagedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">Your Email</label>
        <input
          type="email"
          id="name"
          onChange={emailChagedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && <p className="error-text">Wrong email format</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
