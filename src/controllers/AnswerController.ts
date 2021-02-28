import { Apperror } from './../errors/Apperror';
import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SurveysUsersRepostitory } from '../repositories/SurveysUsersRepostitory';


class AnswerController{
    // http://localhost:3333/ansewers/10?u=050a43f8-bfc4-43e3-9202-f61bb3b50ef7
    /*
        Route Params => Parametros que compõe a rota -> routes.get('/answers/:value')
        Query Params => Busca, Paginaçao, não obrigatórios -> vem sempre depois do ponto de INTERROGAÇÃO "?"
            routes.get('/answers/?valeu=10') - chave=valor
    */
    async execute(req: Request, res: Response){
        const { valeu } = req.params;
        const { u } = req.query;

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepostitory);

        const surveyUser = await surveysUsersRepository.findOne({
            id: String(u)
        });

        if(!surveyUser){
            throw new Apperror("Survey User does not exists!");
        }

        surveyUser.valeu = Number(valeu);

        await surveysUsersRepository.save(surveyUser);

        return res.json(surveyUser);
    }

}

export { AnswerController }