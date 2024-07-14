import { useState } from 'react'
import { NotesBoxRow } from './NotesBoxRow'
import { ChordsBox } from './ChordsBox'

export const NotesBox = () => {
  const [chord, setChord] = useState('A')
  return (
    <div className="notesbox-container">
      <NotesBoxRow setChord={setChord} />
      <ChordsBox chord={chord} />
    </div>
  )
}
