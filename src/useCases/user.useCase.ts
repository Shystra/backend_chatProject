import { UserRepository } from "../repositories/user.repository";



class Users{
    private usersRepository: UserRepository;
    constructor(){
        this.usersRepository = new UserRepository()   
    }

    // Verificar se o usuário existe
    async create({ name, email, password }){

        const findUser = await this.usersRepository.findUserByEmail({ 
            email,
        });
        if(findUser){
            throw new Error("User exists.")
        }
        return findUser;
    }
}

export { Users };
