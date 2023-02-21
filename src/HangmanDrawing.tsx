const HEAD = (
    <div className="w-[80px] h-[80px] rounded-[100%] border-[10px] border-solid border-black absolute top-[50px] right-[-35px]"></div>
)

const BODY = (
    <div className="w-[10px] h-[100px] bg-black absolute top-[120px] right-0"></div>
)

const RIGHT_ARM = (
    <div className="w-[100px] h-[10px] bg-black absolute top-[150px] right-[-100px] rotate-[-30deg] origin-[left_bottom]"></div>
)

const LEFT_ARM = (
    <div className="w-[100px] h-[10px] bg-black absolute top-[150px] right-[10px] rotate-[30deg] origin-[right_bottom]"></div>
)

const RIGHT_LEG = (
    <div className="w-[100px] h-[10px] bg-black absolute top-[210px] right-[-90px] rotate-[60deg] origin-[left_bottom]"></div>
)

const LEFT_LEG = (
    <div className="w-[100px] h-[10px] bg-black absolute top-[210px] right-0 rotate-[-60deg] origin-[right_bottom]"></div>
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
    numberOfGuesses: number
}

export default function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div className="relative">
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div className="h-[50px] w-[10px] bg-black absolute top-0 right-0"></div>
        <div className="h-[10px] w-[200px] bg-black ml-[120px]"></div>
        <div className="h-[400px] w-[10px] bg-black ml-[120px]"></div>
        <div className="h-[10px] w-[250px] bg-black"></div>
    </div>
  )
}
