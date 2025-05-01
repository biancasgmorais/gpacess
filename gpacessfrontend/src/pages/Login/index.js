import React from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';

import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { signInRequest } from '../../store/modules/auth/action';

import logo from '../../assets/gpacess2.png';
import gpsicslogo from '../../assets/gpsicslogo.png';
import brasaoufersa from '../../assets/brasaoufersa.png';

const schema = Yup.object().shape({
  email: Yup.string().email().required('E-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function Login() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
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
            className="input-field"
            type="text"
            placeholder="Email"
            name="email"
          />
        </div>

        <div className="input-container">
          <i className="fa fa-key icon">
            <RiLockPasswordFill size={20} />
          </i>
          <Input
            className="input-field"
            type="password"
            placeholder="Password"
            name="password"
          />
        </div>

        <button type="submit">{loading ? 'Carregando..' : 'Entrar'}</button>
        <Link to="/forgotpass">Esqueceu sua senha?</Link>
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
