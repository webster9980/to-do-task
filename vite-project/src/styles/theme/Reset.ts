import { LetterSpacings } from './Typography';

export const Reset = {
  ':root, body': {
    position: 'relative',
    padding: 0,
    margin: 0,
    width: '100%',
    maxWidth: '100vw',
    minHeight: '100vh',
    scrollBehavior: 'smooth',
    backgroundColor: '$primary_color',
  },
  'html, body, #__next': {
    height: '100%',
  },
  '@supports (-webkit-touch-callout: none)': {
    ':root, body': {
      minHeight: '-webkit-fill-available',
    },
  },
  '*, *::after, *::before': {
    boxSizing: 'border-box',
    '-webkit-tap-highlight': 'transparent',
    margin: 0,
    padding: 0,
    border: 0,
  },
  'button, a': {
    cursor: 'pointer',
    userSelect: 'none',
  },
  a: {
    textDecoration: 'none',
    color: 'inherit',
  },
  '[disabled]': {
    cursor: 'default',
  },
  hr: {
    height: 1,
    minHeight: 1,
    maxHeight: 1,
    border: 'none',
    margin: '1rem 0',
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
  },
  'hr.vertical': {
    minHeight: 'unset',
    maxHeight: 'unset',
    width: 1,
    maxWidth: 1,
    minWidth: 1,
    margin: '0 1',
  },
  LetterSpacings,
};