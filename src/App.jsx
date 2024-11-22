import { useState } from "react"
import Display from "./components/Display"
import MealCard from "./components/MealCard"
import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar"
import SliderComponent from "./components/SliderComponent"



function App() {
  const [searchInput, setSearchInput] = useState('')

  return (
    <>
    <Navbar/>
    <SliderComponent/>
    <SearchBar SetsearchInput={setSearchInput}/>
    <Display searchInput={searchInput}/>
    </>
  )
}

export default App
