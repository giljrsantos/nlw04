import request from 'supertest';
import { getConnection } from 'typeorm';
import { app } from '../app';
import createConnection from '../database';

describe("Users", () => {

    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    afterAll(async () => {
        const connection = getConnection();
        await connection.dropDatabase();
        await connection.close();
    });    

    it("Should be able to create a new user", async () => {
        const response = await request(app).post("/users")
            .send({
                email: "user@exemplo.com",
                name: "User Exemple"
            });

            expect(response.status).toBe(201);
    });

    it("Should not be able to create a usar with exists email", async () => {
        const response = await request(app).post("/users")
            .send({
                email: "user@exemplo.com",
                name: "User Exemple"
            });

            expect(response.status).toBe(201);
    });

});