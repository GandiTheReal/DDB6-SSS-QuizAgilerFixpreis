import './App.css';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import ReactDOMServer from 'react-dom/server';

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
  const result = {
    selectedOptions: selectedOptions
    // You can add more properties to the result object if needed
  };
  var scoring = 0;
  var extrabonus = false;
  if(
    result.selectedOptions[1] === 'option1' 
  ) {
    scoring += 20;
  }
  if(result.selectedOptions[2] === 'option2')
  {
    scoring +=20;
  }
  if(result.selectedOptions[3] === 'option3')
  {
    scoring +=20;
  }
  if(result.selectedOptions[4] === 'option1')
  {
    scoring +=20;
  }
  if(result.selectedOptions[5] === 'option2'){
    scoring += 20;
  }
  if(result.selectedOptions[6] === 'option3'){
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
  if(scoring == 0){
    img1.style.display = 'block';
    img1.scrollIntoView({ behavior: 'smooth' });
  }
  else if(scoring == 20){
    img2.style.display = 'block';
    img2.scrollIntoView({ behavior: 'smooth' });
  }
  else if(scoring == 40){
    img3.style.display = 'block';
    img3.scrollIntoView({ behavior: 'smooth' });
  }
  else if(scoring == 60){
    img4.style.display = 'block';
    img4.scrollIntoView({ behavior: 'smooth' });
  }
  else if(scoring == 80){
    img5.style.display = 'block';
    img5.scrollIntoView({ behavior: 'smooth' });
  }
  else if(scoring == 100){
    img6.style.display = 'block';
    img6.scrollIntoView({ behavior: 'smooth' });
  }

  extraBonusElement.style.display = 'none';
  if(scoring >= 60){
    bonusElement.style.display = 'block';
    if(extrabonus == true){
      extraBonusElement.style.display = 'block';
    }
  }

};

const handleCalculationAgile = () => {
  // Retrieve user selections from the DOM
  const selectedOptionsPrice = {};
  const selectedInputs = document.querySelectorAll('input[type="radio"]:checked');
  selectedInputs.forEach(input => {
    const questionId = input.getAttribute('data-question-id-price');
    const selectedOptionPrice = input.value;
    selectedOptionsPrice[questionId] = selectedOptionPrice;
  });

  // Calculate the final result based on user selections
  const result = {
    selectedOptionsPrice: selectedOptionsPrice
    // You can add more properties to the result object if needed
  };

  var priceOpt1 = 0;
  var priceOpt2 = 0;
  var priceOpt3 = 0;
  var priceOpt4 = 0;
  console.log(result);
  if(
    result.selectedOptionsPrice[1] === 'option1' 
  ) {
    priceOpt1 = 1000;
  }
  if(result.selectedOptionsPrice[1] === 'option2')
  {
    priceOpt1 = 2000;
  }
  if(result.selectedOptionsPrice[1] === 'option3')
  {
    priceOpt1 = 4000;
  }
  if(result.selectedOptionsPrice[2] === 'option1')
  {
    priceOpt2 = 2000;
  }
  if(result.selectedOptionsPrice[2] === 'option2'){
    priceOpt2 = 0;
  }
  if(result.selectedOptionsPrice[3] === 'option1'){
    priceOpt3 = 0
  }
  if(result.selectedOptionsPrice[3] === 'option2'){
    priceOpt3 = 1000
  }
  if(result.selectedOptionsPrice[3] === 'option3'){
    priceOpt3 = 2500
  }
  if(result.selectedOptionsPrice[3] === 'option4'){
    priceOpt3 = 4500
  }
  if(result.selectedOptionsPrice[4] === 'option1'){
    priceOpt4 = 0
  }
  if(result.selectedOptionsPrice[4] === 'option2'){
    priceOpt4 = 1000
  }
  if(result.selectedOptionsPrice[4] === 'option3'){
    priceOpt4 = 2000
  }
  var resultPrice = priceOpt1 + priceOpt2 + priceOpt3 + priceOpt4;
  const priceResultElement = document.getElementById('priceresult');
  priceResultElement.innerHTML = `<p> Folgender Preis wird für das Projekt anfallen: ${JSON.stringify(resultPrice)}€</p>`;
  priceResultElement.scrollIntoView({ behavior: 'smooth' });
};


