import { useState } from 'react'
import '../styles/App.css'
import { Header } from './Header'
import { NotesBox } from './NotesBox'

function App() {
  const [lang, setLang] = useState('A')

  return (
    <>
      <Header setLang={setLang} lang={lang}/>
      <NotesBox lang={lang}/>
    </>
  )
}

export default App
