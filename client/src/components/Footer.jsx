import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} AngelaCodes {"   "}All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
