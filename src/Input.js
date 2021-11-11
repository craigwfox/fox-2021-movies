import { useState } from "react";
import PropTypes from 'prop-types';

export function Input({placeholder = 'input'}) {

  const [ inputValue, setInputValue ] = useState("")

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        // Basic example
        // onChange={ (e) => setInputValue(e.target.value) }

        // "Complex" example
        onChange={
          (e) => {
            if(!e.target.value.includes("t")) {
              setInputValue(e.target.value)
            }
          }
        }
      />

      {inputValue &&
        <h3>{ inputValue }</h3>
      }
    </div>

  )
}

Input.propTypes = {
  placeholder: PropTypes.string,
}
