import styles from './StudentCard.module.css';

export default function StudentCard({ student }) {
  const isProbation = student.status === 'On Probation';
  const isDeansLister = student.gwa <= 1.75;

  const cardClass = isProbation
    ? `${styles.card} ${styles.probation}`
    : styles.card;

  return (
    <div className={cardClass}>
      <h3>{student.name}</h3>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>Year Level:</strong> {student.yearLevel}</p>
      <p><strong>Status:</strong> {student.status}</p>
      <p><strong>GWA:</strong> {student.gwa}</p>
      {isDeansLister && <span className={styles.badge}>Dean&apos;s Lister</span>}
    </div>
  );
}
