import React, { useState, useEffect } from "react"
import API from "../utils/API"
import "../index.css"
import ShakerAnim from "../components/ShakerAnim"
import Nav from "../components/Nav";
import ModalShow from "../components/Modal";
import { Carousel } from "react-bootstrap";


const Shaker = () => {


//Loads a single theme and its activities based on a click
const [currentShaker, setCurrentShaker] = useState({
  theme: "",
  activities: [],
  currentActivity: ""
})

//Loads all themes and activities for shaker page
const [shakers, setShakers] = useState({
  theme: "",
  activities: []
})

//Determines if the modal is showing
const [modalOpen, setModalOpen] = useState({
  isOpen: false
})

useEffect(() => {
  loadThemes()
}, [])

useEffect(() => {

  if (currentShaker.theme){
    let timer1 = setTimeout(() => setModalOpen({isOpen: true}), 1000)
    return () => {
      clearTimeout(timer1)
    }
  }
}, [currentShaker.theme])

const loadThemes = () => {
  API.getThemes().then(res => {
    setShakers(res.data)
  }).catch(err => console.log(err))
}

//This sets the state for the current shaker to populate the modal
function chooseTheme(theme){
  API.getActivitiesByTheme(theme).then(res => { 
    setCurrentShaker({theme: [theme], activities: res.data[0].activities, currentActivity: res.data[0].activities[0].name})
  }).catch(err => console.log(err))
}

function closeModal(){
  setModalOpen({isOpen: false})
}

return(
  <>
  <Nav />
<center>
  {shakers.length ? (
     <Carousel controls={true} slide={true} indicators={false} >
     {shakers.map(shaker => (
       <Carousel.Item >
       <ShakerAnim chooseTheme={chooseTheme} theme={shaker.theme}/>
       <ModalShow isOpen={modalOpen.isOpen} closeModal={closeModal} currentShaker={currentShaker}/>
     </Carousel.Item>
     ))}
      </Carousel>
  ) : (
    <h3>nothing to see here</h3>
  )}
  </center>
  </>
)
}

export default Shaker

