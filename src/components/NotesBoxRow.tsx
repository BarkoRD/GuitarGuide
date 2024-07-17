import { useEffect, useState } from 'react'
import { NoteBoxItem } from './NoteBoxItem'
import { notesv2 } from '../utils/chordsab'

interface NoteBoxRowProps {
  setChord: (chord: string) => void
  lang: string
}

export const NotesBoxRow = ({ setChord, lang }: NoteBoxRowProps) => {
  const [notes, setNotes] = useState(notesv2.map((e) => e[0]))

  useEffect(() => {
    if (lang === 'A') setNotes(notesv2.map((e) => e[0]))
    else setNotes(notesv2.map((e) => e[1]))
  }, [lang])

  
  return (
    <div className="noteboxheader">
      {notes.map((e,i) => (
        <NoteBoxItem key={e} text={e} setChord={setChord} chordIndex={i}/>
      ))}
    </div>
  )
}
  // const [notes, setNotes] = useState<string[]>([])

// useEffect(() => {
  //   const importNote = async () => {
  //     const { notes } = await import(`../utils/chords${lang}.ts`)
  //     setNotes(notes)
  //   }

  //   importNote()
  // }, [lang])