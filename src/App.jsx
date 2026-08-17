import { useState } from 'react';
import { initialStudents } from './data/students';
import StudentDirectory from './components/StudentDirectory';
import StudentForm from './components/StudentForm';
import DirectoryControls from './components/DirectoryControls';

export default function App() {
  const [students, setStudents] = useState(initialStudents);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  function handleAddStudent(newStudent) {
    const studentWithId = { ...newStudent, id: Date.now() };
    setStudents([...students, studentWithId]);
  }

  const visibleStudents = students
    .filter((student) => {
      if (searchTerm.trim() === '') return true;
      return student.name.toLowerCase().includes(searchTerm.toLowerCase());
    })
    .filter((student) => {
      if (statusFilter === 'deansLister') return student.gwa <= 1.75;
      if (statusFilter === 'probation') return student.status === 'On Probation';
      return true;
    });

  return (
    <div>
      <h1>Student Directory</h1>
      <StudentForm onAdd={handleAddStudent} />
      <DirectoryControls
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
      />
      <StudentDirectory students={visibleStudents} />
    </div>
  );
}
