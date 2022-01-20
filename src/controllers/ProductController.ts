import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

class ProductController {
    async index(request: Request, response: Response) {
        const products = await prismaClient.product.findMany();

        return response.json(products);
    }

    async find(request: Request, response: Response) {
        const { id } = request.params;
        const product = await prismaClient.product.findFirst({ where: { id: Number(id) } });

        if(!product)
            return response.status(400).json({ error: 'Product not found!' });

        return response.json(product);
    }

    async create(request: Request, response: Response) {
        const { description, user_id } = request.body;

        if(!description)
            return response.status(400).json({ error: 'Product description can\'t be null' });
        
        if(user_id === null)
            return response.status(400).json({ error: 'User ID can\'t be null' });
        
        if(!(await prismaClient.user.findFirst({ where: { id: user_id } })))
            return response.status(400).json({ error: 'User not found!' });
        
        const product = await prismaClient.product.create({
            data: {
                description,
                user_id
            }
        });

        return response.status(201).json(product);
    }

    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { description, user_id } = request.body;

        if(!(await prismaClient.product.findFirst({ where: { id: Number(id) } })))
            return response.status(400).json({ error: 'Product not found!' });
        
        if(!description)
            return response.status(400).json({ error: 'Product description can\'t be null' });
        
        await prismaClient.product.update({
            where: { id: Number(id) },
            data: { description }
        });

        return response.status(204).send();
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;

        if(!(await prismaClient.product.findFirst({ where: { id: Number(id) } })))
            return response.status(400).json({ error: 'Product not found!' });

        await prismaClient.product.delete({ where: { id: Number(id) } });
        return response.status(204).send();
    }
}

export default new ProductController();