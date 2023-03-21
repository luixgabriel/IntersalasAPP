import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import './Team.css';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const getTeams = async () => {
      const response = await fetch(
        'https://apiintersala-production.up.railway.app/'
      );
      const teamsAPI = await response.json();
      setTeams(teamsAPI);
    };

    getTeams();
  }, []);

  console.log(teams);
  return (
    <>
      <Header />
      <div className="players-main">
        <div className="section-players">
          <h1>Times Cadastrados:</h1>
          <div className="teams">
            <div className="list-teams">
              <img
                src="https://logodownload.org/wp-content/uploads/2016/09/vasco-logo-0.png"
                alt="vasco"
              />
              <h2>VASCO</h2>
              <span>Gigante da colina</span>
              <div className="team-buttons">
                <button type="submit">Editar</button>
                <button type="submit">Apagar</button>
                <button type="submit">Mais informações</button>
              </div>
            </div>

            <div className="list-teams">
              <img
                src="https://logodownload.org/wp-content/uploads/2016/09/vasco-logo-0.png"
                alt="vasco"
              />
              <h2>VASCO</h2>
              <span>Gigante da colina</span>
              <div className="team-buttons">
                <button type="submit">Editar</button>
                <button type="submit">Apagar</button>
                <button type="submit">Mais informações</button>
              </div>
            </div>

            <div className="list-teams">
              <img
                src="https://logodownload.org/wp-content/uploads/2016/09/vasco-logo-0.png"
                alt="vasco"
              />
              <h2>VASCO</h2>
              <span>Gigante da colina</span>
              <div className="team-buttons">
                <button type="submit">Editar</button>
                <button type="submit">Apagar</button>
                <button type="submit">Mais informações</button>
              </div>
            </div>

            <div className="list-teams">
              <img
                src="https://logodownload.org/wp-content/uploads/2016/09/vasco-logo-0.png"
                alt="vasco"
              />
              <h2>VASCO</h2>
              <span>Gigante da colina</span>
              <div className="team-buttons">
                <button type="submit">Editar</button>
                <button type="submit">Apagar</button>
                <button type="submit">Mais informações</button>
              </div>
            </div>

            <div className="list-teams">
              <img
                src="https://logodownload.org/wp-content/uploads/2016/09/vasco-logo-0.png"
                alt="vasco"
              />
              <h2>VASCO</h2>
              <span>Gigante da colina</span>
              <div className="team-buttons">
                <button type="submit">Editar</button>
                <button type="submit">Apagar</button>
                <button type="submit">Mais informações</button>
              </div>
            </div>

            <div className="list-teams">
              <img
                src="https://logodownload.org/wp-content/uploads/2016/09/vasco-logo-0.png"
                alt="vasco"
              />
              <h2>VASCO</h2>
              <span>Gigante da colina</span>
              <div className="team-buttons">
                <button type="submit">Editar</button>
                <button type="submit">Apagar</button>
                <button type="submit">Mais informações</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Teams;
