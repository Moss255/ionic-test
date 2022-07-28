/* eslint-disable jsx-a11y/anchor-is-valid */
import { IonContent, IonPage } from '@ionic/react';
import { useEffect, useState } from 'react';
import { getTeams } from '../api/Teams';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import './Home.css';

const Home: React.FC = () => {
  const [teams, setTeams] = useState([]);

  const handleListSelect = (item: string) => {
      console.log(item);
  }

  const fetchTeams = async () => {
    const teams = await getTeams();
    setTeams(teams);
  }  

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className='d-flex p-2 justify-content-between'>
          <h1 className='display-2 p-3 home-title'>Feedback Live</h1>
          <img className='w-25' src='https://feedback.swlstg.nhs.uk/f2c4f9df0eab9053e00443e947317acd.svg' alt='Feedback Live'/>
        </div>
        <div className='container'>
        <p>Welcome to Feedback Live - we would like to hear from you!</p>
    <p>Your feedback is important to us and helps us to know what we're doing well and where we need to improve. All feedback is anonymous and you can choose as many subjects as you wish. </p>
          <SearchBar/>
          <Filter/>

          <div className="list-group list-group-flush">
            {teams.map((team: any) => {
              return <a onClick={() => handleListSelect(team.survey)} key={team.name} className="list-group-item list-group-item-action fs-3 home-list-item">{team.name}</a>
            })}
            
          </div>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Home;
