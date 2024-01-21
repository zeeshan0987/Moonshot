// import {useContext} from 'react'
// import AppContext from '../contex/AppContext'
import Searchbox from "../components/Searchbox"
import Trending from "../components/Trending"

const Home = () => {

  return (
    <div>
      <div className="container">
        <div className="home_header">
        Discover over 2,000,000 free Stock Images
        </div>
      </div>
      <Searchbox placeholder="Search"/>
      <div className="container">
        <Trending/>
      </div>
    </div>
  )
}

export default Home
