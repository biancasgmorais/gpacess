import React, { useState, useEffect } from 'react';
import { MdModeEdit, MdDeleteForever } from 'react-icons/md';
import { AiOutlineSearch, AiFillUnlock } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../services/api';

import { Container } from './styles';

import voltar from '../../assets/voltar.png';

import searchFunction from '../../components/searchFunction';

export default function ListUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const response = await api.get(`users`);
      setUsers(response.data);
    };
    loadUsers();
  }, []);

  const handleDelete = async (user) => {
    try {
      if (window.confirm(`Confirma a exclusão do usuário?`)) {
        await api.delete(`users/${user.id}`);

        const newuserList = users.filter(
          (userParam) => userParam.id !== user.id
        );

        setUsers(newuserList);

        toast.success(`Usuário excluido com sucesso!`);
      }
    } catch (error) {
      toast.error(
        `Erro ao deletar usuário, verifique os dados ou tente novamente`
      );
    }
  };

  return (
    <Container>
      <h1>Usuários</h1>

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
            <th>E-mail</th>
            <th>TAG</th>
            <th>Editar/Apagar</th>
            <th>Cadastra TAG</th>
          </tr>

          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.tag}</td>
              <td>
                <Link
                  to={{
                    pathname: `/edituser/${user.id}`,
                    state: { userLocated: user },
                  }}
                >
                  <MdModeEdit color="#373545" size={30} />
                </Link>
                <button type="button" onClick={() => handleDelete(user)}>
                  <MdDeleteForever color="#373545" size={30} />
                </button>
              </td>
              <td>
                <Link
                  to={{
                    pathname: `/editusertag/${user.id}`,
                    state: { userLocated: user },
                  }}
                >
                  <AiFillUnlock color="#373545" size={30} />
                </Link>
              </td>
            </tr>
          ))}
        </table>
      </div>

      <div className="back">
        <Link to="/management">
          <img src={voltar} alt="voltar" />
        </Link>
      </div>
    </Container>
  );
}
