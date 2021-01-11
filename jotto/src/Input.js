import React from "react";
import PropTypes from "prop-types";

const Input = ({secretWord}) => {

    const [currentGuess,setCurrentGuess] = React.useState("");

    return (
        <div data-test="input-component">
        <form className="form-inline">
            <input
            data-test="input-box"
            className="mb-2 mx-sm-3"
            type="text"
            placeholder="enter guess"
            value={currentGuess}
            onChange={(e)=>setCurrentGuess(e.target.value)}
            />
            <button
            data-test="submit-button"
            className="btn btn-primary mb-2"
            // TODO: 1) Update guessedWords Context.
            // TODO: 2) Check against secretWord and optionally update success context
            onClick={(e)=>{e.preventDefault();
            setCurrentGuess("")}
            }
            >
            Submit
            </button>
        </form>
        </div>
    )
}

Input.propTypes = {
    secretWord: PropTypes.string.isRequired,
};

export default Input;