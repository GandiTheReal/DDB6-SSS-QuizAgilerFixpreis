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



const DATA = [
  {
    id: "0e2f0db1-5457-46b0-949e-8032d2f9997a",
    name: "Walmart",
    items: [
      { id: "26fd50b3-3841-496e-8b32-73636f6f4197", name: "13% Milk", amount: "9"},
      { id: "b0ee9d50-d0a6-46f8-96e3-7f3f0f9a2525", name: "Butter", amount: "10"},
    ],
    tint: 1,
  },
  {
    id: "487f68b4-1746-438c-920e-d67b7df46247",
    name: "Indigo",
    items: [
      {
        id: "95ee6a5d-f927-4579-8c15-2b4eb86210ae", name: "Designing Data Intensive Applications", amount: "11",
      },
      { id: "5bee94eb-6bde-4411-b438-1c37fa6af364", name: "Atomic Habits", amount: "12" },
    ],
    tint: 2,
  },
  {
    id: "25daffdc-aae0-4d73-bd31-43f73101e7c0",
    name: "Lowes",
    items: [
      { id: "960cbbcf-89a0-4d79-aa8e-56abbc15eacc", name: "Workbench", amount: "13" },
      { id: "d3edf796-6449-4931-a777-ff66965a025b", name: "Hammer", amount: "14" },
    ],
    tint: 3,
  },
];

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
  priceResultElement.innerHTML = `<p>Your fix price agile is around: ${JSON.stringify(resultPrice)}€</p>`;
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
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem 
              ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore 
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata 
              sanctus est Lorem ipsum dolor sit amet.
              </p>
              <div class="video">
                Video here
              </div>
              <div class="matrix">
              <table>
                <tr>
                  <th></th>
                  <th scope="col">header1</th>
                  <th scope="col">header2</th>
                  <th scope="col">header3</th>
                </tr>
                <tr>
                  <th scope="row">header 1</th>
                  <td class="green">✓</td>
                  <td class="red">x</td>
                  <td class="green">✓</td>
                </tr>
                <tr>
                  <th scope="row">header 2</th>
                  <td class="red">x</td>
                  <td class="green">✓</td>
                  <td class="red">x</td>
                </tr>
                <tr>
                  <th scope="row">header 3</th>
                  <td class="green">✓</td>
                  <td class="red">x</td>
                  <td class="red">x</td>
                </tr>
              </table>
              </div>
            </div>
          </div>
          <div class="section__two">
            <h2>Please fill in the quiz</h2>
            <div class=" questions question__one" data-question-id="1">
              <p>This is question 1</p>
              <div class="options">
                <label>
                  <input type="radio" name="question1" value="option1" data-question-id="1"/>Option1
                </label>
                <label>
                  <input type="radio" name="question1" value="option2" data-question-id="1"/>Option2
                </label>
                <label>
                  <input type="radio" name="question1" value="option3" data-question-id="1"/>Option3
                </label>
              </div>
            </div>
            <div class="questions question__two" data-question-id="2">
              <p>This is question 2</p>
              <div class="options">
                <label>
                  <input type="radio" name="question2" value="option1" data-question-id="2"/>Option1
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
            <button onClick={handleSubmitQuiz}>Submit Quiz</button>
          </div>
          <div class="section__three">
            <h2>Quiz results in %</h2>
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
            <h2>You are given the possibility to calculate a fixed price agile project since you answered many questions right</h2>
            <div class="calculation-questions calcquestion__one" data-question-id-price="1">
              <p>How many masks do you have</p>
              <div class="options">
                <label>
                  <input type="radio" name="question1" value="option1" data-question-id-price="1"/>Around 5
                </label>
                <label>
                  <input type="radio" name="question1" value="option2" data-question-id-price="1"/>Around 10
                </label>
                <label>
                  <input type="radio" name="question1" value="option3" data-question-id-price="1"/>Around 20
                </label>
              </div>
            </div>
            <div class="calculation-questions calcquestion__two" data-question-id-price="2">
              <p>Do you have a template design?</p>
              <div class="options">
                <label>
                  <input type="radio" name="calcquestion2" value="option1" data-question-id-price="2"/>No please include it in price
                </label>
                <label>
                  <input type="radio" name="calcquestion2" value="option2" data-question-id-price="2"/>Yes, please no effort required
                </label>
              </div>
            </div>
            <div class="calculation-questions calcquestion__three" data-question-id-price="3">
              <p>Does the webapp require external middleware connections?</p>
              <div class="options">
                <label>
                  <input type="radio" name="calcquestion3" value="option1" data-question-id-price="3"/>No
                </label>
                <label>
                  <input type="radio" name="calcquestion3" value="option2" data-question-id-price="3"/>Yes, around 1 external connection
                </label>
                <label>
                  <input type="radio" name="calcquestion3" value="option3" data-question-id-price="3"/>Yes, around 3 external connection
                </label>
                <label>
                  <input type="radio" name="calcquestion3" value="option4" data-question-id-price="3"/>Yes, more then 5 external connection
                </label>
              </div>
            </div>
            <div class="calculation-questions calcquestion__four" data-question-id-price="4">
              <p>Does the webapp require accesibility implementation?</p>
              <div class="options">
                <label>
                  <input type="radio" name="calcquestion4" value="option1" data-question-id-price="4"/>No
                </label>
                <label>
                  <input type="radio" name="calcquestion4" value="option2" data-question-id-price="4"/>Yes, midd level
                </label>
                <label>
                  <input type="radio" name="calcquestion4" value="option3" data-question-id-price="4"/>Yes, expert level
                </label>
              </div>
            </div>
            <button onClick={handleCalculationAgile}>Calculate Fix Price</button>
            <div id="priceresult"></div>
          </div>
          <div class="section__five" id="extrabonus">
            <h2>You answered the bonus question correctly</h2>
            <div class="section__fivewrapp">
              <h3>You get the possibility of printing your own non binding contract here</h3>
              <label>Please add your company name</label>
                    <input type="test" name="company"/>
              <button onClick={handlePrintContract}>Print contract</button>
            </div>

          </div>
        </div>
      </div>
  );  
}



export default App;
