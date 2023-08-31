import './index.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobe, faPhone, faAt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin, faGithub, faTwitter, faAngellist, faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
  <>
    <div className="nav-bar">
      <nav>
        <NavLink exact="true" to="/" activeClassName="active">
          <FontAwesomeIcon icon={faPhone} color="#ffffff" />
        </NavLink>
        <NavLink exact="true" to="/about" activeClassName="active" className="about">
          <FontAwesomeIcon icon={faAt} color="#ffffff" />
        </NavLink>
        <NavLink exact="true" to="/gallery" activeClassName="active" className="gallery">
          <FontAwesomeIcon icon={faGlobe} color="#ffffff" />
        </NavLink>
        <NavLink exact="true" to="/contact" activeClassName="active" className="contact">
          <FontAwesomeIcon icon={faInstagramSquare} color="#ffffff" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="/">
            <FontAwesomeIcon icon={faLinkedin} color="#ffffff" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="/">
            <FontAwesomeIcon icon={faAngellist} color="#ffffff" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="/">
            <FontAwesomeIcon icon={faGithub} color="#ffffff" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="/">
            <FontAwesomeIcon icon={faTwitter} color="#ffffff" />
          </a>
        </li>
      </ul>

    </div>
    <div className="nav-bar-left" />
  </>
);
export default Sidebar;
