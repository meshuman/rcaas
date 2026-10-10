import {createRoot} from 'react-dom/client';
import {MotionConfig} from 'motion/react';
import App from './App.tsx';
import './index.css';

// reducedMotion="user": scripted animations (fade-ups, slides) respect the visitor's reduced-motion setting,
// matching the CSS rule in index.css.
createRoot(document.getElementById('root')!).render(
  <MotionConfig reducedMotion="user">
    <App />
  </MotionConfig>,
);
