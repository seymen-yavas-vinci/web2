import type { ReactNode } from 'react';
import './Footer.css'

interface FooterProps {
    logoUrl: string;
    children: ReactNode;
}

const Footer = (props: FooterProps) => {
    return (
        <footer className='mon-super-footer'>
            <img src={props.logoUrl} alt="logo" />
            <div className="contenu-du-footer">
                {props.children}
            </div>
        </footer>
    );
};

export default Footer;
