import React from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { MdEmail } from 'react-icons/md';

import { useDispatch } from 'react-redux';

import { forgotPass } from '../../store/modules/user/action';

import logo from '../../assets/gpacess2.png';
import gpsicslogo from '../../assets/gpsicslogo.png';
import brasaoufersa from '../../assets/brasaoufersa.png';

const schema = Yup.object().shape({
  email: Yup.string().email().required('E-mail é obrigatório'),
});

export default function ForgotPass() {
  const dispatch = useDispatch();

  function handleSubmit({ email }) {
    dispatch(forgotPass(email));
  }

  return (
    <>
      <div id="linha">
        <img src={logo} alt="GPACESS" />
      </div>
      <div id="linha1" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <div className="input-container">
          <i className="fa fa-user icon">
            <MdEmail size={20} />{' '}
          </i>
          <Input
            input
            className="input-field"
            type="text"
            placeholder="Email"
            name="email"
          />
        </div>
        <button type="submit">Recuperar</button>

        <Link to="/">Voltar a tela inicial</Link>
        <Link to="/register">Cadastre-se</Link>
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
    </>
  );
}
