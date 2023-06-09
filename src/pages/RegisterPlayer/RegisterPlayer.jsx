import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../components/Header/Header';
import Loading from '../../components/Loading/Loading';
import './RegisterPlayer.css';
import axios from '../../services/axios';

function RegisterPlayer() {
  const [name, setName] = useState('');
  const [team, setTeam] = useState('');
  const [numberTshirt, setNumberTshirt] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const { data } = await axios.post('player', {
      name,
      team,
      numberTshirt,
    });

    if (data.msg) {
      setLoading(false);
      toast.error(data.msg);
    } else {
      setLoading(false);
      toast.success('Tudo certo!');
    }
  };

  return (
    <>
      <Header />
      {loading && <Loading />}
      <ToastContainer />
      <div className="registerTeam-main">
        <div className="registerTeam">
          <h1>Registre o jogador</h1>
          <form action="/criarJogador" onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              placeholder="Nome:"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              value={team}
              placeholder="Time:"
              name="team"
              id="team"
              onChange={(e) => setTeam(e.target.value)}
              required
            />
            <input
              type="number"
              value={numberTshirt}
              placeholder="Número da camisa:"
              name="numberTshirt"
              id="numberTshirt"
              onChange={(e) => setNumberTshirt(e.target.value)}
              required
            />
            <div className="team-button">
              <button type="submit">
                <span>Registrar jogador</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterPlayer;
