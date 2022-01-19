import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

class UserController {
    async index(request: Request, response: Response) {
        const users = await prismaClient.user.findMany();

        return response.json(users);
    }

    async find(request: Request, response: Response) {
        const { id } = request.params;
        const user = await prismaClient.user.findFirst({ where: { id: Number(id) } });

        if(!user)
            return response.status(400).json({ error: 'User not found!' });

        return response.json(user);
    }

    async create(request: Request, response: Response) {
        const { name, email } = request.body;

        if(await prismaClient.user.findFirst({ where: {email} }))
           return response.status(400).json({ error: 'Email already exists!' }); 

        const user = await prismaClient.user.create({
            data: {
                name,
                email
            }
        });

        return response.status(201).json(user);
    }

    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { name, email } = request.body;
        const user = await prismaClient.user.findFirst({ where: { id: Number(id) } });

        if(!user)
            return response.status(400).json({ error: 'User not found!' });
        
        if(await prismaClient.user.findFirst({
            where: {
                email,
                id: {
                    not: user.id
                }
            }
        }))
            return response.status(400).json({ error: 'Email already exists!' });

        await prismaClient.user.update({
            where: { id: Number(id) },
            data: { name, email }
        });

        return response.status(204).send();
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const user = await prismaClient.user.findFirst({ where: { id: Number(id) } });

        if(!user)
            return response.status(400).json({ error: 'User not found!' });

        await prismaClient.user.delete({ where: { id: Number(id) } });

        return response.status(204).send();
    }
}

export default new UserController();