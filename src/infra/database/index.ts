// mongooseConnection.ts
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

// console.log('Valor de MONGODB_URL:', process.env.MONGODB_URL);

export async function connect() {
    try {
        const url = process.env.MONGODB_URL as string;

        if (!url) {
            throw new Error('A string de conexão do MongoDB não está definida no arquivo .env');
        }

        await mongoose.connect(url);
        console.log('Conectado ao banco de dados');
    } catch (error) {
        console.error(error, 'Erro ao conectar ao banco de dados');
    }
}
