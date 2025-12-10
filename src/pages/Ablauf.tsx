import P from "../components/P";
import Section from "../components/Section";
import Title from "../components/Title";
import UL from "../components/UL";
import YoutubeVideo from "../components/YoutubeVideo";
import img2 from '../assets/image2.jpg';
import Image from "../components/Image";

export default function Ablauf() {
    return (
        <>
            <Title className="text-4xl">Ablauf der Behandlung bis zum Zahnimplantat:</Title>
            <Section>
                <Title>Kurzüberblick: Wie Parodontitis zum Zahnverlust führt</Title>
                <ol className="list-decimal pl-6 *:ml-4">
                    <li><b>Beginn (Gingivitis)</b> – Zahnfleischentzündung durch Plaque: Rötung, Bluten.</li>
                    <li><b>Parodontitis</b> – Entzündung greift tiefer: Zahnfleischtaschen entstehen, Fasern und Knochen werden abgebaut.</li>
                    <li><b>Fortschreiten</b> – Taschen werden tiefer, Zähne können locker werden, Schmerzen oder Funktionsstörungen treten auf.</li>
                    <li><b>Endstadium (Zahnverlust)</b> – Wenn der Halt nicht mehr ausreicht, muss der Zahn gezogen oder geht verloren.</li>
                    <li><b>Folgen des Zahnverlusts</b> – Nachbarzähne können wandern, Kieferknochen baut sich zurück, Kaufunktion und Ästhetik leiden.</li>
                </ol>
            </Section>
            <Section>
                <Title>Schritt-für-Schritt: Von der Parodontitis zum Implantat</Title>
                <div className="flex gap-8">
                    <div className="grow *:odd:font-semibold">
                        <P>1. Erkennen und Behandeln der Parodontitis</P>
                        <UL>
                            <li><b>Zuerst:</b> Parodontitis behandeln! Das heißt: professionelle Zahnreinigung, Reinigung der Zahnfleischtaschen, eventuell Antibiotika oder lokale Therapie.</li>
                            <li><b>Ziel:</b> Die Entzündung stoppen, damit neue Behandlungen (z. B. Implantat) Erfolg haben. Ein aktives Parodontitisgeschehen muss vorher unter Kontrolle sein.</li>
                        </UL>
                        <P>2. Entscheidungsfindung: Erhalt vs. Extraktion</P>
                        <UL>
                            <li><b>Zahnerhalt möglich?</b> Wenn der Zahn ausreichend stabil ist, versucht man ihn zu retten (Parodontalbehandlung, evtl. parodontale oder endodontische Maßnahmen).</li>
                            <li><b>Extraktion:</b> Ist der Zahn stark gelockert oder nicht erhaltungswürdig, wird er entfernt.</li>
                        </UL>
                        <P>3. Heilphase nach Zahn-Entfernung</P>
                        <UL>
                            <li><b>Wunde heilen lassen:</b> Nach der Extraktion schließt sich das Gewebe; oft wartet man mehrere Wochen bis Monate, damit das Zahnfleisch und der Knochen sich erholen.</li>
                            <li><b>Knochenverlust beachten:</b> Bleibt der Knochen stehen oder baut er sich zurück? Das beeinflusst die Implantatplanung.</li>
                        </UL>
                        <P>4. Knochenaufbau (falls nötig)</P>
                        <UL>
                            <li><b>Warum:</b> Bei zu wenig Knochensubstanz muss Knochen aufgebaut werden (Grafting, Sinuslift u.ä.), damit ein Implantat stabil sitzen kann.</li>
                            <li><b>Ablauf:</b> Eigenknochen, Ersatzmaterialien oder Kombinationen werden eingesetzt; Heilung kann Wochen bis Monate dauern.</li>
                        </UL>
                        <P>5. Implantatplanung</P>
                        <UL>
                            <li><b>Untersuchung:</b> Klinische Untersuchung + Röntgen (z. B. 3D-Aufnahme/Volumentomographie), Abdrücke oder digitale Scans.</li>
                            <li><b>Planung:</b> Größe, Position und Anzahl der Implantate werden festgelegt; Erstellung eines individuellen Behandlungsplans.</li>
                        </UL>
                        <P>6. Einsetzen des Implantats (Operativer Eingriff)</P>
                        <UL>
                            <li><b>OP:</b> Das Implantat (Titan- oder Keramikschraube) wird in den Kieferknochen gesetzt. Der Eingriff ist meist ambulant unter lokaler Betäubung.</li>
                            <li><b>Abdeckung:</b> Je nach Methode wird das Implantat mit einer Kappe abgedeckt oder ein Aufbau (Abutment) gesetzt.</li>
                        </UL>
                        <P>7. Einheilphase (Osseointegration)</P>
                        <UL>
                            <li><b>Was passiert:</b> Das Implantat verwächst mit dem Knochen. Diese Einheilzeit ist entscheidend für Stabilität.</li>
                            <li><b>Dauer:</b> Variiert; währenddessen kein Belastungsprovisorium oder nur spezielle provisorische Lösungen.</li>
                        </UL>
                        <P>8. Freilegung / Abutment und prothetische Versorgung</P>
                        <UL>
                            <li><b>Freilegung (falls nötig):</b> Das Implantat wird sichtbar gemacht und ein Verbindungselement (Abutment) gesetzt.</li>
                            <li><b>Kronenversorgung:</b> Auf dem Abutment wird die definitive Krone, Brücke oder Prothese befestigt — funktionell und ästhetisch an den natürlichen Biss angepasst.</li>
                        </UL>
                        <P>9. Nachsorge und Lebenslange Pflege</P>
                        <UL>
                            <li><b>Regelmäßige Kontrollen:</b> Zahnarzt/Parodontologe überprüft Implantat, Zahnfleisch und Hygiene.</li>
                            <li><b>Mundhygiene:</b> Gründliche häusliche Pflege plus professionelle Prophylaxe (z. B. alle 3–12 Monate).</li>
                            <li><b>Risiken minimieren:</b> Rauchstopp, gute Zahn- und Allgemeingesundheit helfen langfristig.</li>
                        </UL>
                    </div>
                    <div className="w-xl">
                        <YoutubeVideo videoId="nNPFpd0nqpk" />
                    </div>
                </div>
            </Section>
            <Title className="text-4xl">Allgemeine Informationen zu Zahnimplantaten</Title>
            <Section>
                <div className="flex gap-8">
                    <div className="grow">
                        <Title>Was ist ein Zahnimplantat?</Title>
                        <P>Ein Implantat ist eine künstliche Zahnwurzel — meist eine kleine Schraube aus Titan oder keramischem Material (Zirkoniumdioxid), die in den Kieferknochen eingesetzt wird. Darauf wird ein sichtbarer Zahnersatz (Krone, Brücke oder Prothese) befestigt.</P>
                        <Title>Vorteile von Implantaten</Title>
                        <UL>
                            <li>Stabiler Halt beim Kauen und Sprechen</li>
                            <li>Erhalt der Nachbarzähne (keine Beschneidung wie bei Brücken oft nötig)</li>
                            <li>Vermeidung von Knochenschwund durch natürliche Belastung des Knochens</li>
                            <li>Sehr ästhetisch und langlebig bei guter Pflege</li>
                        </UL>
                        <Title>Risiken und mögliche Komplikationen</Title>
                        <UL>
                            <li>Infektionen rund ums Implantat (Periimplantitis) — vergleichbar mit Parodontitis</li>
                            <li>Implantatverlust (selten, bei fehlender Einheilung oder durch hohe Belastung)</li>
                            <li>Wundheilungsstörungen, vorübergehende oder selten dauerhafte Gefühlsstörungen</li>
                            <li>Notwendigkeit von Knochenaufbau oder weiteren Eingriffen</li>
                        </UL>
                        <Title>Wer ist geeignet?</Title>
                        <UL>
                            <li>Generell sind viele Patientinnen und Patienten geeignete Kandidaten. Wichtig sind: ausreichende Knochenmenge (oder die Bereitschaft zu Knochenaufbau), gute Mundhygiene und kontrollierte Allgemeinerkrankungen (z. B. gut eingestellter Diabetes).</li>
                            <li><b>Raucher</b> und Personen mit ungeeigneter Mundhygiene haben ein erhöhtes Risiko für Komplikationen.</li>
                            <li>Aktive, unbehandelte Parodontitis sollte zuerst behandelt werden — stabile Mundverhältnisse sind Voraussetzung.</li>
                        </UL>
                        <Title>Lebensdauer und Pflege</Title>
                        <UL>
                            <li>Implantate halten oft viele Jahre oder sogar lebenslang, wenn sie richtig gepflegt und regelmäßig kontrolliert werden.</li>
                            <li>Blutungen, Schwellungen oder neues Lockerungsgefühl am Implantat sind Warnsignale — zeitnahe Kontrolle ist wichtig.</li>
                        </UL>
                    </div>
                    <div className="w-xl">
                        <Image src={img2} source="https://www.turkeydentalclinic.com/fragen-zu-zahnimplantaten/" />
                    </div>
                </div>
            </Section>
            <Section>
                <Title>Kurze Zusammenfassung / Takeaways</Title>
                <UL>
                    <li>Parodontitis kann unbemerkt zu Zahnverlust führen.</li>
                    <li>Bevor an ein Implantat gedacht wird, muss die Parodontitis sicher behandelt und kontrolliert sein.</li>
                    <li>Die Implantatversorgung umfasst mehrere Schritte: Zahnextraktion (falls nötig), eventuell Knochenaufbau, Insertions-OP, Einheilung und prothetische Versorgung.</li>
                    <li>Implantate sind eine sichere und ästhetische Lösung, benötigen aber lebenslange Pflege und regelmäßige Kontrollen.</li>
                </UL>
            </Section>
        </>
    )
}