import { A } from './NotesComponents/a/A.tsx'
import { Am } from './NotesComponents/a/Am.tsx'
import { Ab } from './NotesComponents/a/Ab.tsx'
import { Abm } from './NotesComponents/a/Abm.tsx'
import { Asharp } from './NotesComponents/a/Asharp.tsx'
import { Asharpm } from './NotesComponents/a/Asharpm.tsx'
import { Adim } from './NotesComponents/a/Adim.tsx'
import { Asharpdim } from './NotesComponents/a/Asharpdim.tsx'
import { A7 } from './NotesComponents/a/A7.tsx'
import { Aaug } from './NotesComponents/a/Aaug.tsx'
import { Amaj7 } from './NotesComponents/a/Amaj7.tsx'
import { Asharpaug } from './NotesComponents/a/Asharpaug.tsx'

import { B } from './NotesComponents/b/B.tsx'
import { Bm } from './NotesComponents/b/Bm.tsx'
import { Bb } from './NotesComponents/b/Bb.tsx'
import { Bbm } from './NotesComponents/b/Bbm.tsx'
import { Bdim } from './NotesComponents/b/Bdim.tsx'
import { B7 } from './NotesComponents/b/B7.tsx'
import { Baug } from './NotesComponents/b/Baug.tsx'
import { Bmaj7 } from './NotesComponents/b/Bmaj7.tsx'

import { C } from './NotesComponents/c/C.tsx'
import { Cm } from './NotesComponents/c/Cm.tsx'
import { Csharp } from './NotesComponents/c/Csharp.tsx'
import { Csharpm } from './NotesComponents/c/Csharpm.tsx'
import { Cdim } from './NotesComponents/c/Cdim.tsx'
import { Csharpdim } from './NotesComponents/c/Csharpdim.tsx'
import { C7 } from './NotesComponents/c/C7.tsx'
import { Caug } from './NotesComponents/c/Caug.tsx'
import { Cmaj7 } from './NotesComponents/c/Cmaj7.tsx'
import { Csharpaug } from './NotesComponents/c/Csharpaug.tsx'

import { D } from './NotesComponents/d/D.tsx'
import { Dm } from './NotesComponents/d/Dm.tsx'
import { Db } from './NotesComponents/d/Db.tsx'
import { Dbm } from './NotesComponents/d/Dbm.tsx'
import { Dsharp } from './NotesComponents/d/Dsharp.tsx'
import { Dsharpm } from './NotesComponents/d/Dsharpm.tsx'
import { Ddim } from './NotesComponents/d/Ddim.tsx'
import { Dsharpdim } from './NotesComponents/d/Dsharpdim.tsx'
import { D7 } from './NotesComponents/d/D7.tsx'
import { Daug } from './NotesComponents/d/Daug.tsx'
import { Dmaj7 } from './NotesComponents/d/Dmaj7.tsx'
import { Dsharpaug } from './NotesComponents/d/Dsharpaug.tsx'

import { E } from './NotesComponents/e/E.tsx'
import { Em } from './NotesComponents/e/Em.tsx'
import { Eb } from './NotesComponents/e/Eb.tsx'
import { Ebm } from './NotesComponents/e/Ebm.tsx'
import { Edim } from './NotesComponents/e/Edim.tsx'
import { E7 } from './NotesComponents/e/E7.tsx'
import { Eaug } from './NotesComponents/e/Eaug.tsx'
import { Emaj7 } from './NotesComponents/e/Emaj7.tsx'

import { F } from './NotesComponents/f/F.tsx'
import { Fm } from './NotesComponents/f/Fm.tsx'
import { Fsharp } from './NotesComponents/f/Fsharp.tsx'
import { Fsharpm } from './NotesComponents/f/Fsharpm.tsx'
import { Fdim } from './NotesComponents/f/Fdim.tsx'
import { Fsharpdim } from './NotesComponents/f/Fsharpdim.tsx'
import { F7 } from './NotesComponents/f/F7.tsx'
import { Faug } from './NotesComponents/f/Faug.tsx'
import { Fmaj7 } from './NotesComponents/f/Fmaj7.tsx'
import { Fsharpaug } from './NotesComponents/f/Fsharpaug.tsx'

import { G } from './NotesComponents/g/G.tsx'
import { Gm } from './NotesComponents/g/Gm.tsx'
import { Gb } from './NotesComponents/g/Gb.tsx'
import { Gbm } from './NotesComponents/g/Gbm.tsx'
import { Gsharp } from './NotesComponents/g/Gsharp.tsx'
import { Gsharpm } from './NotesComponents/g/Gsharpm.tsx'
import { Gdim } from './NotesComponents/g/Gdim.tsx'
import { Gsharpdim } from './NotesComponents/g/Gsharpdim.tsx'
import { G7 } from './NotesComponents/g/G7.tsx'
import { Gaug } from './NotesComponents/g/Gaug.tsx'
import { Gmaj7 } from './NotesComponents/g/Gmaj7.tsx'
import { Gsharpaug } from './NotesComponents/g/Gsharpaug.tsx'

interface ChordsBoxItemProp {
  note: string
  chord: string
  photosrc: string
}

export const ChordsBoxItem = ({ chord, photosrc }: ChordsBoxItemProp) => {
  const svgComponents: { [key: string]: React.FC } = {
    A: A,
    Am: Am,
    Ab: Ab,
    Abm: Abm,
    Asharp: Asharp,
    Asharpm: Asharpm,
    Adim: Adim,
    Asharpdim: Asharpdim,
    A7: A7,
    Aaug: Aaug,
    Amaj7: Amaj7,
    Asharpaug: Asharpaug,
    B: B,
    Bm: Bm,
    Bb: Bb,
    Bbm: Bbm,
    Bdim: Bdim,
    B7: B7,
    Baug: Baug,
    Bmaj7: Bmaj7,
    C: C,
    Cm: Cm,
    Csharp: Csharp,
    Csharpm: Csharpm,
    Cdim: Cdim,
    Csharpdim: Csharpdim,
    C7: C7,
    Caug: Caug,
    Cmaj7: Cmaj7,
    Csharpaug: Csharpaug,
    D: D,
    Dm: Dm,
    Db: Db,
    Dbm: Dbm,
    Dsharp: Dsharp,
    Dsharpm: Dsharpm,
    Ddim: Ddim,
    Dsharpdim: Dsharpdim,
    D7: D7,
    Daug: Daug,
    Dmaj7: Dmaj7,
    Dsharpaug: Dsharpaug,
    E: E,
    Em: Em,
    Eb: Eb,
    Ebm: Ebm,
    Edim: Edim,
    E7: E7,
    Eaug: Eaug,
    Emaj7: Emaj7,
    F: F,
    Fm: Fm,
    Fsharp: Fsharp,
    Fsharpm: Fsharpm,
    Fdim: Fdim,
    Fsharpdim: Fsharpdim,
    F7: F7,
    Faug: Faug,
    Fmaj7: Fmaj7,
    Fsharpaug: Fsharpaug,
    G: G,
    Gm: Gm,
    Gb: Gb,
    Gbm: Gbm,
    Gsharp: Gsharp,
    Gsharpm: Gsharpm,
    Gdim: Gdim,
    Gsharpdim: Gsharpdim,
    G7: G7,
    Gaug: Gaug,
    Gmaj7: Gmaj7,
    Gsharpaug: Gsharpaug,
  }

  const DynamicSvg = svgComponents[photosrc]
  return (
    <div className="chorditem-container">
      <div className="chorditem-header">{chord}</div>
      <div className="chorditem-img">{DynamicSvg && <DynamicSvg />}</div>
    </div>
  )
}
