import { useState } from "react";
import UL from "../components/UL";
import Section from "../components/Section";
import Title from "../components/Title";
import { Field, Form, Formik, type FormikHelpers } from "formik";

const dummyPosts = [
    {
        title: "Mein Frontzahn-Implantat – von Panik zur Erleichterung",
        content: (
            <>
                Hallo zusammen,<br />
                nach einem Unfall vor 3 Jahren musste mein Schneidezahn ersetzt werden. Ich hatte lange Angst vor der Implantation, aber die Parodontitis wurde schlimmer und schließlich war klar: der Zahn muss raus.<br />
                Die OP selbst war viel harmloser, als ich befürchtet habe. Betäubung war top, nur leichtes Ziehen gespürt.<br />
                Schmerzen danach: 3–4 Tage, gut mit Ibuprofen kontrollierbar.<br />
                Optisch war das Provisorium natürlich nicht perfekt, aber nach Einheilung und finaler Krone bin ich ehrlich gesagt begeistert. Niemand erkennt, dass es kein echter Zahn ist.<br />
                Tipps von mir:<br />
                <UL>
                    <li>nicht zu viel googeln 😅</li>
                    <li>Kühlpads bereit halten</li>
                    <li>Antibiotika ernst nehmen</li>
                    <li>Geduld, Geduld, Geduld</li>
                </UL>
                Ich würde es wieder tun!
            </>
        )
    },

    {
        title: "Probleme 2 Wochen nach Implantat – normal oder kritisch?",
        content: (
            <>
                Hi zusammen,<br />
                vor 2 Wochen bekam ich ein Implantat im Unterkiefer, inkl. Knochenaufbau. Seit ein paar Tagen spüre ich nachts so ein dumpfes Ziehen, fast wie Druckwellen. Tagsüber weniger.<br />
                Zahnarzt sagt, es „könne normal sein“, aber ich fühl mich unsicher.<br />
                Zahn daneben reagiert auch leicht empfindlich beim Klopfen.<br />
                Hatte das jemand von euch?<br />
                Ab wann sollte man wirklich stutzig werden?<br />
                Danke 🙏
            </>
        )
    },

    {
        title: "Kosten waren höher als gedacht… lohnt sich aber!",
        content: (
            <>
                Hallo,<br />
                ich hatte ehrlich gesagt keine Ahnung, wie teuer ein Implantat werden kann.<br />
                Röntgen, Aufklärung, Knochenaufbau, Provisorien… am Ende waren es fast 4.500€.<br />
                Währenddessen dachte ich: „Warum tue ich mir das an?“<br />
                Aber jetzt, 7 Monate später, kann ich wieder richtig kauen, lachen und fühle mich nicht mehr „kaputt“. <br />
                Für mich war es die Investition wert. Wenn jemand überlegt:<br />
                holt euch 2 Kostenvoranschläge und fragt nach Materialien.
            </>
        )
    },

    {
        title: "6 Monate Einheilung – wie habt ihr das ausgehalten?",
        content: (
            <>
                Hallo zusammen,<br />
                ich stecke gerade mitten in der Einheilungsphase meines Implantats im Oberkiefer.<br />
                Weil mein Knochen nach einer alten Entzündung stark rückgebildet war, musste zuerst aufgebaut werden.<br />
                Deshalb hat der Chirurg mir gesagt, dass wir mindestens 6 Monate Einheilzeit brauchen, bevor die Krone geplant werden kann.<br />
                Ich trage seitdem ein herausnehmbares Provisorium und finde es ehrlich gesagt richtig unangenehm.<br />
                Es sitzt zwar okay, aber ich habe ständig dieses Fremdkörpergefühl.<br />
                Beim Sprechen merke ich, dass es manchmal minimal klackert, und beim Essen habe ich Angst, dass sich etwas bewegt.<br />
                Optisch sieht es ganz gut aus — aber innerlich fühlt es sich einfach nicht „richtig“ an.<br />
                Was mir zu schaffen macht:<br />
                <UL>
                    <li>ständige Gedanken: „Wäre doch ein Sofortimplantat möglich gewesen?“</li>
                    <li>unangenehmer Druck, wenn ich länger spreche</li>
                    <li>beim Lächeln denke ich dauernd daran, dass es nicht mein echter Zahn ist</li>
                    <li>Unsicherheit, ob das Implantat wirklich gut einwächst</li>
                </UL>
                Ich versuche geduldig zu bleiben, aber 6 Monate sind lang.<br />
                Habt ihr Tipps, wie ihr euch in dieser Phase motiviert habt?<br />
                Und: hat jemand trotz schwachem Knochen ein Sofortimplantat bekommen?<br />
                Würde mich riesig über Erfahrungen freuen.
            </>
        )
    },

    {
        title: "Ständig Angst, das Implantat könnte verloren gehen",
        content: (
            <>
                Hey,<br />
                mein Implantat ist jetzt 1 Jahr drin, alles laut Röntgen perfekt.<br />
                Trotzdem habe ich immer wieder dieses Gefühl von Unsicherheit.<br />
                Manchmal spüre ich Druck oder ein leichtes Ziehen.<br />
                Ich putze sehr gründlich, benutze Interdentalbürsten und spezielle Spüllösung.<br />
                Aber die Angst bleibt: Was, wenn irgendwann eine Entzündung kommt?<br />
                Wie geht ihr mit dieser “Kopfgeschichte” um?<br />
                Kann man irgendwann wirklich loslassen?
            </>
        )
    },

    {
        title: "Entzündung trotz top Hygiene",
        content: (
            <>
                Hallo Leute,<br />
                ich bin echt frustriert. 8 Monate nach Implantation habe ich plötzlich eine Entzündung im Implantatgewebe. Zwar noch mild, aber nervig.<br />
                Mein Zahnarzt sagt, manchmal reagiert der Körper einfach so. Röntgen ist okay, Implantat fest.<br />
                Ich soll jetzt ultra gründlich reinigen und wiederkommen.<br />
                Ich hab NIE geraucht, benutze täglich Zahnseide und Interdentalbürsten.<br />
                Hat jemand ähnliche Erfahrungen und gute Tipps?
            </>
        )
    },

    {
        title: "Keine Schmerzen, keine Probleme – mein Update nach 3 Jahren",
        content: (
            <>
                Hallo zusammen,<br />
                ich lese hier schon sehr lange mit und habe in der Zeit so viele Sorgen, Ängste und Geschichten gelesen, dass ich euch auch mal ein positives Update geben will.<br />
                Mein Implantat (Backenzahn im Unterkiefer) ist jetzt 3 Jahre drin und ich vergesse manchmal komplett, dass es nicht mein eigener Zahn ist.<br />
                Meine Erfahrungen:<br />
                <UL>
                    <li>nie Schmerzen</li>
                    <li>keine Entzündung</li>
                    <li>keinerlei Fremdgefühl</li>
                    <li>Essen absolut normal</li>
                    <li>Krone sieht optisch 1:1 aus wie der eigene Zahn</li>
                </UL>
                Ich gehe:<br />
                <UL>
                    <li>einmal im Jahr zur Kontrolle</li>
                    <li>zweimal im Jahr zur professionellen Dentalhygiene</li>
                </UL>
                Mehr mache ich nicht – ausser gründlich reinigen, auch zwischen den Zähnen.<br />
                Und ja, anfangs hatte ich Angst, dass irgendwann etwas passiert.<br />
                Mittlerweile vertraue ich einfach darauf, dass es gut funktioniert.<br />
                Was mir geholfen hat:<br />
                <UL>
                    <li>nicht jede kleine Empfindung als „Problem“ interpretieren</li>
                    <li>keine ständige Panik vor Implantatverlust</li>
                    <li>den langfristigen Nutzen sehen, nicht nur die OP und die Wartezeit</li>
                </UL>
                Fazit nach 3 Jahren:<br />
                Ich bin froh, dass ich mich dafuer entschieden habe.<br />
                Fuer mich fuehlt es sich heute sogar stabiler an als der Zahn, den ich verloren habe.<br />
                Man liest oft viele Sorgen – deshalb wollte ich zeigen, dass es auch richtig entspannt laufen kann.<br />
                Wenn jemand Fragen hat, meldet euch gern.
            </>
        )
    },

    {
        title: "All-on-4 – kompletter Oberkiefer neu",
        content: (
            <>
                Servus zusammen,<br />
                ich habe mich nach jahrelanger Zahnfleischentzündung für das All-on-4 Konzept entschieden – also 4 Implantate und komplette Oberkieferprothese drauf.<br />
                Die OP: 3 Stunden. Danach 2 Tage geschwollen, aber wirklich auszuhalten.<br />
                Essen: weiche Kost 6 Wochen, danach langsam normal.<br />
                Ich sag nur: neues Lebensgefühl.<br />
                Ich lächle wieder auf Fotos und kann endlich ohne Sorge in einen Apfel beissen.<br />
                Wenn jemand unsicher ist: fragt nach 3D-Planung und digitaler Simulation – das hat mir extrem geholfen.
            </>
        )
    },

    {
        title: "Implantatverlust nach 4 Monaten – fühle mich total allein",
        content: (
            <>
                Hallo,<br />
                ich hatte vor ein paar Wochen einen richtigen Tiefpunkt.<br />
                Mein Implantat im seitlichen Oberkiefer wurde gesetzt, alles sah gut aus. Kontrollen in den ersten Monaten waren unauffaellig. Ich hatte leichte Beschwerden, aber nichts, was mich besorgt haette.<br />
                Dann plötzlich:<br />
                <UL>
                    <li>Druckgefühl</li>
                    <li>leichtes Ziehen</li>
                    <li>minimal beweglich bei Belastung</li>
                </UL>
                Der Zahnarzt hat geruentgt und mir erklaert, dass das Implantat nicht stabil eingeheilt ist.<br />
                Keine klare Ursache. Kein Rauchen, gute Hygiene, jung und gesund – ich haette nie gedacht, dass sowas passieren kann.<br />
                Musste entfernt werden.<br />
                Jetzt beginnt alles von vorne:<br />
                <UL>
                    <li>Knochenaufbau</li>
                    <li>Einheilzeit</li>
                    <li>neuer Versuch in 8–9 Monaten</li>
                </UL>
                Ich fuehle mich gerade echt hilflos.<br />
                Man macht alles richtig, investiert Geld, Zeit und Emotionen – und steht wieder am Start.<br />
                Ich frage mich:<br />
                <UL>
                    <li>War es einfach Pech?</li>
                    <li>Hatten andere vielleicht einen zweiten Versuch, der dann problemlos war?</li>
                    <li>Gibt es Punkte, die ich unbedingt beachten muss, damit es naechstes Mal klappt?</li>
                </UL>
                Ich freue mich ueber jede Rueckmeldung – besonders von Menschen, die ebenfalls ein Scheitern erlebt haben. Irgendwie hilft es zu wissen, dass man nicht allein ist.
            </>
        )
    },

    {
        title: "Frontzahn – Farbenabgleich war viel komplizierter als gedacht",
        content: (
            <>
                Hallo Leute,<br />
                ich war sicher, dass der aesthetiche Teil „ganz am Schluss“ der einfachste wird. Bei mir ging es um einen Schneidezahn.<br />
                Nach der Implantatheilung habe ich mich richtig auf die finale Keramikkrone gefreut.<br />
                Dann der Reality-Check:<br />
                <UL>
                    <li>Erster Farbversuch beim Zahntechniker – viel zu hell.</li>
                    <li>Wirkte fast wie ein Veneer aus Hollywood. Absolut unnatuerlich.</li>
                    <li>Der Techniker hat mir erklaert:</li>
                </UL>
                <UL>
                    <li>Frontbereich ist super anspruchsvoll</li>
                    <li>Licht bricht dort anders</li>
                    <li>Transluzenz spielt eine riesige Rolle</li>
                    <li>kleine Nuancen koennen alles veraendern</li>
                </UL>
                Wir haben zweimal nachkorrigiert:<br />
                <UL>
                    <li>Fotos bei anderem Licht</li>
                    <li>kleine Aenderung in der Schattierung</li>
                    <li>leichte Variation von Zahnhals zu Spitze</li>
                </UL>
                Beim dritten Termin war es dann endlich perfekt:<br />
                Wenn ich lache, sehe ich keinen Unterschied mehr zum Nachbarzahn.<br />
                Ich hatte Traenen in den Augen, weil ich 14 Monate keinen „natuerlichen“ Frontbereich hatte.<br />
                Mein Tipp:<br />
                <UL>
                    <li>niemals beim ersten Farbton bleiben</li>
                    <li>Zahntechniker nach Referenzmustern fragen</li>
                    <li>unbedingt mehrere Fotos machen (Tageslicht, Neon, warmes Licht)</li>
                    <li>Geduld mitbringen – ich haette nie gedacht, dass das so diffizil ist</li>
                </UL>
                Hatte jemand von euch auch diesen „Farbmarathon“?
            </>
        )
    }
];

