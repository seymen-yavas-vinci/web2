import type { ReactNode } from 'react';
import './Header.css';

// 1. On dit à TypeScript quelles "props" on accepte
interface HeaderProps {
  logoUrl: string;       // <- Prop normale pour l'image
  children: ReactNode;   // <- Prop magique pour "tout le reste"
}

// 2. On fabrique le composant "boîte"
const Header = (props: HeaderProps) => {
  return (
    <header className="mon-super-header">
      
      {/* A) On affiche le logo (la prop normale) */}
      <img src={props.logoUrl} alt="logo" />
      
      {/* B) On affiche TOUT ce qu'on a mis DEDANS (les enfants) */}
      <div className="contenu-du-header">
        {props.children} 🪄
      </div>

    </header>
  );
};

export default Header;