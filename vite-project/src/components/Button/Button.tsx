import { PlusCircle } from "phosphor-react";
import { ButtonTask } from "./styles";



export function Button(){
    return(
        <ButtonTask type="submit">
            Criar
            <PlusCircle size={18} />
        </ButtonTask>
    );
}