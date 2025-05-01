import React from 'react';
import { MdExitToApp } from 'react-icons/md';
import { useDispatch } from 'react-redux';

import { signOut } from '../../store/modules/auth/action';

import { Content } from './styles';

import logo from '../../assets/gpacess2.png';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <>
      <Content>
        <nav>
          <a href="/management">
            <img src={logo} alt="GPACESS" />
          </a>
          <button type="button" onClick={handleSignOut}>
            <MdExitToApp color="#373545" size={35} />
          </button>
        </nav>
      </Content>
    </>
  );
}
