import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {

//   const navigate = useNavigate();
  
//   const handleAbout = () => {
//     navigate('/about');
//   }

  return (
    <div className="footer-basic">
      <footer>
        <div className="social">
          <a href="#"><i className="icon ion-social-instagram"></i></a>
          <a href="#"><i className="icon ion-social-snapchat"></i></a>
          <a href="#"><i className="icon ion-social-twitter"></i></a>
          <a href="#"><i className="icon ion-social-facebook"></i></a>
        </div>
        <ul className="list-inline">
          <li className="list-inline-item" /*onClick = {handleAbout}*/> <a href="#">About Us</a></li>
          <li className="list-inline-item"><a href="#">Contact Us</a></li>
        </ul>
        <p className="copyright">IMDBSearch© 2023</p>
      </footer>
    </div>
  );
};

export default Footer;
