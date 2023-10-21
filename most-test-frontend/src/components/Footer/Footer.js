import './Footer.css';

function Footer() {
  const currentFullYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className='footer__content'>
      <p className="footer__copyright font-small">
            &copy;{currentFullYear} ТЕСТОВОЕ ЗАДАНИЕ. ВСЕ ПРАВА ЗАЩИЩЕНЫ
          </p>
      </div>
    </footer>
  );
}

export default Footer;
