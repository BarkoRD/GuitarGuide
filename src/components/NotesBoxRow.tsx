import { NoteBoxItem } from './NoteBoxItem'

interface NoteBoxRowProps {
  setChord: (chord: string) => void
}

export const NotesBoxRow = ({setChord}: NoteBoxRowProps) => {
  const notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
  return (
    <div className="noteboxheader">
      {notes.map((e) => (
        <NoteBoxItem text={e} setChord={setChord}/>
      ))}
    </div>
  )
}
