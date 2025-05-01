/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { MdModeEdit } from 'react-icons/md';
import { HiOutlineUsers } from 'react-icons/hi';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Container } from './styles';

import gpsicslogo from '../../assets/gpsicslogo.png';
import searchFunction from '../../components/searchFunction';
import toPdf from '../../components/toPdf';

export default function Management() {
  const profile = useSelector((state) => state.user.profile);
  const [usage, setUsage] = useState([]);

  useEffect(() => {
    const loadDados = async () => {
      const response = await api.get('usage');

      setUsage(response.data);
    };
    loadDados();
  }, []);

  return (
    <>
      <Container>
        <div className="gerenciamento">
          <h1>Olá, {profile.name}, seja bem-vind@</h1>
          <Link id="link1" to="/updates">
            <MdModeEdit color="#ffff" size={20} />
            Meu perfil
          </Link>
          <Link id="link2" to="/listusers">
            <HiOutlineUsers color="#ffff" size={20} />
            Gerenciar Usuários
          </Link>
        </div>

        <div className="nv">
          <i className="fa fa-user icon">
            <AiOutlineSearch size={20} />{' '}
          </i>
          <input id="myInput" placeholder="Busca" onChange={searchFunction} />
        </div>
        <div className="tabela">
          <table id="myTable">
            <tr className="header">
              <th>Nome</th>
              <th>TAG</th>
              <th>Data do uso</th>
              <th>Hora do uso</th>
            </tr>

            {usage.map((usages) => (
              <tr key={usages.id}>
                <td>{usages.name_user}</td>
                <td>{usages.tag_user}</td>
                <td>{usages.dateusage}</td>
                <td>{usages.hourusage}</td>
              </tr>
            ))}
          </table>
        </div>
        <button type="button" onClick={toPdf}>
          Gerar Relatório (PDF)
        </button>
        <img src={gpsicslogo} alt="gpsicslogo" />
      </Container>
    </>
  );
}
