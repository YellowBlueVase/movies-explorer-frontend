import './NavTab.css';

function NavTab({block, link}) {
    return (
        <a href={`#${link}`} className="block">{block}</a>
    )
}

export default NavTab;