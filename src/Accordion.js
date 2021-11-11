import { useState } from "react"

export function Accordion() {

  const [ isToggled, setIsToggled ] = useState(false)

  return (
    <div>
      <h3>
        { !isToggled ? 'Show stuff' : 'Stufff Stufff Stufff' }
      </h3>
      <button
        onClick={() => setIsToggled(!isToggled)}
      >Toggle</button>
    </div>
  )
}