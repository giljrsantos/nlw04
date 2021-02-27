import { EntityRepository, Repository } from "typeorm";
import { SurveyUser } from "../models/SurveyUser";

@EntityRepository(SurveyUser)
class SurveysUsersRepostitory extends Repository<SurveyUser> {}


export { SurveysUsersRepostitory };