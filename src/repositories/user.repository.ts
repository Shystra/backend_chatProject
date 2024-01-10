import { UsersModel } from "../infra/models/users.model"
import { ICreate, IEmailUser } from "../interfaces/users.interface";

class UserRepository {
    //Métodos
    async create({ name, email, password }: ICreate){
        const result = await UsersModel.create({ name, email, password});
            return result;
    }

    async findUserByEmail({ email }: IEmailUser){
        const result = await UsersModel.find({ email });
            return result
    } 
}

export { UserRepository }