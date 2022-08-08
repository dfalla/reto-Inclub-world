import Http from '../../common';

const endpoint = `http://localhost:3001/servicios`;

const getAll = () => {
    return Http.get(endpoint);
}

const getOne = (id) => {
    return Http.get(`${endpoint}/${id}`);
}

const create = (body) => {
    return Http.post(endpoint, body);
}

const update = (id, body) => {
    return Http.put(`${endpoint}/${id}`, body);
}

const remove = (id) => {
    return Http.delete(`${endpoint}/${id}`);
}

const ServiciosHttp = {
    getAll,
    // getAll2,
    getOne,
    create,
    update,
    delete: remove,
}

export default ServiciosHttp;








