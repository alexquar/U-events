  import React, {useState} from 'react'
  import './App.css';
  import Title from './components/Title'
  import Modal from './components/Modal'
  function App() {
    const subtitle = "Events coming up for U!"
    const [showModal, setShowModal] = useState(false)
    const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1},
    {title: "bowser's live stream", id: 2},
    {title: "race on moo moo farm", id: 3}
  ])

  const handleClick = (id) => {
    setEvents(prevEvents => {
      return prevEvents.filter(event => id !== event.id)
    })
  }

  const handleClose= () => {
    setShowModal(false)
  }

  return (
    <div className="App">
     
      <Title title="U events" subtitle = {subtitle} />
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      )}
      {showEvents && events.map((event, index) => (
        <React.Fragment key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>delete event</button>
        </ React.Fragment>
      ))}
      { showModal && (<Modal handleClose={handleClose}>
       <h2>Terms and Conditions</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error odit nam et reprehenderit quibusdam temporibus officia dolorum quo sint nemo quis, laborum, quasi nisi fugit praesentium debitis repudiandae! Sapiente, omnis.</p>
        <a href="#">find out more...</a>
        </Modal>) }
        <div>
        <button onClick={() => setShowModal(true)}>Show Modal</button>
      </div>
    </div>
  );
}

  export default App;