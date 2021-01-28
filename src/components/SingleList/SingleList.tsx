import React from 'react';
import { useParams } from 'react-router-dom';

import ListHeader from './ListHeader/ListHeader';

const SingleList = () => {
  const { id } = useParams<{ id: string }>();

  console.log(id);
  return (
    <>
      <ListHeader
        counter={12}
        count={45}
        author="Pioter"
        name="Super lista"
        date="22.01.2021"
      />
      <div style={{ backgroundColor: 'red' }}>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
        <div>elo</div>
      </div>
    </>
  );
};

export default SingleList;
