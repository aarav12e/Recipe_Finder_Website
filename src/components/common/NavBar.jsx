
import { Menu } from 'semantic-ui-react';
import { logo } from '../../constants/constant';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <Menu borderless fixed="top" style={{ padding: '0 2rem', alignItems: 'center', height: '80px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <Menu.Item as={Link} to="/">
                <img src={logo} alt="logo" style={{ width: 140, objectFit: 'contain' }} />
            </Menu.Item>

            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: '30px' }}>
                <Menu.Item name="Home" as={Link} to="/" style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--text-color)' }} />
                <Menu.Item name="Recipes" as={Link} to="/recipes" style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--text-color)' }} />
            </div>

            {/* Invisible placeholder to balance the logo width for perfect centering, or add Profile/Auth later */}
            <div style={{ width: 140 }}></div>
        </Menu>
    )
}

export default NavBar;