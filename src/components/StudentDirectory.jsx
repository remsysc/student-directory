import StudentCard from './StudentCard';

export default function StudentDirectory({ students }) {
  if (students.length === 0) {
    return <p>No students match your search or filter.</p>;
  }

  return (
    <div>
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}
