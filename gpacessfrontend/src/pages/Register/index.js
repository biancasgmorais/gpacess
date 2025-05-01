import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { MdEmail, MdPerson } from 'react-icons/md';

import { signUpRequest } from '../../store/modules/auth/action';

import logo from '../../assets/gpacess2.png';
import gpsicslogo from '../../assets/gpsicslogo.png';
import brasaoufersa from '../../assets/brasaoufersa.png';

import { Container, Navigation } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string().email().required('O email é obrigatório!'),
});

export default function Register() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email }) {
    dispatch(signUpRequest(name, email));
  }

  return (
    <Container>
      <Navigation>
        <div id="linha">
          <img src={logo} alt="GPACESS" />
        </div>
        <div id="linha1" />
        <Form schema={schema} onSubmit={handleSubmit}>
          <div className="input-container">
            <i className="fa fa-user icon">
              <MdPerson size={20} />{' '}
            </i>
            <Input
              className="input-field"
              type="text"
              placeholder="Nome completo"
              name="name"
            />
          </div>

          <div className="input-container">
            <i className="fa fa-user icon">
              <MdEmail size={20} />{' '}
            </i>
            <Input
              className="input-field"
              type="email"
              placeholder="Email"
              name="email"
            />
          </div>
          <button type="submit">Criar conta</button>
          <Link to="/">Já tenho login</Link>
        </Form>
        <div id="linha1" />
        <div className="rodape">
          <a href="https://gpsics.ufersa.edu.br/">
            <img id="img1" src={gpsicslogo} alt="gpsicslogo" />
          </a>
          <a href="https://ufersa.edu.br/">
            <img id="img2" src={brasaoufersa} alt="UFERSA" />
          </a>
        </div>
      </Navigation>
    </Container>
  );
}
