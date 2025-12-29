import styles from '../styles/Onboarding.module.css'
export function InputField({ label, type = 'text', value, onChange, placeholder, helperText }) {
  return (
    <div className={styles.inputGroup}>
      <label className={styles.label}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={styles.input}
        placeholder={placeholder}
      />
      {helperText && <p className={styles.helperText}>{helperText}</p>}
    </div>
  );
}