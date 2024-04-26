import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"


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
  if(
    result.selectedOptions[0] == 'option1' 
  ) {
    scoring += 10;
  }
  if(result.selectedOptions[1] == 'option2')
  {
    scoring +=10;
  }
  if(result.selectedOptions[2] == 'option3')
  {
    result +=10;
  }
  if(result.selectedOptions[3] == 'option1')
  {
    result +=10;
  }
  if(result.selectedOptions[4] == 'option2'){
    result += 10;
  }
  // Log the result to the console (you can do other actions like sending it to a server)
  console.log(result);
};


function App() {
  const [stores, setStores] = useState(DATA)

  const handleDragDrop = (results) => {
    console.log("Hallo", results);

    const { source, destination, type } = results;

    if(!destination) return;

    if(source.droppableId === destination.droppableId &&
        source.index === destination.index)
      return;

    if(type === 'group'){
      const reorderedStores = [...stores];
      const sourceIndex = source.index;
      const destinationIndex = destination.index;

      const [removedStore] = reorderedStores.splice(sourceIndex, 1);

      reorderedStores.splice(destinationIndex, 0, removedStore)

      return setStores(reorderedStores);
    }

    console.log({destination, source})

    const storeSourceIndex = stores.findIndex((store) => store.id === source.droppableId);
    const storeDestinationIndex = stores.findIndex((store) => store.id === destination.droppableId);

    const newSourceItems = [...stores[storeSourceIndex].items]
    const newDestinationItems = source.droppableId !== destination.droppableId ? [...stores[storeDestinationIndex].items] : newSourceItems;

    const [removedItem] = newSourceItems.splice(source.index, 1)
    newDestinationItems.splice(destination.index, 0, removedItem)

    const newStores = [...stores]

    newStores[storeSourceIndex] = {
      ...stores[storeSourceIndex],
      items: newSourceItems
    }

    newStores[storeDestinationIndex] = {
      ...stores[storeDestinationIndex],
      items: newDestinationItems
    }

    setStores(newStores)
  }


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
        </div>
      </div>
  );

  
}



export default App;
