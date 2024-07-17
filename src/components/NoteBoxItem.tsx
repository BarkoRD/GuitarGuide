interface NoteBoxItemProp {
  text: string
  setChord: (chord:string) => void
  chordIndex: number
}
export const NoteBoxItem = ({ text, setChord, chordIndex }: NoteBoxItemProp) => {
  return (
  <button 
      className="notebox"
      onClick={()=>{setChord(chordIndex.toString())}}
      >{text}</button>
)
}
