/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { updateUserRequest } from '../../store/modules/user/action';

import { Container, Content } from './styles';

import voltar from '../../assets/voltar.png';

const schema = Yup.object().shape({
  id: Yup.number()
    .transform((value) => (!value ? undefined : value))
    .integer(),
  name: Yup.string().required('O nome é obrigatório'),
  tag: Yup.string().required('A TAG é obrigatória'),
  email: Yup.string().email().required('O e-mail é obrigatório'),
});

export default function EditUser({ location }) {
  const dispatch = useDispatch();

  const { userLocated } = location.state || {};
  const [user] = useState(userLocated);

  const handleSubmit = (data) => {
    data = {
      ...data,
      id: user.id,
    };
    dispatch(updateUserRequest(data));
  };

  return (
    <Container>
      <Content>
        <h1>Atualização de usuário</h1>
        <div className="nv">
          <Form
            initialData={user}
            onSubmit={handleSubmit}
            schema={schema}
            autoComplete="off"
          >
            <Input name="name" type="text" />

            <Input name="email" type="email" />

            <Input name="tag" type="text" />

            <button type="submit">Atualizar</button>
          </Form>
        </div>
        <div className="back">
          <Link to="/listusers">
            <img src={voltar} alt="voltar" />
          </Link>
        </div>
      </Content>
    </Container>
  );
}

EditUser.defaultProps = {
  location: PropTypes.shape({
    state: {},
  }),
};

EditUser.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.object,
  }),
};
