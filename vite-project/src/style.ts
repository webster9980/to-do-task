import { styled } from "./styles/stitches.config";

export const HeaderContainer = styled('header', {
    background: '$gray700', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '200px',

    form: {
        position: 'relative',
        top: 'calc(200px - 8rem)',
        display: 'flex',
        gap: '8px'
    }
});

export const ContentContainer = styled('main', {
    background: '$gray600',
    height: 'calc(100vh - 200px)',
});

export const HeaderContent = styled('header', {
    width: '100%',
    maxWidth: '740px',
    paddingTop: '90px',
    margin: '0 auto',

    display: 'flex',
    justifyContent: 'space-between',
});

export const TaskCreated = styled('p', {
    color: '$Blue',
    fontWeigh: 700,
    fontSize: '0.875rem',
    lineHeight: '1rem'
});

export const ConcludedTask = styled('p', {
    fontWeight: 700,
    fontSize: '0.875rem',
    lineHeight: '1rem',
    color: '$purple'
})

export const Span = styled('span', {
    backgroundColor: '$gray400',
    color: '$gray200',
    padding: '2px 8px',
    borderRadius: '999px'
});

export const Main = styled('main', {
    width: '100%',
    maxWidth: '730px',
    margin: '24px auto',
    borderTop: '1px solid $gray400',
    paddingTop: '64px',

    display: 'flex',
    flexDirection: 'column',
    gap: '12px',

});

export const InputTask = styled('input', {
    width: '523px',
    maxWidth: '600px',
    borderRadius: '0.5rem',
    padding: '1rem',
    gap: '0.5rem',
    background: '$gray500',
    border: '1px solid $grey700',
    fontWeight: '400',
    fontSize: '1rem',
    lineHeight: '140%',
    color: '$gray100',
    '&::placeholder': {
        color: '$gray300',
    },

    '&:focus': {
        border: '2px solid',
        borderColor: '#5E60CE'
    }   
});
