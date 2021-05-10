// import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { IParticipant } from '../../../utils/interfaces';
import _uniqueId from 'lodash/uniqueId';

export default function Adding(props: { Participants: IParticipant[], setParticipants: any, setParticipant: any }) {
  /**
   * schema for error message if the inputs are wrong in login
   */
  const schema = yup.object().shape({
    name: yup.string().required("email is required"),
    email: yup.string().required("password is required"),
    cell: yup.string().required("pbone is required"),
  })

  type Inputs = {
    name: string,
    email: string,
    cell: string,
  };

  const { register, handleSubmit, reset } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });

  /**
   * function onSubmitNew()
   * add a new participant at the end of the array of Participants
   * @param data : Participant(name, email , phone)
   */
  function onSubmitNew(data: IParticipant) {
    if (data.name && data.cell && data.email) {
      const id: number = parseInt(_uniqueId());
      const newParticipant: IParticipant = {
        id: id,
        name: data.name,
        email: data.email,
        cell: data.cell,
      };
      props.setParticipants([...props.Participants].concat(newParticipant));
      props.setParticipant({ name: "", email: "", cell: "", id: id });
      alert('added New participant');
      reset({})
    } else {
      console.error("error Add new participant")
    }
  }

  return (
    <tr id="Adding">
      <td><input {...register("name")} className="myInput cellName" placeholder="Full Name" /></td>
      <td><input {...register("email")} className="myInput cellEmail" placeholder="Email Address" /></td>
      <td><input {...register("cell")} className="myInput cellPhone" placeholder="Phone Number" /></td>
      <td>
        <form onSubmit={handleSubmit(onSubmitNew)}>
          <button type="submit" className="addButton">Add new</button>
        </form>
      </td>
    </tr>
  );
}
