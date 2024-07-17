import { ChordsBoxItem } from './ChordsBoxItem'
import { useEffect, useState } from 'react'
import { chordsv2 } from '../utils/chordsab'
import '../styles/ChordsBox.css'


interface ChordsBoxProps {
  chord: string
  lang: string
}

export const ChordsBox = ({ chord, lang }: ChordsBoxProps) => {
  const [chords, setChords] = useState<Record<string, string[][]>>({})

  useEffect(() => {
    const otroobjeto: Record<string, string[][]> = {}
    
    Object.keys(chordsv2).forEach((e) => {
      otroobjeto[e] = chordsv2[e as keyof typeof chordsv2].map((e) => e)
    })
   
    setChords(otroobjeto)
  }, [lang])

  const chordArray = chords[chord as keyof typeof chords] || []
  console.log(chordArray)
  return (
    <div className="chords-container">
      {chordArray.map((chordItem, index) => {
        return (
          <ChordsBoxItem
            key={index}
            note={chord}
            chord={lang == 'B' ? chordItem[0] : chordItem[1]}
            photosrc={chordItem[1]}
          />
        )
      })}
    </div>
  )
}
