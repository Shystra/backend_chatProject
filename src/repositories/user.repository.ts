import { UsersModel } from "../infra/models/users.model"

class UserRepository {
    //Métodos
    async create({ name, email, password }){
        const result = await UsersModel.create({ name, email, password});
            return result;
    }

    async findUserByEmail({ email }){
        const result = await UsersModel.find({ email });
            return result
    } 
}

export { UserRepository }