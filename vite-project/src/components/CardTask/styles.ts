import * as Checkbox from '@radix-ui/react-checkbox';
import { styled } from "../../styles/stitches.config";

export const CardContainer = styled('section', {
    maxWidth: '736px',
    width: '100%',
    background: '$gray400',

    display: 'flex',
    justifyContent: 'space-between',
    gap: '12px',
    alignItems: 'center',
    padding: '1rem',
    borderRadius: '0.5rem',

    p: {
        color: '$gray100',
        fontWeight: '400',
        fontSize: '0.875rem',
        lineHeight: '1.25rem'
    }
});

export const CheckboxRoot = styled(Checkbox.Root, {
    padding: '0.5rem',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'none',
    border: '1px solid $Blue',
});

export const CheckboxIndicator = styled(Checkbox.Indicator, {
    color: '$gray100',
});

export const ButtonContainer = styled('div', {
    cursor: 'pointer',
    color: '$gray300',
    '&:hover': {
        color: '$Danger'
    }
});

