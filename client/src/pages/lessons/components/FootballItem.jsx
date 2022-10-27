import React from 'react';

function FootballItem({ event, index }) {
  const betTypes = event.betTypes;
  const teamOdds = event.teamOdds;
  const teams = event.competitors;

  const placeBet = (odds) => {
    console.log('bet placing', odds);
  };

  return (
    <li key={index}>
      <div> {event.title}</div>

      <div className='betData__container'>
        {teams.map((team, index) => {
          return (
            <>
              <h4>{team}</h4>

              <ul>
                {betTypes.map((betType, index) => {
                  return (
                    <li className='betType' key={index}>
                      {betType}
                    </li>
                  );
                })}
              </ul>

              <ul>
                {teamOdds[index].map((odd, index) => {
                    return (
                        <>
                        <li key={index}>
                            <span>{odd}</span>
                            <button onClick={placeBet}>Bet</button>

                            </li>
                        </>
                    )
                })}
              </ul>
            </>
          );
        })}
      </div>
    </li>
  );
}

export default FootballItem;
