import "./App.css";
import React, { Component } from "react";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import hookActions from "./actions/hookActions";
import Input from "./Input";

function reducer(state, action) {
  switch (action.type) {
    case "setSecretWord":
      return { ...state, secretWord: action.payload };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, { secretWord: null });

  const setSecretWord = (secretWord) =>
    dispatch({ type: "setSecretWord", payload: secretWord });

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  if (!state.secretWord) {
    return (
      <div className="container" data-test="spinner">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p>Loading secret word</p>
      </div>
    )
  }

  return (
    <div className="container" data-test="component-app">
      <h1>Jotto</h1>
      <Input secretWord={state.secretWord} />
      <Congrats success={false} />
      <GuessedWords
        guessedWords={[{ guessedWord: "roller", letterMatchCount: 3 }]}
      />
    </div>
  );
}

export default App;
