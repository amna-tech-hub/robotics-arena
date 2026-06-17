import React from 'react'
import BotLeagueDetails from "../components/page1components/BotLeagueDetails";
import CompetitionDisciplines from "../components/page1components/CompetitionDisciplines";
import CompetitionsEvents from "../components/page1components/CompetitionsEvents";
import Hero from "../components/page1components/Hero";
import Join from "../components/page1components/Join";
import LeagueAdvantage from "../components/page1components/LeagueAdvantage";
import Footer from "../layout/Footer";
import Header from '../layout/Header';
import UserJourney from '../components/page1components/UserJourney';
function Home() {
  return (
       <>
      <Header/>
      <Hero />
      <CompetitionsEvents />
      <UserJourney/>
      <BotLeagueDetails/>
      <CompetitionDisciplines/>
      <LeagueAdvantage/>
      <Join/>
      <Footer/>
    </>
  )
}

export default Home