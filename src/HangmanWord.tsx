type HangmanWordProps = {
  guessedLetters: string[],
  wordToGuess: string,
  reveal?: boolean
}

export default function HangmanWord({guessedLetters, wordToGuess, reveal = false}: HangmanWordProps) {
  return (
    <div className="flex gap-[.25em] text-[6rem] font-bold uppercase font-mono">
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }} key={index}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
      {/* FIX: */}
      {/* {wordToGuess.split("").map((letter, index) => 
        <span key={index} className="border-b-[.1em] border-solid border-black">
          <span className={guessedLetters.includes(letter) || reveal ? "visible text-black" : "invisible" &&
            !guessedLetters.includes(letter) && reveal ? "text-red-500" : "text-black"
        }>
            {letter}
            </span>
        </span>
      )} */}

    </div>
  )
}
