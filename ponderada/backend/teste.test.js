// No início do seu arquivo de teste (teste.test.js)
const request = require('supertest');
const express = require('express');
const professorController = require('./controllers/professorController');

// Configurar o express app para teste
const app = express();
app.use(express.json());
app.get('/professors', professorController.getAllProfessors);
app.get('/professors/:id', professorController.getProfessorById);
app.post('/professors', professorController.createProfessor);
app.put('/professors/:id', professorController.updateProfessor);
app.delete('/professors/:id', professorController.deleteProfessor);

jest.mock('./models/Professor', () => ({
  findAll: jest.fn(),
  findByPk: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  destroy: jest.fn(),
}));

jest.mock('./config/dbConnect', () => ({
  sequelize: {
    define: jest.fn().mockReturnValue({
      findAll: jest.fn(),
      findByPk: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      destroy: jest.fn(),
    }),
  },
}));





describe('Professor Controller Tests', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
  
    describe('GET /professors', () => {
      it('should return all professors', async () => {
        const mockProfessors = [
          // Array com dados mockados do professor, incluindo todos os atributos
          {
            id: 1,
            name: 'John Doe',
            gender: 1,
            civil_state: 1,
            race: 1,
            birthday: '1990-01-01T00:00:00.000Z',
            rg: '12345678',
            cpf: '12345678901',
            telephone: '1234567890',
            state: 1,
            city: 'Sample City',
            address: 'Sample Address',
            ong_id: 1,
            user_id: 1
          },
          // Pode adicionar mais dados mockados de outros professores aqui
        ];
        Professor.findAll.mockResolvedValue(mockProfessors);
  
        const response = await request(app).get('/professors');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockProfessors);
        expect(Professor.findAll).toHaveBeenCalled();
      });
  
      it('should handle errors when fetching professors fails', async () => {
        const errorMessage = 'Error fetching professors';
        Professor.findAll.mockRejectedValue(new Error(errorMessage));
  
        const response = await request(app).get('/professors');
        expect(response.status).toBe(500);
        expect(response.body).toEqual({ error: errorMessage });
      });
    });
  
    describe('GET /professors/:id', () => {
        it('should return a professor by ID', async () => {
          const mockProfessor = {
            id: 1,
            name: 'John Doe',
            gender: 1,
            civil_state: 1,
            race: 1,
            birthday: '1980-02-20',
            rg: 'MG123456',
            cpf: '00011122233',
            telephone: '31987654321',
            state: 1,
            city: 'Test City',
            address: '123 Test St',
            ong_id: 1,
            user_id: 1
          };
          Professor.findByPk.mockResolvedValue(mockProfessor);
      
          const response = await request(app).get('/professors/1');
          expect(response.status).toBe(200);
          expect(response.body).toEqual(mockProfessor);
        });
      
        it('should return 404 if professor not found', async () => {
          Professor.findByPk.mockResolvedValue(null);
      
          const response = await request(app).get('/professors/999');
          expect(response.status).toBe(404);
          expect(response.body).toEqual({ error: 'Professor not found.' });
        });
      });
      
  
    describe('POST /professors', () => {
        it('should create a new professor', async () => {
          const mockProfessorData = {
            id: 3,
            name: 'New Professor',
            gender: 1,
            civil_state: 1,
            race: 1,
            birthday: '1980-02-20',
            rg: 'MG123456',
            cpf: '00011122233',
            telephone: '31987654321',
            state: 1,
            city: 'Test City',
            address: '123 Test St',
            ong_id: 1,
            user_id: 1
          };
      
          Professor.create.mockResolvedValue(mockProfessorData);
      
          const newProfessor = {
            name: 'New Professor',
            gender: 1,
            civil_state: 1,
            race: 1,
            birthday: '1980-02-20',
            rg: 'MG123456',
            cpf: '00011122233',
            telephone: '31987654321',
            state: 1,
            city: 'Test City',
            address: '123 Test St',
            ong_id: 1,
            user_id: 1
          };
      
          const response = await request(app).post('/professors').send(newProfessor);
          expect(response.status).toBe(201);
          expect(response.body).toEqual(expect.objectContaining(mockProfessorData));
        });
      
        it('should handle errors if creation fails', async () => {
          const errorMessage = 'Error creating professor';
          Professor.create.mockRejectedValue(new Error(errorMessage));
      
          const newProfessor = {
            // Tentativa de criar um professor com dados incompletos ou inválidos
            name: '', // Nome vazio para simular um erro
          };
      
          const response = await request(app).post('/professors').send(newProfessor);
          expect(response.status).toBe(500);
          expect(response.body).toEqual({ error: errorMessage });
        });
      });
      
      
  
    describe('GET /professors/:id', () => {
        it('should return a professor by ID', async () => {
          Professor.findByPk.mockResolvedValue({
            id: 1,
            name: 'John Doe',
            gender: 1,
            civil_state: 1,
            race: 1,
            birthday: '1990-01-01',
            rg: '12345678',
            cpf: '12345678901',
            telephone: '1234567890',
            state: 1,
            city: 'Sample City',
            address: 'Sample Address',
            ong_id: 1,
            user_id: 1
          });
      
          const response = await request(app).get('/professors/1');
          expect(response.status).toBe(200);
          expect(response.body).toEqual(mockProfessor);
        });
      
        it('should return 404 if professor not found', async () => {
          Professor.findByPk.mockResolvedValue(null);
      
          const response = await request(app).get('/professors/999');
          expect(response.status).toBe(404);
          expect(response.body).toEqual({ error: 'Professor not found.' });
        });
      });
      
  
      describe('DELETE /professors/:id', () => {
        it('should delete a professor by ID', async () => {
          Professor.findByPk.mockResolvedValue({
            id: 1,
            destroy: jest.fn().mockResolvedValue({}),
          });
      
          const response = await request(app).delete('/professors/1');
          expect(response.status).toBe(200);
          expect(response.body).toEqual({ message: 'Professor deleted successfully.' });
        });
      
        it('should return 404 if professor not found to delete', async () => {
          Professor.findByPk.mockResolvedValue(null);
      
          const response = await request(app).delete('/professors/999');
          expect(response.status).toBe(404);
          expect(response.body).toEqual({ error: 'Professor not found.' });
        });
      });
      
      describe('PUT /professors/:id', () => {
        it('should update a professor by ID', async () => {
          const mockProfessorUpdateData = {
            id: 1,
            name: 'Updated Professor',
            gender: 2,
            civil_state: 2,
            race: 2,
            birthday: '1980-03-30',
            rg: 'MG654321',
            cpf: '99988877766',
            telephone: '31987654321',
            state: 2,
            city: 'Updated City',
            address: '456 Updated St',
            ong_id: 2,
            user_id: 2
          };
      
          Professor.findByPk.mockResolvedValue({
            ...mockProfessorUpdateData,
            save: jest.fn().mockResolvedValue(mockProfessorUpdateData)
          });
      
          const updatedProfessor = {
            name: 'Updated Professor',
            // ... todos os outros campos que você permite atualizar
          };
      
          const response = await request(app).put('/professors/1').send(updatedProfessor);
          expect(response.status).toBe(200);
          expect(response.body).toEqual(expect.objectContaining(mockProfessorUpdateData));
          expect(Professor.findByPk).toHaveBeenCalledWith(1);
        });
      
        it('should return 404 if professor not found', async () => {
          Professor.findByPk.mockResolvedValue(null);
      
          const response = await request(app).put('/professors/999').send({ name: 'Does Not Exist' });
          expect(response.status).toBe(404);
          expect(response.body).toEqual({ error: 'Professor not found.' });
        });
      });
      

  });
  