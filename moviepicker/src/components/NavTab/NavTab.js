import './NavTab.css';

function NavTab({block, link}) {

    const handleClickScroll = () => {
        const element = document.getElementByClassName(link);
        if (element) {
          element.scrollIntoView();
        }
      };

    return (
        <button className="block" onClick={handleClickScroll}>{block}</button>
    )
}

export default NavTab;