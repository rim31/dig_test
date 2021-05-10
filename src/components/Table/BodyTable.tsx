import { FaTrash } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";
import { IParticipant } from "../../utils/interfaces";
export default function BodyTable(props: { Participant: IParticipant, setParticipantEditing: any, deleteParticipant: any }) {
  return (
    <>
      <td className="cellName">{props.Participant.name}</td>
      <td className="cellEmail">{props.Participant.email}</td>
      <td className="cellPhone">{props.Participant.cell}</td>
      <td className="cellAction">
        <span className="icon-only">
          <RiPencilFill className="myButton" onClick={() => props.setParticipantEditing(props.Participant.id)} />
          <FaTrash className="myButton" onClick={() => props.deleteParticipant(props.Participant.id)} />
        </span>
      </td>
    </>
  )
}
