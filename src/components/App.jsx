import React, { useState } from "react";
import "./App.css";
import TableRow from "./TableRow";

function App() {
  const [players, setPlayers] = useState([
    {
      key: "1",
      firstName: "Werner",
      lastName: "Faust",
      email: "werner.faust@email.de",
    },
    {
      key: "2",
      firstName: "Renate",
      lastName: "Faust",
      email: "renate.faust@email.de",
    },
    {
      key: "3",
      firstName: "Max",
      lastName: "Mustermann",
      email: "max.mustermann@email.de",
    },
  ]);

  return (
    <div className="container">
      <div className="heading">
        <h1>Volleyballbuchnung</h1>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <caption>List of players</caption>
          <thead className="thead-light">
            <tr>
              <th>#</th>
              <th>Vorname</th>
              <th>Nachname</th>
              <th>Vorname</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {players.map((player, index) => {
              return (
                <TableRow
                  key={index}
                  id={index}
                  firstName={player.firstName}
                  lastName={player.lastName}
                  email={player.email}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
