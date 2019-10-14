import React from 'react';

const ChartList = (props) => {

  const chartEntries = props.top20.map((entry, index) => {
    return (
      <div key={index}>
      <h2>{entry['im:artist'].label} - {entry['im:name'].label}</h2>

      <img src={entry['im:image'][2].label}></img>

      <a href={entry.link[0].attributes.href}>Buy Now</a>

      <audio controls>
      <source src={entry.link[1].attributes.href} type="audio/mpeg" />
      Your browser does not support this audio file.
      </audio>

      </div>
    )
  });

  return (
    <div id="chart-list">
    {chartEntries}
    </div>
  )

}

export default ChartList;
