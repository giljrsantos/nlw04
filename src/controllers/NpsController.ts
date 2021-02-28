import { Request, Response } from 'express';
import { getCustomRepository, Not, IsNull } from 'typeorm';
import { SurveysUsersRepostitory } from '../repositories/SurveysUsersRepostitory';
class NpsController {
    async execute(req: Request, res: Response) {
        const { survey_id } = req.params;
        const surveysUsersRepository = getCustomRepository(SurveysUsersRepostitory);
        const surveysUsers = await surveysUsersRepository.find({
            survey_id,
            valeu: Not(IsNull())
        });
        //Filtrando os Detratores
        const detractor = surveysUsers.filter((survey) => survey.valeu >= 0 && survey.valeu <= 6).length;
        //Filtrando os Promotores
        const promoters = surveysUsers.filter((survey) => survey.valeu >= 9 && survey.valeu <= 10).length;
        //Filtrando os Passivos
        const passive = surveysUsers.filter((survey) => survey.valeu >= 7 && survey.valeu <= 8).length;
        //Total Respondentes
        const totalAnswers = surveysUsers.length;
        //Calculo de NPS
        const calculate = Number(((promoters - detractor) / totalAnswers) * 100).toFixed(2);

        return res.json({
            detractor,
            promoters,
            passive,
            totalAnswers,
            nps: `${calculate} %`
        });
    }
}
export { NpsController }