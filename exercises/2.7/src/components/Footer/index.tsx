import "./Footer.css";

interface FooterProps {
    urlLogo: string;
    children: React.ReactNode;
}

const Footer = (props: FooterProps) => (
    <footer className="footer">
        <div>{props.children}</div>
        <img src={props.urlLogo} alt="Logo" className="footer-logo" />
    </footer>
);

export default Footer;