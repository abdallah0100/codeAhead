import './navStyle.css';
function NavBar(){
    return (
        <nav>
            <ul className='nav_links'>
                <li><a href='/#'>Home</a></li>
                <li><a href='/#'>Forum</a></li>
                <li><a href='/#'>About</a></li>
                <li><a href='/#'>Contact</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;