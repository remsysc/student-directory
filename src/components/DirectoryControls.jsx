import styles from './DirectoryControls.module.css';

export default function DirectoryControls({
  searchTerm,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
}) {
  return (
    <div className={styles.controls}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <div className={styles.filterGroup}>
        <button
          className={`${styles.filterButton} ${statusFilter === 'all' ? styles.activeFilter : ''}`}
          onClick={() => onStatusFilterChange('all')}
        >
          All
        </button>
        <button
          className={`${styles.filterButton} ${statusFilter === 'deansLister' ? styles.activeFilter : ''}`}
          onClick={() => onStatusFilterChange('deansLister')}
        >
          Dean&apos;s Listers
        </button>
        <button
          className={`${styles.filterButton} ${statusFilter === 'probation' ? styles.activeFilter : ''}`}
          onClick={() => onStatusFilterChange('probation')}
        >
          On Probation
        </button>
      </div>
    </div>
  );
}
