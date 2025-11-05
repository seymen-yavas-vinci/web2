# Copilot Instructions - Medium State Tutorial

## Project Overview
This is a **React 19 + TypeScript + Vite** educational project demonstrating state management and component composition patterns. The app is a pizza/drink menu with interactive features like audio controls and form handling.

## Architecture & Component Structure

### Component Organization Pattern
- **Index-based exports**: All components use `index.tsx` as the main export file (e.g., `src/components/Header/index.tsx`)
- **Co-located styles**: Each component has its own CSS file in the same directory (e.g., `Header.css` alongside `Header/index.tsx`)
- **Main component is composite**: `src/components/Main/index.tsx` orchestrates multiple sub-components (`PizzaMenu`, `DrinkMenu`, `DrinkCard`)

### Component Hierarchy
```
App (layout container)
├── Header (interactive state demo with click handler)
├── Main (content orchestrator)
│   ├── PizzaMenu (table-based data rendering)
│   ├── DrinkMenu (wrapper with typed children)
│   │   └── DrinkCard × 3 (slot-based content)
│   └── Form (controlled form demo)
└── Footer (static content)
```

## Key Conventions

### TypeScript Patterns
- **Props interfaces**: Always define with `interface ComponentNameProps` pattern
- **Children typing**: Use `React.ReactNode` for generic children or `ReactElement<typeof Component>` for strict component typing (see `DrinkMenu.tsx`)
- **Event typing**: Use `SyntheticEvent` for form events (see `Main/index.tsx` form handler)
- **Strict mode enabled**: TypeScript strict mode is on with `noUnusedLocals` and `noUnusedParameters`

### State Management
- **useState hooks**: Local component state for UI interactions (see `Header/index.tsx` for `menuPrinted` state)
- **No global state**: This project intentionally uses only local React state
- **State update pattern**: Toggle state with `setState(!state)` pattern

### Asset Imports
- **Static imports**: Import images/sounds directly as ES modules: `import sound from "../../assets/sounds/file.mp3"`
- **Assets structure**: `src/assets/images/` for images, `src/assets/sounds/` for audio files
- **External images**: DrinkCard components use external URLs for demonstration

### Data Rendering
- **Inline data arrays**: Static data defined directly in components (see `pizzas` array in `PizzaMenu.tsx`)
- **Map with keys**: Always use unique `id` field for `key` prop when mapping arrays

## Development Workflow

### Commands
- **Dev server**: `npm run dev` (Vite dev server with HMR)
- **Build**: `npm run build` (TypeScript check + Vite build)
- **Lint**: `npm run lint` (ESLint with React Hooks rules)
- **Preview**: `npm run preview` (Preview production build)

### Build Configuration
- **Vite with SWC**: Uses `@vitejs/plugin-react-swc` for fast refresh (faster than Babel)
- **Module system**: ES modules only (`"type": "module"` in package.json)
- **TypeScript config split**: Separate configs for app (`tsconfig.app.json`) and tooling (`tsconfig.node.json`)

## Project-Specific Quirks

### Form Handling
- Forms use native HTML form handling with `name` attributes
- Access values via `form.elementName.value` pattern (not controlled inputs)
- Example: `form.pizza.value` to get input with `name="pizza"`

### Audio Integration
- Audio element in Main component with `autoPlay` and `controls`
- Header click handler can control audio playback (mentioned in UI text but not implemented)

### Styling
- Uses `animate.css` classes for animations (`animate__animated`, `animate__bounce`, etc.)
- No CSS-in-JS or CSS modules - plain CSS files with component-scoped naming

## Testing & Debugging
- **No test framework configured**: This is a tutorial project without tests
- **React DevTools**: Use browser extension for component inspection
- **Vite HMR**: Changes reflect instantly without full page reload

## When Making Changes
- Keep component files small and focused (most components are < 50 lines)
- Maintain the strict TypeScript typing - don't use `any`
- Follow the index.tsx export pattern for new components
- Import paths should be explicit with `.tsx` extension for TypeScript files
