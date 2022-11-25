import { Check, Trash } from "phosphor-react";
import { ButtonContainer, CardContainer, CheckboxIndicator, CheckboxRoot } from "./styles";

import { TaskProps } from '../../App'

export function CardTask({content}: TaskProps){

    return(
        <CardContainer>
            <CheckboxRoot>
                <CheckboxIndicator>
                    <Check size={22} weight="duotone"  />
                </CheckboxIndicator>
            </CheckboxRoot>
            <p>
                {content}
            </p>
            <ButtonContainer role='button'>
                <Trash size={24} />
            </ButtonContainer>
        </CardContainer>
    );
}