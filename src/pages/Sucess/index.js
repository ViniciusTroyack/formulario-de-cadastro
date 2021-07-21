import { NewDiv } from "./styles";
import { Button } from "@material-ui/core";
import { useParams, useHistory } from "react-router";

const Sucess = () => {
    const params = useParams()
    const history = useHistory();

    return (
        <NewDiv>
            <div>Seja Bem vindo, {params.nome}</div>
            <Button type="submit" variant="outlined" color="primary" onClick={() => history.push('/')}>
                Voltar
            </Button>
        </NewDiv >)
}

export default Sucess;