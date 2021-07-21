import { TextField, Button } from "@material-ui/core";
import { NewDiv } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router";


const Form = () => {

    const history = useHistory();

    const schema = yup.object().shape({
        name: yup.string().required("Campo obrigatório"),
        email: yup.string().email("Email inválido").required("Campo obrigatório"),
        password: yup
            .string()
            .required("Campo obrigatório")
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Senha invalida"
            ),
        passwordConfirm: yup
            .string()
            .required("Campo obrigatório")
            .oneOf([yup.ref("password"), null], "As senhas devem ser iguais")
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const handleForm = (data) => {
        history.push(`/sucess/${data.name}`)
    }

    return (
        <NewDiv>
            <form onSubmit={handleSubmit(handleForm)}>
                <div>
                    <TextField
                        label="Nome"
                        variant="outlined"
                        margin="normal"
                        {...register("name")}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                    />
                </div>
                <div>
                    <TextField
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        {...register("email")}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />
                </div>
                <div>
                    <TextField
                        label="Senha"
                        variant="outlined"
                        margin="normal"
                        type="password"
                        {...register("password")}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />
                </div>
                <div>
                    <TextField
                        label="Confirmar Senha"
                        variant="outlined"
                        margin="normal"
                        type="password"
                        {...register("passwordConfirm")}
                        error={!!errors.passwordConfirm}
                        helperText={errors.passwordConfirm?.message}
                    />
                </div>
                <div>
                    <Button type="submit" variant="outlined" color="primary">
                        Enviar
                    </Button>
                </div>
            </form>
        </NewDiv>)
};

export default Form;