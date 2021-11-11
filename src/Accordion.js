import { useState } from "react"

export function Accordion() {

  const [ isToggled, setIsToggled ] = useState(false)

  return (
    <div>
      { isToggled ?
        <h3>Show stuff</h3>
        : <h3>Stuff Stuff Stuff Stuff Stuff Stuff</h3>
      }
      <button
        onClick={() => setIsToggled(!isToggled)}
      >Toggle</button>
    </div>
  )
}