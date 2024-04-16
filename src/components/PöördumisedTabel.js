import React from "react";

const PöördumisedTabel = ({ pöördumised, markAsSolved }) => {
  return (
    <div className="list">
      <h3>Pöördumised</h3>
      <table className="ticket-table">
        <thead>
          <tr>
            <th className="table-header">Kirjeldus</th>
            <th className="table-header">Sisestamise aeg</th>
            <th className="table-header">Tähtaeg</th>
            <th className="table-header">Märgi lahendatuks</th>
          </tr>
        </thead>
        <tbody>
          {pöördumised.map((pöördumine) => (
            <tr 
              key={pöördumine.id}
              className={pöördumine.aegunud ? "red-row" : ""}
            >
              <td className="kirjeldus-column">{pöördumine.kirjeldus}</td>
              <td>
                {new Date(pöördumine.sisestamiseAeg).toLocaleString()}
              </td>
              <td>
                {new Date(pöördumine.lahendamiseTähtaeg).toLocaleString()}
              </td>
              <td>
                <button onClick={() => markAsSolved(pöördumine.id)}>
                  Lahendatud
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PöördumisedTabel;