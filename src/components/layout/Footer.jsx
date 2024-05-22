import '../../styles/footer.css';

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer__info">
          <p className="footer__text">© 2024 TiendaOnline. Todos los derechos reservados.</p>
        </div>
        <div className="footer__links">
          <a href="/privacy" className="footer__link">Política de privacidad</a>
          <a href="/terms" className="footer__link">Términos y condiciones</a>
        </div>
        <div className="footer__social">
          <a href="https://facebook.com" className="footer__social-link">Facebook</a>
          <a href="https://twitter.com" className="footer__social-link">Twitter</a>
          <a href="https://instagram.com" className="footer__social-link">Instagram</a>
        </div>
      </footer>
    )
  }
  
  export default Footer;
  