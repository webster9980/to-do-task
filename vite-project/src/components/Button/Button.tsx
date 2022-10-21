import { PlusCircle } from "phosphor-react";
import { ButtonTask } from "./styles";

export function Button(){
    return(
        <ButtonTask>
            Criar
            <PlusCircle size={18} />
        </ButtonTask>
    );
}