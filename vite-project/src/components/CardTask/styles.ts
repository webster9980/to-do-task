import * as Checkbox from '@radix-ui/react-checkbox';
import { styled } from "../../styles/stitches.config";

export const CardContainer = styled('section', {
    maxWidth: '736px',
    width: '100%',
    background: '$gray500',

    display: 'flex',
    justifyContent: 'space-between',
    gap: '12px',
    alignItems: 'center',
    padding: '1rem',
    borderRadius: '0.5rem',
});

export const P = styled('p', {
        color: '$gray100',
        fontWeight: '400',
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
});

export const CheckboxRoot = styled(Checkbox.Root, {
    padding: '0.5rem',
    borderRadius: '50%',
    width: '20px',
    height: '20px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    border: '1px solid $Blue',
    background: 'none',

    '&:hover': {
        background: '$purple'
    },

    '&:focus': {
        backgroundColor: '$PurpleDark',
    }
});

export const CheckboxIndicator = styled(Checkbox.Indicator, {
    color: '$gray100',
});

export const ButtonContainer = styled('div', {
    height: '24px',
    width: '24px',
    borderRadius: '4px',
    cursor: 'pointer',
    color: '$gray300',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '&:hover': {
        color: '$Danger',
        background: '$gray400'
    }
});

