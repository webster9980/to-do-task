import { ButtonContainer, CardContainer, CheckboxIndicator, CheckboxRoot, P } from "./styles";

import { Trash } from "phosphor-react";
import { CheckIcon } from '@radix-ui/react-icons'

interface CardTaskProps {
    id: number,
    content: string,
    isComplete: boolean,
    onDelete: (taskToDelete: number) => void
    onUpdate: (taskToDelete: number) => void
}

export function CardTask({content, onDelete, id, onUpdate, isComplete}: CardTaskProps){

    function deleteTask(){
        onDelete(id)
    }

    function updateTask(){
        onUpdate(id)
    }

    return(
        <CardContainer>
            <CheckboxRoot onClick={updateTask}>
                <CheckboxIndicator >
                    <CheckIcon />
                </CheckboxIndicator>
            </CheckboxRoot>
            <P isComplete={isComplete}>
                {content}
            </P>
            <ButtonContainer role='button' onClick={deleteTask}>
                <Trash size={20} />
            </ButtonContainer>
        </CardContainer>
    );
}