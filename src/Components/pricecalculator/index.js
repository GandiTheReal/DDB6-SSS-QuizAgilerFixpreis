const handleCalculationAgile = () => {
    
    // Retrieve user selections from the DOM
    const selectedOptionsPrice = {};
    const selectedInputs = document.querySelectorAll('input[type="radio"]:checked');
    selectedInputs.forEach(input => {
      const questionId = input.getAttribute('data-question-id-price');
      const selectedOptionPrice = input.value;
      selectedOptionsPrice[questionId] = selectedOptionPrice;
    });
  
    // In this section i let the user select between different important factors for his project

    var priceOpt1 = 0;
    var priceOpt2 = 0;
    var priceOpt3 = 0;
    var priceOpt4 = 0;

    if(
      selectedOptionsPrice[1] === 'option1' 
    ) {
      priceOpt1 = 1000;
    }
    if(selectedOptionsPrice[1] === 'option2')
    {
      priceOpt1 = 2000;
    }
    if(selectedOptionsPrice[1] === 'option3')
    {
      priceOpt1 = 4000;
    }


    if(selectedOptionsPrice[2] === 'option1')
    {
      priceOpt2 = 2000;
    }
    if(selectedOptionsPrice[2] === 'option2'){
      priceOpt2 = 0;
    }


    if(selectedOptionsPrice[3] === 'option1'){
      priceOpt3 = 0
    }
    if(selectedOptionsPrice[3] === 'option2'){
      priceOpt3 = 1000
    }
    if(selectedOptionsPrice[3] === 'option3'){
      priceOpt3 = 2500
    }
    if(selectedOptionsPrice[3] === 'option4'){
      priceOpt3 = 4500
    }


    if(selectedOptionsPrice[4] === 'option1'){
      priceOpt4 = 0
    }
    if(selectedOptionsPrice[4] === 'option2'){
      priceOpt4 = 1000
    }
    if(selectedOptionsPrice[4] === 'option3'){
      priceOpt4 = 2000
    }

    var resultPrice = priceOpt1 + priceOpt2 + priceOpt3 + priceOpt4;
    const priceResultElement = document.getElementById('priceresult');
    priceResultElement.innerHTML = `<p> Folgender Preis wird für das Projekt anfallen: ${JSON.stringify(resultPrice)}€</p>`;
    priceResultElement.scrollIntoView({ behavior: 'smooth' });
  };
  

//In this function i calculate the approx price of an agile fixpreis project based upon user inputs
export default function PriceCalculator(){
    
    return (
        <div className="section__four" id="bonus">
        <h2>Glückwunsch, du bist so gut, du bekommst ein Goodie!</h2>
        <div className="calculation-questions calcquestion__one" data-question-id-price="1">
          <p>Wie viele Masken gibt es im Projekt?</p>
          <div className="options">
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
        <div className="calculation-questions calcquestion__two" data-question-id-price="2">
          <p>Hast du schon ein Design?</p>
          <div className="options">
            <label>
              <input type="radio" name="calcquestion2" value="option1" data-question-id-price="2"/>Nein bitte mitabschätzen
            </label>
            <label>
              <input type="radio" name="calcquestion2" value="option2" data-question-id-price="2"/>Ja, muss nicht eingepreist sein
            </label>
          </div>
        </div>
        <div className="calculation-questions calcquestion__three" data-question-id-price="3">
          <p>Brauchst du Schnittstellen?</p>
          <div className="options">
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
        <div className="calculation-questions calcquestion__four" data-question-id-price="4">
          <p>Brauchst du Accessibility-Stuff?</p>
          <div className="options">
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
        {/*Here I show the section with the price result based when the corresponding button is clicked */}
        <button onClick={handleCalculationAgile}>Preisberechnung</button> 
        <div id="priceresult"></div>
      </div>
    );
};