function App() {
  const MyDocument = ({companyValue}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Company: {companyValue}</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
  );

const handlePrintContract = async () => {
  const companyInput = document.querySelector('input[name="company"]');
  const companyValue = companyInput.value;

  const pdfViewer = (
    <PDFViewer width="100%" height="100%">
      <MyDocument companyValue={companyValue}/>
    </PDFViewer>
  );

  const pdfContent = ReactDOMServer.renderToString(pdfViewer);

  const container = document.createElement('div');
  container.innerHTML = pdfContent;

  try {
    document.body.appendChild(container);
    await new Promise(resolve=>setTimeout(resolve, 1000));
    window.print()
  }
  catch(error){
    console.error('error generating pdf', error);
    document.body.removeChild(container);
  }

};
  return (
// Content-Section with Information for the user 
      <div className="layout__wrapper">
        <div className="card">
          <div className="header">
            <div class="header__h1wrapp"><h1 class="header__h1">Agiler Fixpreis Quiz</h1></div>
            <div class="layout__banner">
              <img src="./images/agile3.png"/>
            </div>
          </div>
          <div class="content">
            <div class="section__one">
              <p>
             Der Agile Fixpreis ist ein Vertragskonzept in der agilen Softwareentwicklung. Er zeichnet sich dadurch aus, dass am Anfang allen Parteien bekannt ist,  
             dass die Funktionalitäten nicht vollkommen ausdefiniert sind. Trotzdem steht das Budget fest. Im Gegensatz dazu gibt es den Fixpreis, welcher 
             davon ausgeht, dass die Funktionalitäten perfekt definiert sind. Da Funktionalitäten in Software-Projekten vor dem Projekt in der Praxis nie 
             vollkommen sind, führt das im Laufe des Projektes zu vielen notwendigen Abstimmungen - so genannten Claim Management Meetings. 
             Der Agile Fixpreis geht damit anders um - es gibt ein (Stunden)Budget pro Feature, und alle Funktionalitäten, die sich in diesem Stundenkontingent
             ausgehen, können ohne Zusatzkosten realisiert werden. Falls es Funktionalitäten gibt, die über das Stundenbudget hinausgehen, können diese
             entweder auf Kosten von zusätzlichen Funktionalitäten aus einem anderen Feature oder durch eine Zusatzbestellung umgesetzt werden.  
              </p>
              <div class="video"> 
                Video here
              </div>
              <div class="matrix">
              <table>
                <tr>
                  <th></th>
                  <th scope="col">Agiler Fixpreis</th>
                  <th scope="col"> Festpreis</th>
                </tr>
                <tr>
                  <th scope="row">Zusatz-Funktionen möglich</th>
                  <td class="green">✓</td>
                  <td class="red">x</td>
                </tr>
                <tr>
                  <th scope="row">Fixes Budget</th>
                  <td class="green">✓</td>
                  <td class="green">✓</td>
                </tr>
                <tr>
                  <th scope="row">Fixe Timeline</th>
                  <td class="green">✓</td>
                  <td class="green">✓</td>
                </tr>
              </table>
              </div>
            </div>
          </div>
          <div class="section__two">
            <h2>Bitte Ausfüllen, um einen Preis zu gewinnen!</h2>
            <div class=" questions question__one" data-question-id="1">
              <p>Welches Vertragsmodell erlaubt einen agilen Funktionsumfang?</p>
              <div class="options">
                <label>
                  <input type="radio" name="question1" value="Festpreis" data-question-id="1"/>Option1
                </label>
                <label>
                  <input type="radio" name="question1" value="Agiler Fixpreis" data-question-id="1"/>Option2
                </label>
                <label>
                  <input type="radio" name="question1" value="Beide" data-question-id="1"/>Option3
                </label>
              </div>
            </div>
            <div class="questions question__two" data-question-id="2">
              <p>Welche Annahme liegt einem Projekt auf Basis des agilen Fixpreises zugrunde?</p>
              <div class="options">
                <label>
                  <input type="radio" name="question2" value="Budget ist dehnbahr" data-question-id="2"/>Option1
                </label>
                <label>
                  <input type="radio" name="question2" value="option2" data-question-id="2"/>Option2
                </label>
                <label>
                  <input type="radio" name="question2" value="option3" data-question-id="2"/>Option3                
                </label>
              </div>
            </div>
            <div class="questions question__three" data-question-id="3">
              <p>This is question 3</p>
              <div class="options">
                <label>
                  <input type="radio" name="question3" value="option1" data-question-id="3"/>Option1
                </label>
                <label>
                  <input type="radio" name="question3" value="option2" data-question-id="3"/>Option2
                </label>
                <label>
                  <input type="radio" name="question3" value="option3" data-question-id="3"/>Option3
                </label>
              </div>
            </div>
            <div class="questions question__four" data-question-id="4">
              <p>This is question 4</p>
              <div class="options">
                <label>
                  <input type="radio" name="question4" value="option1" data-question-id="4"/>Option1
                </label>
                <label>
                  <input type="radio" name="question4" value="option2" data-question-id="4"/>Option2
                </label>
                <label>
                  <input type="radio" name="question4" value="option3" data-question-id="4"/>Option3
                </label>
              </div>
            </div>
            <div class="questions question__five" data-question-id="5">
              <p>This is question 5</p>
              <div class="options">
                <label>
                  <input type="radio" name="question5" value="option1" data-question-id="5"/>Option1
                </label>
                <label>
                  <input type="radio" name="question5" value="option2" data-question-id="5"/>Option2
                </label>
                <label>
                  <input type="radio" name="question5" value="option3" data-question-id="5"/>Option3
                </label>
              </div>
            </div>
            <div class="questions question__six" data-question-id="6">
              <p>This is question 6</p>
              <div class="options">
                <label>
                  <input type="radio" name="question6" value="option1" data-question-id="6"/>Option1
                </label>
                <label>
                  <input type="radio" name="question6" value="option2" data-question-id="6"/>Option2
                </label>
                <label>
                  <input type="radio" name="question6" value="option3" data-question-id="6"/>Option3
                </label>
              </div>
            </div>
            <button onClick={handleSubmitQuiz}>Quiz Abschließen</button>
          </div>
          <div class="section__three">
            <h2>Du bist % gut</h2>
            <div id="results">
              <img id="img1" src="./images/0.png"/>
              <img id="img2" src="./images/20.png"/>
              <img id="img3" src="./images/40.png"/>
              <img id="img4" src="./images/60.png"/>
              <img id="img5" src="./images/80.png"/>
              <img id="img6" src="./images/100.png"/>
            </div>
          </div>
          <div class="section__four" id="bonus">
            <h2>Glückwunsch, du bist so gut, du bekommst ein Goodie!</h2>
            <div class="calculation-questions calcquestion__one" data-question-id-price="1">
              <p>Wie viele Masken gibt es im Projekt?</p>
              <div class="options">
                <label>
                  <input type="radio" name="question1" value="option1" data-question-id-price="1"/>Circa 5
                </label>
                <label>
                  <input type="radio" name="question1" value="option2" data-question-id-price="1"/>Circa 10
                </label>
                <label>
                  <input type="radio" name="question1" value="option3" data-question-id-price="1"/>Circa 20
                </label>
              </div>
            </div>
            <div class="calculation-questions calcquestion__two" data-question-id-price="2">
              <p>Hast du schon ein Design?</p>
              <div class="options">
                <label>
                  <input type="radio" name="calcquestion2" value="option1" data-question-id-price="2"/>Nein bitte mitabschätzen
                </label>
                <label>
                  <input type="radio" name="calcquestion2" value="option2" data-question-id-price="2"/>Ja, muss nicht eingepreist sein
                </label>
              </div>
            </div>
            <div class="calculation-questions calcquestion__three" data-question-id-price="3">
              <p>Brauchst du Schnittstellen?</p>
              <div class="options">
                <label>
                  <input type="radio" name="calcquestion3" value="option1" data-question-id-price="3"/>Nein
                </label>
                <label>
                  <input type="radio" name="calcquestion3" value="option2" data-question-id-price="3"/>Ja, circa eine
                </label>
                <label>
                  <input type="radio" name="calcquestion3" value="option3" data-question-id-price="3"/>Ja, circa drei
                </label>
                <label>
                  <input type="radio" name="calcquestion3" value="option4" data-question-id-price="3"/>Ja, fünf oder mehr
                </label>
              </div>
            </div>
            <div class="calculation-questions calcquestion__four" data-question-id-price="4">
              <p>Brauchst du Accessibility-Stuff?</p>
              <div class="options">
                <label>
                  <input type="radio" name="calcquestion4" value="option1" data-question-id-price="4"/>Nein
                </label>
                <label>
                  <input type="radio" name="calcquestion4" value="option2" data-question-id-price="4"/>Ja, AA
                </label>
                <label>
                  <input type="radio" name="calcquestion4" value="option3" data-question-id-price="4"/>Ja, AAA
                </label>
              </div>
            </div>
            <button onClick={handleCalculationAgile}>Preisberechnung</button>
            <div id="priceresult"></div>
          </div>
          <div class="section__five" id="extrabonus">
            <h2>Du hast auch den Bonus richtig beantwortet, super! </h2>
            <div class="section__fivewrapp">
              <h3>Jetzt kannst du deinen individuellen Agiler-Aixpreis-Vertrag erstellen!</h3>
              <label>Firmenname:</label>
                    <input type="test" name="company"/>
              <button onClick={handlePrintContract}>Vertrag Drucken</button>
            </div>

          </div>
        </div>
      </div>
  );  
}



export default App;
