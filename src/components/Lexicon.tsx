import type { PropsWithChildren } from "react";

const lexicon = {
  Abutment: 'Verbindungsteil zwischen Implantat und Zahnersatz (z. B. Krone). Es sitzt wie ein kleiner Pfeiler auf dem Implantat.',
  'Augmentation (Knochenaufbau)': 'Behandlung zum Aufbau von Knochen, wenn für ein Implantat zu wenig Kieferknochen vorhanden ist.',
  'Bleeding on Probing (BOP)': 'Blutung bei der Messung der Zahnfleischtaschen. Ein wichtiger Hinweis auf eine aktive Entzündung.',
  Gingiva: 'Das medizinische Wort für Zahnfleisch.',
  Gingivitis: 'Frühe Zahnfleischentzündung. Sie betrifft nur das Zahnfleisch und ist vollständig heilbar, wenn rechtzeitig behandelt.',
  Implantat: 'Künstliche Zahnwurzel aus Titan oder Keramik, die in den Kieferknochen eingesetzt wird, um einen Zahn zu ersetzen.',
  Implantatkrone: 'Die sichtbare Krone, die auf das Implantat gesetzt wird – der „künstliche Zahn“.',
  'Interdentalbürste': 'Kleine Bürste für die Zahnzwischenräume. Besonders wichtig für die Reinigung rund um Implantate.',
  Kieferknochenabbau: 'Verlust von Knochensubstanz, oft verursacht durch Parodontitis oder Zahnverlust. Kann ein Implantat erschweren und macht manchmal Knochenaufbau nötig.',
  Osseointegration: 'Der Prozess, bei dem das Implantat fest mit dem Knochen verwächst. Diese Einheilung ist entscheidend für die Stabilität des Implantats.',
  'Parodontitis (Parodontose)': 'Chronische Entzündung des Zahnhalteapparates, die zu Zahnfleischrückgang, Knochenabbau und Zahnverlust führen kann.',
  Parodontium: 'Der Zahnhalteapparat. Dazu gehören Zahnfleisch, Fasern, Knochen und die Wurzeloberfläche.',
  Periimplantitis: 'Entzündung rund um ein Implantat, vergleichbar mit Parodontitis. Führt zu Knochenabbau und kann das Implantat gefährden.',
  Plaque: 'Weicher Zahnbelag aus Bakterien. Hauptverursacher von Gingivitis und Parodontitis.',
  'Professionelle Zahnreinigung (PZR)': 'Gründliche Reinigung beim Zahnarzt, bei der harte und weiche Beläge entfernt werden. Wichtig zur Vorbeugung von Parodontitis und Implantatproblemen.',
  Sondierungstiefe: 'Tiefe der Zahnfleischtaschen, gemessen mit einer dünnen Sonde. Zeigt, wie weit eine Parodontitis fortgeschritten ist.',
  Zahnfleischtasche: 'Entstehende Spalte zwischen Zahn und Zahnfleisch durch Entzündung. Je tiefer die Tasche, desto stärker die Parodontitis.',
  Zahnimplantat: 'Gesamte Implantatlösung: künstliche Zahnwurzel + Aufbau + Krone. Ersetzt einen fehlenden Zahn funktionell und ästhetisch.'
};

function TH({children}: PropsWithChildren) {
    return (
        <th className="text-left mr-2">{children}</th>
    )
}

function TR({children}: PropsWithChildren) {
    return <tr className="even:bg-gray-200 first:not-last:border-t border-b">{children}</tr>
}

function TD({children}: PropsWithChildren) {
    return <td className="py-1">{children}</td>
}

export default function Lexicon() {
    return (
        <table className="w-full">
            <thead>
                <TR>
                    <TH>Fachbegriff</TH>
                    <TH>Erklärung</TH>
                </TR>
            </thead>
            <tbody className="">
                {Object.entries(lexicon).map(([name, explanation], index) => (
                    <TR key={index}>
                        <TH>{name}</TH>
                        <TD>{explanation}</TD>
                    </TR>
                ))}
            </tbody>
            <colgroup>
                <col span={1} className="pr-4" />
            </colgroup>
        </table>
    )
}