type FormValues = { title: string; content: string; };

export default function Forum() {

    const [posts, setPosts] = useState(dummyPosts);

    const handleSubmit = (values: FormValues, helpers: FormikHelpers<FormValues>) => {
        const post = { title: values.title, content: <p>{values.content}</p> }
        setPosts(posts => [post, ...posts]);
        helpers.resetForm();
    }

    return (
        <div className="mb-8">
            <Title>Verfasse einen Beitrag</Title>
            <Formik initialValues={{ title: "", content: "" }} onSubmit={handleSubmit}>
                <Form className="flex flex-col gap-4 mb-4">
                    <div className="">
                        <label className="px-2 font-semibold" htmlFor="title">Titel</label>
                        <Field id="title" name="title" className="w-full outline rounded px-2" />
                    </div>
                    <div className="">
                        <label className="px-2 font-semibold" htmlFor="content">Beitrag</label>
                        <Field id="content" name="content" component="textarea" className="w-full outline rounded px-2 h-32"/>
                    </div>
                    <button className="bg-[#C08081] p-2 rounded-lg text-white cursor-pointer w-64" type="submit">Senden</button>
                </Form>
            </Formik>
            <div className="">
                {posts.map((post, index) => (
                    <Section key={index}>
                        <Title>{post.title}</Title>
                        <p>{post.content}</p>
                    </Section>
                ))}
            </div>
        </div>
    )
}