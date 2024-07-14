interface NoteBoxItemProp {
  text: string
  setChord: (chord:string) => void
}
export const NoteBoxItem = ({ text, setChord }: NoteBoxItemProp) => {
  return (
  <button 
      className="notebox"
      onClick={()=>{setChord(text)}}
      >{text}</button>
)
}
