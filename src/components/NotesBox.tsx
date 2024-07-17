import { useState } from 'react'
import { NotesBoxRow } from './NotesBoxRow'
import { ChordsBox } from './ChordsBox'
import '../styles/NotesBox.css'

interface NotesBoxProps {
  lang: string
}

export const NotesBox = ({lang}: NotesBoxProps) => {
  const [chord, setChord] = useState('none')


  return (
    <div className="notesbox-container">
      <NotesBoxRow setChord={setChord} lang={lang}/>
      <ChordsBox chord={chord} lang={lang}/>
    </div>
  )
}
