import React, { useState, useEffect } from 'react';
import axios from '../../services/axios';
import LoadingTimer from '../../components/LoadingTimer/LoadingTimer';
import './LastMatches.css';

function LastMatches() {
  const [finishedMatches, setFinishedMatches] = useState([]);

  useEffect(() => {
    const getMatches = async () => {
      const matchesAPI = await axios.get('/match/matches');
      const matches = matchesAPI.data.filter(
        (match) => match.finished === true
      );
      setFinishedMatches(matches);
    };

    getMatches();
  }, []);

  return (
    <div className="lastMatches">
      <h1>Ultimas Partidas</h1>
      <div className="results">
        {finishedMatches.length <= 0 && <LoadingTimer />}
        {finishedMatches.map((f) => (
          <div key={f._id} className="matchCurrent">
            <p style={{ color: 'green' }}>FINALIZADO</p>
            <div className="game">
              <h4 style={{ marginRight: '20px' }}>{f.teams.team1}</h4>
              <div className="scoreboard-finished">
                <span>{f.scoreboard.team1Goals}</span>
                <span style={{ color: '#2596be', margin: '0 10px' }}>x</span>
                <span>{f.scoreboard.team2Goals}</span>
              </div>
              <h4 style={{ marginLeft: '20px' }}>{f.teams.team2}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LastMatches;
