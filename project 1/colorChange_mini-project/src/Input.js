import react from "react";
import { MdClear } from "react-icons/md";
import colornames from "colornames";

const Input = ({
  colorValue,
  hexValue,
  isDarkText,
  setColorValue,
  setHexValue,
  setDarkText,
  handleClearBtn
}) => {
  return (
    <form className="inputForm" onSubmit={(e) => handleClearBtn(e)}>
      <input
        type="text"
        placeholder="Add color name"
        autoFocus
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value)
          setHexValue(colornames(e.target.value))
        }}
      />
      <button  type="submit" className="clear-btn-form">
        <MdClear />
      </button>

      <button
        type="button"
        className="form-btn"
        onClick={() => setDarkText(!isDarkText)}
      >
        Toggle Text color{" "}
      </button>
    </form>
  );
};

export default Input;
