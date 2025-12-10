import P from "../components/P";
import Section from "../components/Section";
import Title from "../components/Title";
import img6 from '../assets/image6.jpg';
import img7 from '../assets/image7.jpg';
import UL from "../components/UL";
import YoutubeVideo from "../components/YoutubeVideo";

export default function Krankheitsbild() {
    return (
        <>
            <Section>
                <Title>Parodontitis (Parodontose) – Ursachen, Symptome und Stadien</Title>
                <P><b>Parodontitis</b>, häufig auch <b>Parodontose</b> genannt, ist eine chronische Entzündung des Zahnhalteapparates. Dazu gehören das Zahnfleisch, der Kieferknochen und die Fasern, die den Zahn im Knochen verankern. Bleibt die Erkrankung unbehandelt, kann sie zum Rückgang des Zahnfleisches, zu Knochenverlust und schließlich zu Zahnverlust führen. Parodontitis ist eine der häufigsten Erkrankungen im Erwachsenenalter – viele Betroffene bemerken sie jedoch zunächst nicht, da sie oft schleichend verläuft.</P>
            </Section>
            <Section>
                <Title>Wie entsteht Parodontitis?</Title>
                <P>Der wichtigste Auslöser ist bakterieller Zahnbelag (Plaque). Wird dieser nicht regelmäßig und gründlich entfernt, reagieren Zahnfleisch und Körper mit Entzündungen. Rauchen, Diabetes, Stress oder eine erbliche Veranlagung können das Risiko zusätzlich erhöhen oder den Verlauf verschlechtern.</P>
            </Section>
            <Section>
                <Title>Häufige Symptome</Title>
                <P>Viele Beschwerden treten zuerst leicht auf und werden daher oft übersehen. Typische Anzeichen sind:</P>
                <UL>
                    <li><b>Zahnfleischbluten</b>, besonders beim Zähneputzen oder bei der Verwendung von Zahnseide</li>
                    <li><b>Rötungen, Schwellungen oder Schmerzen</b> am Zahnfleisch</li>
                    <li><b>Rückgang des Zahnfleisches</b> („längere“ Zähne)</li>
                    <li><b>Mundgeruch</b>, der trotz guter Zahnpflege bleibt</li>
                    <li><b>Locker werdende Zähne</b> oder Zahnwanderungen</li>
                    <li><b>Empfindlichkeit gegenüber Kälte oder Hitze</b></li>
                </UL>
                <P>Wichtig: Parodontitis kann auch ohne Schmerzen fortschreiten!</P>
            </Section>
            <Section>
                <Title>Die verschiedenen Stadien der Parodontitis</Title>
                <div className="flex gap-8">
                    <div className="grow">
                        <P>Parodontitis verläuft in mehreren Phasen:</P>
                        <ol className="list-decimal list-inside font-semibold *:*:first:font-normal">
                            <li>
                                Gingivitis – die Vorstufe
                                <UL>
                                    <li>Entzündung nur am Zahnfleisch</li>
                                    <li>Meist verursacht durch Plaque</li>
                                    <li>Typische Zeichen: Zahnfleischbluten, leichte Schwellungen</li>
                                    <li><b>Reversibel</b>: Mit verbesserter Mundhygiene und professioneller Zahnreinigung heilt die Gingivitis in der Regel vollständig ab.</li>
                                </UL>
                            </li>
                            <li>
                                Leichte Paradontitis
                                <UL>
                                    <li>Die Entzündung breitet sich auf den Zahnhalteapparat aus.</li>
                                    <li>Erste <b>Zahnfleischtaschen</b> entstehen.</li>
                                    <li>Leichter Verlust von Fasern und Knochen ist möglich.</li>
                                    <li>Symptome noch mild oder kaum spürbar.</li>
                                </UL>
                            </li>
                            <li>
                                Mittelschwere Paradontitis
                                <UL>
                                    <li>Taschen vertiefen sich weiter.</li>
                                    <li><b>Knochenabbau</b> ist deutlich messbar.</li>
                                    <li>Häufig treten Mundgeruch, Zahnfleischrückgang und leichte Zahnlockerungen auf.</li>
                                </UL>
                            </li>
                            <li>
                                Schwere Paradontitis
                                <UL>
                                    <li>{"Starke Entzündung und tiefe Taschen (oft > 6 mm)"}</li>
                                    <li><b>Ausgeprägter Knochenverlust</b></li>
                                    <li>Zahnlockerungen, Verschiebungen oder sogar Zahnverlust</li>
                                    <li>Kauen kann schmerzhaft werden</li>
                                    <li>Ohne Behandlung schreitet die Erkrankung weiter voran.</li>
                                </UL>
                            </li>
                        </ol>
                    </div>
                    <div className="w-xl">
                        <img src={img7} />
                        <img src={img6} />
                    </div>
                    <div className="w-xl">
                        <YoutubeVideo videoId="PePItaz2_rM" />
                    </div>
                </div>
            </Section>
            <Section>
                <Title>Warum sollte man Parodontitis früh behandeln?</Title>
                <P>Unbehandelt kann Parodontitis nicht nur Zähne gefährden, sondern auch die Allgemeingesundheit beeinflussen. Forschung zeigt Zusammenhänge mit Herz-Kreislauf-Erkrankungen, Diabetes und Frühgeburten. Frühzeitig erkannt ist Parodontitis gut behandelbar und lässt sich in vielen Fällen stoppen.</P>
            </Section>
            <Section>
                <Title>Fazit</Title>
                <P>Parodontitis ist eine ernstzunehmende, aber behandelbare Erkrankung des Zahnhalteapparates. Je früher sie erkannt wird, desto besser lässt sich ihr Fortschreiten aufhalten. Regelmäßige Zahnarztbesuche, gründliche Mundhygiene und eine professionelle Reinigung sind entscheidend, um langfristig gesunde Zähne und Zahnfleisch zu erhalten.</P>
            </Section>
        </>
    )
}