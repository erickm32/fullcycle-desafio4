import React from 'react';

export interface UserInterface {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string,
}

type UserProps = { user: UserInterface }

export default function User({ user }: UserProps) {
  return (
    <div style={{ display: 'flex', margin: '2.5%' }}>
      <img src={user.avatar} alt={'Foto do usuario: '+user.first_name}></img>
      <div style={{ marginLeft: '2.5%' }}>
        <h3>Name: {user.first_name} {user.last_name}</h3>
        <h3>Email: {user.email}</h3>
        <h4>ID: {user.id}</h4>
      </div>
    </div>
  );
}