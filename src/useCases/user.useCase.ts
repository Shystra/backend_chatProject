import { ICreate } from "../interfaces/users.interface";
import { UserRepository } from "../repositories/user.repository";
import { hash } from 'bcrypt';


class Users{
    private usersRepository: UserRepository;
    constructor(){
        this.usersRepository = new UserRepository()   
    }

    // Verificar se o usuário existe
    async create({ name, email, password }: ICreate){

        const findUser = await this.usersRepository.findUserByEmail({ 
            email,
        });
        if(findUser){
            throw new Error("User exists.")
        }
        const hashPassword = await hash(password, 10)

        const result = await this.usersRepository.create({ name, email, password: hashPassword })

        return findUser;
    }
}

export { Users };
