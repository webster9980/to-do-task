import { Trash } from "phosphor-react";
import { ButtonContainer, CardContainer, CheckboxIndicator, CheckboxRoot, P } from "./styles";

import { TaskProps } from '../../App'

import { CheckIcon } from '@radix-ui/react-icons'

export function CardTask({content, isComplete}: TaskProps){

    return(
        <CardContainer>
            <CheckboxRoot>
                <CheckboxIndicator>
                    <CheckIcon />
                </CheckboxIndicator>
            </CheckboxRoot>
            <P>
                {content}
            </P>
            <ButtonContainer role='button'>
                <Trash size={20} />
            </ButtonContainer>
        </CardContainer>
    );
}