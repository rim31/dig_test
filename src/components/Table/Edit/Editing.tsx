// import React from 'react'
import '../Participants.css';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { IParticipant } from '../../../utils/interfaces';

export default function Editing(props: {
  Participants: IParticipant[],
  Participant: IParticipant,
  setParticipants: any,
  setParticipantEditing: any
}) {
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
    id: number
  };
  const { register, handleSubmit } = useForm<Inputs>({
    defaultValues: props.Participant,
    resolver: yupResolver(schema)
  });

  /**
   * function submitEdits()
   * edit a Participant, change particiapn in thel list of Participants
   * @param Data 
   */
  function submitEdits(Data: IParticipant) {
    const updatedParticipants: any = [...props.Participants].map((Participant: any) => {
      if (Participant.id === Data.id) {
        Participant.name = Data.name;
        Participant.email = Data.email;
        Participant.cell = Data.cell;
      }
      return Participant;
    });
    props.setParticipants(updatedParticipants);
    props.setParticipantEditing(null);
  }

  return (
    <>
      <td><input {...register("name")} className="myInput cellName" placeholder="Full Name" /></td>
      <td><input {...register("email")} className="myInput cellEmail" placeholder="Email Address" /></td>
      <td><input {...register("cell")} className="myInput cellPhone" placeholder="Phone Number" /></td>
      <td>
        <form onSubmit={handleSubmit(submitEdits)} id="editParticipant">
          <button onClick={() => props.setParticipantEditing(null)} className="cancelButton">CANCEL</button>
          <button type="submit" className="saveButton">SAVE</button>
        </form>
      </td>
      <td>
      </td>
    </>
  );
}
