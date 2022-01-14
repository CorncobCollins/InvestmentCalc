function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <p>© Dolezel {currentYear}</p>
    </div>
  );
}
export default Footer;
