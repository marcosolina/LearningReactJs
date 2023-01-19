import { useState, useRef } from 'react';
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const eneredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (eneredName.trim().length === 0 || eneredName.trim().lenth === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }

    props.onAddUser(eneredName, enteredUserAge);
    nameInputRef.current.value = ''; // Rarely use ref to manipulate dom.
    ageInputRef.current.value = ''; // It's ok for this example because it is just an input text
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
