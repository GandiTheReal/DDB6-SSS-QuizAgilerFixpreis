import "./styles.css";
import PriceCalculator from '../pricecalculator';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import ReactDOM from 'react-dom';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
});

/* function to print the agile contract */

const handlePrintContract = async () => {
    const companyInput = document.querySelector('input[name="company"]');
    const companyValue = companyInput.value;
    const priceOffer = document.querySelector("#priceresult p");
    const priceOfferValue = priceOffer.innerHTML;

    const pdfViewer = (
        <PDFViewer width="100%" height="100%">
            <MyDocument companyValue={companyValue} priceOfferValue={priceOfferValue}/>

        </PDFViewer>
    );

    const printWindow = window.open("", "_blank");
    ReactDOM.render(pdfViewer, printWindow.document.body);

    try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        printWindow.print()
    }
    catch (error) {
        console.error('error generating pdf', error);
    }

};
const MyDocument = ({ companyValue, priceOfferValue}) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>                           </Text>
                <Text>{priceOfferValue}</Text>
                <Text>                           </Text>
                <Text>======================================</Text>
                <Text>                           </Text>
                <Text> Es gelten die AGBs der WKO Oesterreich fuer den </Text>
                <Text> gesamten Vertrag. </Text>
                <Text> Es werden Planungsmeetings woechentlich abgehalten,</Text>
                <Text> um den Scope genauer zu definieren. </Text>
                <Text>                           </Text>
                <Text>======================================</Text>
                <Text> Weitere legal-texte einfuegen. </Text>
                <Text>                           </Text>
                <Text>                           </Text>
                <Text>======================================</Text>
                <Text>                           </Text>
                <Text>                           </Text>
                <Text>                           </Text>
                <Text>                           </Text>
                <Text>                           </Text>
                <Text>Firma: {companyValue}</Text>

            </View>
        </Page>
    </Document>
);

const handleSubmitQuiz = () => {
    const selectedOptions = {};

    // Retrieve user selections from the DOM
    const selectedInputs = document.querySelectorAll('input[type="radio"]:checked');
    selectedInputs.forEach(input => {
        const questionId = input.getAttribute('data-question-id');
        const selectedOption = input.value;
        selectedOptions[questionId] = selectedOption;
    });

    // Calculate the final result based on user selections
    var scoring = 0;
    var extrabonus = false;
    console.log(selectedOptions)
    if (
        selectedOptions[1] === 'option1'
    ) {
        scoring += 20;
    }
    if (selectedOptions[2] === 'option2') {
        scoring += 20;
    }
    if (selectedOptions[3] === 'option3') {
        scoring += 20;
    }
    if (selectedOptions[4] === 'option1') {
        scoring += 20;
    }
    if (selectedOptions[5] === 'option2') {
        scoring += 20;
    }
    if (selectedOptions[6] === 'option3') {
        extrabonus = true
    }
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    const img4 = document.getElementById('img4');
    const img5 = document.getElementById('img5');
    const img6 = document.getElementById('img6');
    img1.style.display = 'none';
    img2.style.display = 'none';
    img3.style.display = 'none';
    img4.style.display = 'none';
    img5.style.display = 'none';
    img6.style.display = 'none';

    const bonusElement = document.getElementById('bonus');
    const extraBonusElement = document.getElementById('extrabonus');
    bonusElement.style.display = 'none';
    if (scoring == 0) {
        img1.style.display = 'block';
        img1.scrollIntoView({ behavior: 'smooth' });
    }
    else if (scoring == 20) {
        img2.style.display = 'block';
        img2.scrollIntoView({ behavior: 'smooth' });
    }
    else if (scoring == 40) {
        img3.style.display = 'block';
        img3.scrollIntoView({ behavior: 'smooth' });
    }
    else if (scoring == 60) {
        img4.style.display = 'block';
        img4.scrollIntoView({ behavior: 'smooth' });
    }
    else if (scoring == 80) {
        img5.style.display = 'block';
        img5.scrollIntoView({ behavior: 'smooth' });
    }
    else if (scoring == 100) {
        img6.style.display = 'block';
        img6.scrollIntoView({ behavior: 'smooth' });
    }

    extraBonusElement.style.display = 'none';
    if (scoring >= 60) {
        bonusElement.style.display = 'block';
        if (extrabonus == true) {
            extraBonusElement.style.display = 'block';
        }
    }

};

