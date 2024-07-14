interface ChordsBoxItemProp {
  note: string
  chord: string
}

export const ChordsBoxItem = ({ chord }: ChordsBoxItemProp) => {
  return (
    <div className="chorditem-container">
      <div className="chorditem-header">{chord}</div>
      <div className="chorditem-img">
        <img
          src={`./notes/${chord[0].toLowerCase()}/${chord}.png`}
          alt={`${chord} chord`}
        />
      </div>
    </div>
  )
}
/**
 * 
 * let acordes = {
    "A": ["A", "Am", "Ab", "Abm", "A#", "A#m", "Adim", "A#dim", "A7", "Aaug", "Amaj7", "A#aug"],
    "B": ["B", "Bm", "Bb", "Bbm", "B#", "B#m", "Bdim", "B#dim", "B7", "Baug", "Bmaj7", "B#aug"]
    "C": ["C", "Cm", "Cb", "Cbm", "C#", "C#m", "Cdim", "C#dim", "C7", "Caug", "Cmaj7", "C#aug"],
    "D": ["D", "Dm", "Db", "Dbm", "D#", "D#m", "Ddim", "D#dim", "D7", "Daug", "Dmaj7", "D#aug"],
    "E": ["E", "Em", "Eb", "Ebm", "E#", "E#m", "Edim", "E#dim", "E7", "Eaug", "Emaj7", "E#aug"],
    "F": ["F", "Fm", "Fb", "Fbm", "F#", "F#m", "Fdim", "F#dim", "F7", "Faug", "Fmaj7", "F#aug"],
    "G": ["G", "Gm", "Gb", "Gbm", "G#", "G#m", "Gdim", "G#dim", "G7", "Gaug", "Gmaj7", "G#aug"],
};

 */
