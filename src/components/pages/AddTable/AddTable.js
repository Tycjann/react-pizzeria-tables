import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTableRequest } from '../../../redux/tablesRedux';

const AddTable = () => {

  const dispatch = useDispatch();

  const status = 'free';
  const people = 0;
  const bill = 0;

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTableRequest({status, people, bill}));
  };

  return (
    <form onSubmit={handleSubmit}>

    </form>
  );
};

export default AddTable;