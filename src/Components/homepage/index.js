import Accordion from "../accordion";
import "./styles.css";


export default function Homepage() {

    return (


        /*Content-Section with Information for the user*/

        <div className="layout__wrapper">
            <div className="card">
                <div className="header">
                    <div className="menu">
                        <a href="/">Homepage</a>
                        <a href="/quiz">Quiz</a>
                    </div>
                    <div className="header__h1wrapp"><h1 className="header__h1">Agiler Fixpreis Quiz</h1></div>
                    <div className="layout__banner">
                        <img src="./images/agile3.png" />
                    </div>
                </div>
                <div className="content">
                    <div className="section__one">
                        <p>
                            Der Agile Fixpreis ist ein Vertragskonzept in der agilen Softwareentwicklung. Er zeichnet sich dadurch aus, dass am Anfang allen Parteien bekannt ist,
                            dass die Funktionalitäten nicht vollkommen ausdefiniert sind. Trotzdem steht das Budget fest. Im Gegensatz dazu gibt es den Fixpreis, welcher
                            davon ausgeht, dass die Funktionalitäten perfekt definiert sind. Da Funktionalitäten in Software-Projekten vor dem Projekt in der Praxis nie
                            vollkommen sind, führt das im Laufe des Projektes zu vielen notwendigen Abstimmungen - so genannten Claim Management Meetings.
                            Der Agile Fixpreis geht damit anders um - es gibt ein (Stunden)Budget pro Feature, und alle Funktionalitäten, die sich in diesem Stundenkontingent
                            ausgehen, können ohne Zusatzkosten realisiert werden. Falls es Funktionalitäten gibt, die über das Stundenbudget hinausgehen, können diese
                            entweder auf Kosten von zusätzlichen Funktionalitäten aus einem anderen Feature oder durch eine Zusatzbestellung umgesetzt werden.
                        </p>
                        <div className="video">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/YIGDOZx_3QE?si=0lg1IyY8ki3oA5J8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                        <div className="matrix">
                            <table>
                                <tbody>
                                    <tr>
                                        <th></th>
                                        <th scope="col">Agiler Fixpreis</th>
                                        <th scope="col"> Festpreis</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">Zusatz-Funktionen möglich</th>
                                        <td className="green">✓</td>
                                        <td className="red">x</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Fixes Budget</th>
                                        <td className="green">✓</td>
                                        <td className="green">✓</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Fixe Timeline</th>
                                        <td className="green">✓</td>
                                        <td className="green">✓</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                        <Accordion />
                    </div>
                </div>
            </div>
        </div>

    );

};