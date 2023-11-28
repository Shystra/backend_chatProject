import mongoose from "mongoose"

export async function connect () {
    try {
        await mongoose.connect('mongodb+srv://shystra:lfGOAAXCNaYggCzG@cluster0.d57giuu.mongodb.net/chatHero');
    } catch (error) {
        console.log(error, 'Erro ao conectar ao banco de dados')
    }
}