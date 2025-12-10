import Lexicon from "../components/Lexicon";
import P from "../components/P";
import Section from "../components/Section";
import Title from "../components/Title";
import img3 from '../assets/image3.jpg'
import img4 from '../assets/image4.jpg'
import img5 from '../assets/image5.jpg'

export default function Home() {

    return (
        <>
            <Section divider={false}>
                <Title>Gesundes Zahnfleisch, starke Zähne – und moderne Lösungen, wenn doch einmal etwas fehlt</Title>
                <P><b>Parodontitis</b> – vielen auch als <i>Parodontose</i> bekannt – gehört zu den häufigsten Erkrankungen im Mundraum und verläuft oft zunächst unbemerkt. Entzündetes Zahnfleisch, tiefe Zahnfleischtaschen und Knochenabbau können über die Jahre dazu führen, dass ein Zahn seinen Halt verliert. Doch die gute Nachricht ist: Mit moderner Diagnostik, gezielter Behandlung und konsequenter Nachsorge lässt sich Parodontitis nicht nur stoppen – auch verlorene Zähne können heute zuverlässig ersetzt werden.<br />
                    Zahnimplantate bieten eine ästhetische, stabile und langlebige Lösung, wenn ein Zahn nicht mehr gerettet werden kann. Sie ermöglichen ein natürliches Kaugefühl, schützen den Kieferknochen und fügen sich harmonisch in Ihr Lächeln ein. Auf dieser Seite erfahren Sie alles Wichtige über Parodontitis, ihre Behandlung und den Weg zu einem hochwertigen Implantat – verständlich erklärt und Schritt für Schritt.
                    <br />Unser Ziel: Ihnen Sicherheit, Klarheit und Vertrauen für Ihre Zahngesundheit zu geben.
                </P>
            </Section>
            <Section divider={false}>
                    <div className="mx-auto w-xl">
                        <div><img src={img3} /></div>
                        <div className="flex">
                            <img className="w-1/2" src={img5} />
                            <img className="w-1/2" src={img4} />
                        </div>
                    </div>
                </Section>
            <Section>
                <Title>Fachlexikon – Parodontitis & Zahnimplantate</Title>
                <Lexicon />
            </Section>
        </>
    )
}
