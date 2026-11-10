function UnderlineEffect({ underline = false, children }) {
  return (
    <span className={underline ? 'section-emphasis' : 'nav-label'}>
      {children}
    </span>
  );
}

export default UnderlineEffect;
