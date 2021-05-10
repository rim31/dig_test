import React from 'react'
import './Participants.css';
import { IParticipant } from '../../utils/interfaces';
import { Data } from '../../utils/Data'
import Editing from './Edit/Editing'
import Adding from './Add/Adding'
import NavBar from '../Layout/NavBar';
import BodyTable from './BodyTable';

export default function Participants() {
  const [Participants, setParticipants] = React.useState<any>(Data);
  const [Participant, setParticipant] = React.useState<IParticipant>();
  const [ParticipantEditing, setParticipantEditing] = React.useState<any>(null);
  const [sorted, setSorted] = React.useState<string>();

  // /**
  //  * getting data from local storage
  //  */
  // React.useEffect(() => {
  //   const json: any = localStorage.getItem("Participants");
  //   const loadedParticipants = JSON.parse(json);
  //   if (loadedParticipants) {
  //     setParticipants(loadedParticipants);
  //   }
  // }, []);

  // /**
  //  * set data in local storage
  //  */
  // React.useEffect(() => {
  //   const json = JSON.stringify(Participants);
  //   localStorage.setItem("Participants", json);
  // }, [Participants]);

  /**
   * Function deleteParticipant(id)
   * delete a Participant accordint the ID
   * @param id 
   */
  function deleteParticipant(id: number) {
    let updatedParticipants: any = [...Participants].filter((Participant: any) => Participant.id !== id);
    setParticipants(updatedParticipants);
    console.log(`delete Participant`, Participant)
    alert('Participant deleted');
  }

  /**
   * Component Table Header 
   * @returns Component
   */
  const RenderTableHeader = () => {
    const header: string[] = ["name", "email", "cell", ""];

    function compareBy(key: any) {
      return function (a: string, b: string) {
        if(a && b) {
          if (a[key] < b[key]) return -1;
          if (a[key] > b[key]) return 1;
        }
        return 0;
      };
    }

    function sortBy(key: any) {
      setSorted(key)
      let arrayCopy: any = [...Participants];
      arrayCopy.sort(compareBy(key));
      setParticipants(arrayCopy);
    }
    return (
      <tr>
        {header.map((head: string) => {
          return (
            <th key={head} onClick={() => sortBy(head)}>
              {head}{(sorted === head && head !== "") && (<>↓</>)}
            </th>
          )
        })}
      </tr>
    )
  }

  return (
    <NavBar>
      <div className="page">
        <div id="Participant-list">
          <div className='content tableContainer'>

            <h1>List of participants</h1>
            {/* Component Add a new participant */}
            <Adding Participants={Participants}
              setParticipants={(Participants: IParticipant[]) => setParticipants(Participants)}
              setParticipant={(Participant: IParticipant) => setParticipant(Participant)}
            />

            <div id="participantTable">
              <div>
                <table>
                  <thead>
                    {/* Component header of the table */}
                    <RenderTableHeader />
                  </thead>
                  <tbody >
                    {Participants.map((Participant: IParticipant) => (
                      <tr key={Participant.id} >
                        {Participant.id === ParticipantEditing ? (
                          //  Component Edit a participant of the table 
                          <Editing Participants={Participants}
                            Participant={Participant}
                            setParticipants={(Participants: IParticipant[]) => setParticipants(Participants)}
                            setParticipantEditing={(x: any) => setParticipantEditing(x)} />
                        ) : (
                          //  Component body of the table participants  
                          <BodyTable Participant={Participant}
                            setParticipantEditing={(id: number) => setParticipantEditing(id)}
                            deleteParticipant={(id: number) => deleteParticipant(id)}
                          />
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div >
    </NavBar>
  );
}
