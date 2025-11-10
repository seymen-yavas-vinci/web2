import "./Header.css";

interface HeaderProps {
    urlLogo: string;
    children: React.ReactNode;
}

const Header = (props: HeaderProps) => (
    <header className="header">
        <img src={props.urlLogo} alt="Logo" className="header-logo" />
        <div>{props.children}</div>
    </header>
);

export default Header;
