import { ChordsBoxItem } from "./ChordsBoxItem";

interface ChordsBoxProps {
  chord: string;
}

export const ChordsBox: React.FC<ChordsBoxProps> = ({ chord }) => {
  const chords = {
    "A": ["A", "Am", "Ab", "Abm", "Asharp", "Asharpm", "Adim", "Asharpdim", "A7", "Aaug", "Amaj7", "Asharpaug"],
    "B": ["B", "Bm", "Bb", "Bbm", "Bsharp", "Bsharpm", "Bdim", "Bsharpdim", "B7", "Baug", "Bmaj7", "Bsharpaug"],
    "C": ["C", "Cm", "Cb", "Cbm", "Csharp", "Csharpm", "Cdim", "Csharpdim", "C7", "Caug", "Cmaj7", "Csharpaug"],
    "D": ["D", "Dm", "Db", "Dbm", "Dsharp", "Dsharpm", "Ddim", "Dsharpdim", "D7", "Daug", "Dmaj7", "Dsharpaug"],
    "E": ["E", "Em", "Eb", "Ebm", "Edim", "E7", "Eaug", "Emaj7"],
    "F": ["F", "Fm", "Fb", "Fbm", "Fsharp", "Fsharpm", "Fdim", "Fsharpdim", "F7", "Faug", "Fmaj7", "Fsharpaug"],
    "G": ["G", "Gm", "Gb", "Gbm", "Gsharp", "Gsharpm", "Gdim", "Gsharpdim", "G7", "Gaug", "Gmaj7", "Gsharpaug"]
  };

  const chordArray = chords[chord as keyof typeof chords] || [];

  return (
    <div className="chords-container">
      {chordArray.map((chordItem: string, index: number) => (
        <ChordsBoxItem key={index} note={chord} chord={chordItem} />
      ))}
    </div>
  );
};