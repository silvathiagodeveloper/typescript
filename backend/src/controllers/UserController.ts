import { Request, Response } from 'express'
import EmailService from '../services/EmailService';

const users = [
    { name : 'Thiago', email : 'email@teste.com' }
]

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to: { name: 'Thiago', email: 'teste@tese' },
            message: {subject: 'Cadastrado', body: 'Foi cadastrado'}
        });

        return res.send();
    }
}