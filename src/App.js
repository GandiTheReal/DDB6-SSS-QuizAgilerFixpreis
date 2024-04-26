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
          <DragDropContext onDragEnd = {handleDragDrop}>
          <div className="header">
            <h1>Shopping List</h1>
          </div>
          <Droppable droppableId="ROOT" type="group">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {stores.map( (store, index) => (
                  <Draggable draggableId={store.id} key={store.id} index={index}>
                    {(provided) => (
                      <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                        {/* <h3>{store.name}</h3> */}
                        <StoreList {...store} />
                      </div>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
              </div>
            )}
          </Droppable>
          </DragDropContext>
        </div>
      </div>
  );
}

function StoreList({name, items, id}){
  return (
      <Droppable droppableId={id}>
        {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <div className="store-container">
                <h3>{name}</h3>
              </div>
              <div className="items-container">
                {items.map((item, index) => (
                  <Draggable draggableId={item.id} key={item.id} index={index}>
                    {(provided) => (
                        <div className="item-container" {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                          <h4>{item.name} x {item.amount}</h4>
                        </div>
                    )}
                  </Draggable>
                ))}
              </div>
              {provided.placeholder}
            </div>
        )}
      </Droppable>
  )
}

export default App;
