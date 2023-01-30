import './menu.scss'

export default function Menu({ menuOpen, setMenuOpen }) {
    const date = new Date();
    let year = date.getFullYear();

    return (
        <div className={'menu ' + (menuOpen && 'active')}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href='#intro'>Home</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href='#protfolio'>Protfolio</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href='#works'>Projects</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href='#Languages'>Languages</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
            <p className='copyRights'>&copy; Mendy Michaeli {year}</p>
        </div>
    )
}
