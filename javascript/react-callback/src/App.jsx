import { Routes, Route, Link } from 'react-router-dom';
import ExerciseCallback from './pages/ExerciseCallback';

export default function App() {
  return (
    <div style={{ padding: 24 }}>
      <nav style={{ marginBottom: 16 }}>
        <Link to='/' style={{ marginRight: 12 }}>
          Home
        </Link>
        <Link to='/exerciseCallback'>Exercise Callback</Link>
      </nav>

      <Routes>
        <Route path='/' element={<h2>Home</h2>} />
        <Route path='/exerciseCallback' element={<ExerciseCallback />} />
      </Routes>
    </div>
  );
}
