import {Api} from "../ApiConfig"

const getAll =  () => { 
    const { data } =  Api().get('api/usuarios')
    return data;
};

export const TarefasService = {
    getAll
}
