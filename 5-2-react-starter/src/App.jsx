import './App.css'
import StudentCard from './components/StudentCard';

function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          {/* TODO: Import and render StudentCard components here */}
            <StudentCard name="Aleen Alghamdi" id="202244260" dept="Computer Science" />
            <StudentCard name="Khawlah Almalki" id="202247320" dept="Computer Science" />
        </div>
      </main>
    </div>
  )
}

export default App
