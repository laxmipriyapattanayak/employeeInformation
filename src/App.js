import React from 'react';
import Header from './components/Header';
import Employees from './components/Employees';
import TableHead from './components/TableHead';
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <table>
          <TableHead />
          <tbody>
          <Employees />
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
