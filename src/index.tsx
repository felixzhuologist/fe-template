import React from 'react';
import ReactDOM from 'react-dom';

type Props = {};

const App = (props: Props) => {
  return (
    <div className="bg-yellow-100 w-screen h-screen p-16">
      <p className="font-serif text-6xl font-bold">Serif</p>
      <p className="font-sans text-6xl font-bold">Sans</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('reactroot'));
