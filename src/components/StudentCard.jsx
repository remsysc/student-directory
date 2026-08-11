import styles from './StudentCard.module.css';

export default function StudentCard({ student }) {
  const isProbation = student.status === 'On Probation';
  const isDeansLister = student.gwa <= 1.75;

  let cardClass = styles.card;
  if (isProbation) {
    cardClass += ` ${styles.probation}`;
  } else if (isDeansLister) {
    cardClass += ` ${styles.deansLister}`;
  }

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
