import { useState } from "react";
import ErrorMessage from "../ErrorMessage";

const InputAreaContainer = ({
  setText,
  text,
  instaCharRemaining,
  fbCharRemaining,
}) => {
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (event) => {
    let currentText = event.target.value;

    // Text limit validation
    if (currentText.length > 2200) {
      setErrorMsg("Text limit exceeded");
      // return;
    }

    // Empty text validation
    if (currentText.length === 0) {
      setErrorMsg("Please enter some text");
    }

    if (instaCharRemaining == 0) {
      setErrorMsg("Instagram character limit reached");
      // return;
    }

    if (fbCharRemaining == 0) {
      setErrorMsg("Facebook character limit reached");
      // return;
    }

    // @ validation
    if (currentText.includes("@")) {
      alert("@ is not allowed"); // ✅ popup
      currentText = currentText.replace(/@/g, ""); // ✅ remove all @
      setErrorMsg("@ is not allowed");
    } else {
      setErrorMsg("");
    }
    setText(currentText);
  };

  return (
    <>
      <textarea
        className="textarea"
        value={text}
        onChange={handleChange} // ✅ validate on change
        placeholder="Enter your text"
      />
      {errorMsg && <ErrorMessage errorMsg={errorMsg} />}
    </>
  );
};

export default InputAreaContainer;
