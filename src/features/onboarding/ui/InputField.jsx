import styles from "../styles/Onboarding.module.css";

export function InputField({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  helperText,
  required = false,
  noMargin = false,
  icon: Icon,
}) {
  const inputWrapperStyle = Icon ? {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  } : {};

  const iconStyle = {
    position: 'absolute',
    left: '14px',
    color: '#64748b',
    pointerEvents: 'none',
    transition: 'color 0.2s ease',
  };

  const inputWithIconStyle = Icon ? {
    paddingLeft: '44px',
  } : {};

  return (
    <div className={styles.inputGroup} style={{ marginBottom: noMargin ? 0 : undefined }}>
      <label className={styles.label}>
        {label} {required && <span className={styles.required}>*</span>}
      </label>
      <div style={inputWrapperStyle}>
        {Icon && (
          <div style={iconStyle}>
            <Icon size={20} />
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          className={styles.input}
          placeholder={placeholder}
          style={inputWithIconStyle}
        />
      </div>
      {helperText && <p className={styles.helperText}>{helperText}</p>}
    </div>
  );
}
