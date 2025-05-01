import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { updateProfileRequest } from '../../store/modules/user/action';
import { signOut } from '../../store/modules/auth/action';

import { Container, Content } from './styles';

import voltar from '../../assets/voltar.png';

const schema = Yup.object().shape({
  email: Yup.string().required(),
  oldPassword: Yup.string().min(6),
  password: Yup.string()
    .min(6)
    .when('oldPassword', (oldPassword, field) =>
      oldPassword ? field.required() : field
    ),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password ? field.required().oneOf([Yup.ref('password')]) : field
  ),
});

export default function Updates() {
  const dispatch = useDispatch();
  const perfil = useSelector((state) => state.user.profile);

  const handleSubmit = (data) => {
    dispatch(updateProfileRequest(data));
    dispatch(signOut());
  };

  return (
    <>
      <Container>
        <Content>
          <div className="divisaosenha">
            <h1>Perfil</h1>
            <Form initialData={perfil} onSubmit={handleSubmit} schema={schema}>
              <Input name="email" type="email" placeholder="E-mail" />
              <Input name="password" type="password" placeholder="Senha Nova" />
              <Input
                name="confirmPassword"
                type="password"
                placeholder="Confirme a Senha Nova"
              />
              <Input
                name="oldPassword"
                type="password"
                placeholder="Senha Antiga"
              />
              <div className="botoes">
                <button type="submit">Atualizar senha</button>
              </div>
            </Form>
          </div>
          <div className="back">
            <Link to="/management">
              <img src={voltar} alt="voltar" />
            </Link>
          </div>
        </Content>
      </Container>
    </>
  );
}
