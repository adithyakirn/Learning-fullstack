import BestSeller from "../components/BestSeller"
import Hero from "../components/Hero"
import LatestCollction from "../components/LatestCollction"
import NewsLetterBox from "../components/NewsLetterBox"
import OurPolicies from "../components/OurPolicies"

const Home = () => {
  return (
    <>
        <Hero/>
        <LatestCollction/>
        <BestSeller/>
        <OurPolicies/>
        <NewsLetterBox/>
    </>
  )
}

export default Home