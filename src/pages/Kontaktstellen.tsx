import Section from "../components/Section";
import Title from "../components/Title";
import UL from "../components/UL";

const contacts = [
    {
        "titel": "Parodontologie-Sprechstunde",
        "kontaktperson": "Dr. Lea Falk · Fachzahnärztin für Parodontologie",
        "aufgabenbereich": [
            "Diagnose & Therapieplanung bei Parodontitis",
            "Beurteilung von Knochenabbau",
            "Begleitung vor Implantation"
        ],
        "kontaktmöglichkeiten": [
            "+41 56 789 00 41",
            "parosprechstunde@implant-kompass.ch",
            "Online-Termin: Erst-Diagnose Parodontitis"
        ],
        "typische_anliegen": [
            "Ist mein Zahnfleisch noch behandelbar?",
            "Kann Parodontitis gestoppt werden?"
        ]
    },
    {
        "titel": "Implantologie-Beratung",
        "kontaktperson": "Dr. Paul Riedel · Oralchirurg & Implantologe",
        "aufgabenbereich": [
            "Implantatplanung",
            "Risikoanalyse (Knochenvolumen, Infektionslage)",
            "Knochenaufbau & operative Eingriffe"
        ],
        "kontaktmöglichkeiten": [
            "implantberatung@implant-kompass.ch",
            "Uploadcenter: Röntgenbilder, Befunde",
            "Kurznachricht-Funktion für Fragen"
        ],
        "typische_anliegen": [
            "Reicht mein Knochen für ein Implantat?",
            "Sofortimplantat oder lieber warten?"
        ]
    },
    {
        "titel": "Dentalhygiene & Implantatpflege",
        "kontaktperson": "Sarah Keller · dipl. Dentalhygienikerin HF",
        "aufgabenbereich": [
            "Hygieneanleitung für Parodontitispatienten",
            "Implantatpflege & Nachkontrollrhythmus",
            "Produktempfehlungen"
        ],
        "kontaktmöglichkeiten": [
            "Telefonische Pflegeberatung, Mo–Fr",
            "hygiene@implant-kompass.ch",
            "PDF Downloads: Pflegeplan, Reinigungsraster"
        ],
        "typische_anliegen": [
            "Welche Bürsten sind geeignet?",
            "Wie verhindere ich eine Periimplantitis?"
        ]
    },
    {
        "titel": "Zweitmeinungsstelle Implantologie",
        "kontaktperson": "Prof. Dr. Jonas Mäder · unabhängiger Implantatprüfer",
        "aufgabenbereich": [
            "Neutrale Begutachtung von Röntgenbildern",
            "Einschätzung bereits gesetzter Implantate",
            "Bewertung von Behandlungsplänen & Kostenvoranschlägen"
        ],
        "kontaktmöglichkeiten": [
            "zweitmeinung@implant-kompass.ch",
            "Dokumentupload: Kostenvorschlag, Befunde",
            "Rückmeldung innerhalb 72h"
        ],
        "typische_anliegen": [
            "Ist der geplante Eingriff wirklich notwendig?",
            "Sind die Kosten plausibel?"
        ]
    },
    {
        "titel": "Kosten- & Versicherungsberatung",
        "kontaktperson": "Julia Steiner · medizinische Sachbearbeiterin & Versicherungsberaterin",
        "aufgabenbereich": [
            "Kostentransparenz",
            "Tarifabklärungen bei Krankenkassen",
            "Unterstützung bei Kostengutsprachen"
        ],
        "kontaktmöglichkeiten": [
            "Videogestützte Beratung",
            "versicherung@implant-kompass.ch",
            "Online-Kostenrechner"
        ],
        "typische_anliegen": [
            "Zahlt meine Versicherung bei Parodontitis?",
            "Welche Zusatzversicherungen lohnen sich bei Implantaten?"
        ]
    },
    {
        "titel": "Chirurgischer Notfallkontakt",
        "kontaktperson": "Notfallteam ImplantKompass",
        "aufgabenbereich": [
            "Postoperative Komplikationen",
            "Akute Entzündungen",
            "Blutungen & starke Schmerzen"
        ],
        "kontaktmöglichkeiten": [
            "Notfalltelefon 24/7: +41 800 112 990",
            "emergency@implant-kompass.ch"
        ],
        "typische_anliegen": [
            "Mein Implantat pulsiert stark",
            "Plötzliche Schwellung nach OP"
        ]
    },
    {
        "titel": "Labor & Zahntechnik",
        "kontaktperson": "Marco Bischoff · Zahntechnikermeister für Implantatästhetik",
        "aufgabenbereich": [
            "Farb- und Formanalysen",
            "Herstellung finaler Keramikkronen",
            "Beratung bei Frontzahnbereich"
        ],
        "kontaktmöglichkeiten": [
            "Termin zur Farbnahme",
            "technik@implant-kompass.ch"
        ],
        "typische_anliegen": [
            "Wie bekommt man die Krone farblich perfekt?",
            "Kann man den Zahn heller machen als den übrigen Bestand?"
        ]
    },
    {
        "titel": "Psychologische Implantatbegleitung",
        "kontaktperson": "Carola Weber · Coach für Dentalangst & Trauma",
        "aufgabenbereich": [
            "Unterstützung bei Angst vor OPs",
            "Stressmanagement bei langen Behandlungswegen",
            "Einzelgespräche vor Knochenaufbau oder Implantation"
        ],
        "kontaktmöglichkeiten": [
            "Online-Sitzung",
            "mutmacher@implant-kompass.ch"
        ],
        "typische_anliegen": [
            "Ich habe panische Angst vor Implantaten",
            "Wie komme ich emotional durch die Einheilphase?"
        ]
    },
    {
        "titel": "Implantat-Community & Forum",
        "kontaktperson": "Moderationsteam ImplantKompass",
        "aufgabenbereich": [
            "Austausch zwischen Patienten",
            "Antworten auf Alltagsfragen",
            "Erfahrungsberichte & Tipps zur Heilphase"
        ],
        "kontaktmöglichkeiten": [
            "Forum-Account kostenlos",
            "kontakt@implant-kompass.ch"
        ],
        "typische_anliegen": [
            "Wie lange dauert Einheilung wirklich?",
            "Hatte jemand Schmerzen nach Knochenaufbau?"
        ]
    }
];

export default function Kontaktstellen() {
    return (
        <div className="grid grid-cols-2 gap-4">
            {contacts.map((contact, index) =>
                <div key={index} className="flex flex-col">
                    <Section divider={false} className="grow">
                    <Title>{contact.titel}</Title>
                    <p><b>{contact.kontaktperson}</b></p>
                    <b>Aufgabenbereich:</b>
                    <UL>
                        {contact.aufgabenbereich.map((a, index) => (
                            <li key={index}>{a}</li>
                        ))}
                    </UL>
                    <p><b>Kontaktmöglichkeiten:</b></p>
                    <UL>
                        {contact.kontaktmöglichkeiten.map((k, index) => (
                            <li key={index}>{k}</li>
                        ))}
                    </UL>
                    <p><b>Typische Anliegen:</b></p>
                    <UL>
                        {contact.typische_anliegen.map((t, index) => (
                            <li key={index}>{t}</li>
                        ))}
                    </UL>
                </Section>
                <hr />
                </div>
            )}
        </div>
    )
}