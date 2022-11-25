import { styled } from "../../styles/stitches.config";

export const ContainerCardEmpty = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
    p: {
        fontWeight: 700,
        fontSize: '1rem',
        lineHeight: '1.375rem',
        textAlign: 'center',
        color: '$gray300',
        marginTop: '1rem'
    },

    span: {
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: '1.375rem',
        textAlign: 'center',
        color: '$gray300',
    }
});