const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

type KeyboardProps = {
  disabled?: boolean
  activeLetters: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letter: string) => void
}

export default function Keyboard({ activeLetters, inactiveLetters, addGuessedLetter, disabled = false }: KeyboardProps) {
  const generalStyling = 'w-[100%] border-[3px] border-solid border-black aspect-square text-[2.5rem] uppercase p-2 font-bold enabled:cursor-pointer text-black enabled:hover:bg-blue-300 enabled:focus:bg-blue-300'
  const activeStyling = 'bg-blue-500 text-white'
  const inactiveStyling = 'disabled:opacity-30 disabled:active:bg-white disabled:active:text-black'
  
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(75px,_1fr))] gap-2">
      {KEYS.map(key => {
        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)
        return (
          <button 
            onClick={() => addGuessedLetter(key)}
            className={`${generalStyling} ${isActive ? activeStyling : ""} ${
              isInactive ? inactiveStyling : ""
            }`}
            disabled={isInactive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        )
      })}
    </div>
  )
}
