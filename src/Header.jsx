import CirrusLogo from '/src/assets/cirrus-logo-lg.png'

export default function Header() {
    const handleLogoClick = () => {
        window.location.reload();
    };

    return (
        <div className="header-logo" onClick={handleLogoClick}>
            <img src={CirrusLogo} alt='cirrus-logo'/>
        </div>
    );
}