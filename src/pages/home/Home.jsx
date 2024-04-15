
import './Home.scss'
import TopRated from './TopRating/TopTated'
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './tranding/Tranding'
import Popular from "./popular/Popular"
function Home() {
  return (
    <>
    <HeroBanner/>
    <Trending/>
    <TopRated/>
    <Popular/>
    </>
    
  )
}

export default Home