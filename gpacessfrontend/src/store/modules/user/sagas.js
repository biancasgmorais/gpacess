import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '../../../services/history';
import api from '../../../services/api';

import { updateProfileSuccess, updateProfileFailure } from './action';

export function* updateSenha({ payload }) {
  try {
    const { email, ...rest } = payload.data;

    const profile = {
      email,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'userssenha', profile);

    toast.success('Senha atualizada com sucesso');

    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    toast.error('Erro ao atualizar senha, confira seus dados');
    yield put(updateProfileFailure());
  }
}

export function* updateUser({ payload }) {
  try {
    const user = payload.data;

    yield call(api.put, 'users', user);

    toast.success('Usuário atualizado com sucesso!');
    history.push('/listusers');
  } catch (error) {
    toast.error('Erro ao atualizar Usuário, verifique os dados...');
  }
}

export function* updateTag({ payload }) {
  try {
    const user = payload.data;

    yield call(api.put, 'userstag', user);

    toast.success('Usuário atualizado com sucesso!');
    history.push('/listusers');
  } catch (error) {
    toast.error('Erro ao atualizar Usuário, verifique os dados...');
  }
}

export function* forgotPass({ payload }) {
  try {
    const { email } = payload;

    yield call(api.post, 'mail', { email });

    toast.success(
      'Foi enviado uma mensagem com a nova senha para o email cadastrado!'
    );
    history.push('/');
  } catch (error) {
    toast.error('Erro ao enviar email, verifique os dados...');
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateSenha),
  takeLatest('@user/UPDATE_USER_REQUEST', updateUser),
  takeLatest('@user/FORGOT_PASS_REQUEST', forgotPass),
  takeLatest('@user/UPDATE_TAG_REQUEST', updateTag),
]);
