/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input, Select } from '@rocketseat/unform';
import * as Yup from 'yup';
import api from '../../../services/api';
import { updateTagRequest } from '../../../store/modules/user/action';

import { Container, Content } from './styles';

import voltar from '../../../assets/voltar.png';

const schema = Yup.object().shape({
  id: Yup.number()
    .transform((value) => (!value ? undefined : value))
    .integer(),
  name: Yup.string().required('O nome é obrigatório'),
  tag: Yup.string().required('A TAG é obrigatória'),
  email: Yup.string().email().required('O e-mail é obrigatório'),
});

export default function EditUserTag({ location }) {
  const dispatch = useDispatch();
  const [tagtemp, setTag] = useState([]);

  const { userLocated } = location.state || {};
  const [user] = useState(userLocated);

  useEffect(() => {
    const loadTags = async () => {
      const response = await api.get(`temptag`);
      setTag(response.data);
    };
    loadTags();
  }, []);

  const handleSubmit = (data) => {
    data = {
      ...data,
      id: user.id,
    };
    dispatch(updateTagRequest(data));
  };

  return (
    <Container>
      <Content>
        <h1>Cadastrar TAG</h1>
        <div className="nv">
          <Form
            initialData={user}
            onSubmit={handleSubmit}
            schema={schema}
            autoComplete="off"
          >
            <Input name="name" type="text" />

            <Input name="email" type="email" />

            <Select
              name="tag"
              options={tagtemp.map((tags) => ({
                id: tags.tag_temp,
                title: tags.tag_temp,
              }))}
              placeholder="Tag"
            />

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

EditUserTag.defaultProps = {
  location: PropTypes.shape({
    state: {},
  }),
};

EditUserTag.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.object,
  }),
};