//function to print a contract based on userinputs
export default function Quiz() {

    return (
        <>
            <div className="layout__wrapper">
                <div className="card">
                    <div className="header">
                        <div className="menu">
                            <a href="/">Homepage</a>
                            <a href="/quiz">Quiz</a>
                        </div>
                    </div>
                    <div className="section__two">
                        <h2>Bitte Ausfüllen, um einen Preis zu gewinnen!</h2>
                        <div className=" questions question__one" data-question-id="1">
                            <p>Welches Vertragsmodell erlaubt einen agilen Funktionsumfang?</p>
                            <div className="options">
                                <label>
                                    <input type="radio" name="question1" value="option1" data-question-id="1" />Agiler Fixpreis
                                </label>
                                <label>
                                    <input type="radio" name="question1" value="option2" data-question-id="1" />Festpreis
                                </label>
                                <label>
                                    <input type="radio" name="question1" value="option3" data-question-id="1" />Beide
                                </label>
                            </div>
                        </div>
                        <div className="questions question__two" data-question-id="2">
                            <p>Welche Annahme liegt einem Projekt auf Basis des agilen Fixpreises zugrunde?</p>
                            <div className="options">
                                <label>
                                    <input type="radio" name="question2" value="option1" data-question-id="2" /> Funktionen sind perfekt definiert
                                </label>
                                <label>
                                    <input type="radio" name="question2" value="option2" data-question-id="2" /> Funktionen sind nicht perfekt definiert
                                </label>
                                <label>
                                    <input type="radio" name="question2" value="option3" data-question-id="2" /> Der Zeitrahmen ist das Wichtigste
                                </label>
                            </div>
                        </div>
                        <div className="questions question__three" data-question-id="3">
                            <p> Woher kommt das Konzept des agilen Festpreises?</p>
                            <div className="options">
                                <label>
                                    <input type="radio" name="question3" value="option1" data-question-id="3" /> Aus dem Buch "der agile Festpreis"
                                </label>
                                <label>
                                    <input type="radio" name="question3" value="option2" data-question-id="3" /> Wurde im Mittelalter beim Handeln mit Kupfermünzen entwickelt
                                </label>
                                <label>
                                    <input type="radio" name="question3" value="option3" data-question-id="3" /> Unklar, wahrscheinlich aus dem agilen Manifesto von 2001
                                </label>
                            </div>
                        </div>
                        <div className="questions question__four" data-question-id="4">
                            <p>Wie groß sollten Tasks maximal sein?</p>
                            <div className="options">
                                <label>
                                    <input type="radio" name="question4" value="option1" data-question-id="4" /> 8 Stunden
                                </label>
                                <label>
                                    <input type="radio" name="question4" value="option2" data-question-id="4" /> 24 Stunden
                                </label>
                                <label>
                                    <input type="radio" name="question4" value="option3" data-question-id="4" /> 40 Stunden
                                </label>
                            </div>
                        </div>
                        <div className="questions question__five" data-question-id="5">
                            <p>Wie gefällt dir dieses Projekt?</p>
                            <div className="options">
                                <label>
                                    <input type="radio" name="question5" value="option1" data-question-id="5" />Sehr gut
                                </label>
                                <label>
                                    <input type="radio" name="question5" value="option2" data-question-id="5" />Ich bin hin und weg und sowieso amazed
                                </label>
                                <label>
                                    <input type="radio" name="question5" value="option3" data-question-id="5" /> Klasse!
                                </label>
                            </div>
                        </div>
                        <div className="questions question__six" data-question-id="6">
                            <p>Bonusfrage - Wer hat dieses Quiz erstellt?</p>
                            <div className="options">
                                <label>
                                    <input type="radio" name="question6" value="option1" data-question-id="6" />Elon Musk
                                </label>
                                <label>
                                    <input type="radio" name="question6" value="option2" data-question-id="6" />Mark Zuckerberg
                                </label>
                                <label>
                                    <input type="radio" name="question6" value="option3" data-question-id="6" />Lorenz Moser
                                </label>
                            </div>
                        </div>
                        <button onClick={handleSubmitQuiz}>Quiz Abschließen</button>
                    </div><div className="section__three">
                        <h2>Du bist % gut</h2>
                        <div id="results">
                            <img id="img1" src="./images/0.png" />
                            <img id="img2" src="./images/20.png" />
                            <img id="img3" src="./images/40.png" />
                            <img id="img4" src="./images/60.png" />
                            <img id="img5" src="./images/80.png" />
                            <img id="img6" src="./images/100.png" />
                        </div>
                    </div>

                    <PriceCalculator />

                    <div class="section__five" id="extrabonus">
                        <h2>Du hast auch den Bonus richtig beantwortet, super! </h2>
                        <div class="section__fivewrapp">
                            <h3>Jetzt kannst du deinen individuellen Agiler-Aixpreis-Vertrag erstellen!</h3>
                            <label>Firmenname:</label>
                            <input type="test" name="company" />
                            <button onClick={handlePrintContract}>Vertrag Drucken</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};