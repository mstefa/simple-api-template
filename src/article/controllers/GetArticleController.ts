import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { Controller } from './Controller';


export class GetBlogPostController extends Controller {
  async run(req: Request, res: Response) {
    const id = req.params.id;
    try {
      console.log(id)
      res.status(httpStatus.OK).json(
        {
          id: "ef8ac118-8d7f-49cc-abec-78e0d05af80a",
          title: "This is the title",
          description: "Kindness to he horrible reserved ye. Effect twenty indeed beyond for not had county. The use    him without greatly can private. Increasing it unpleasant no of contrasted no continuing. Nothing colonel my no removed in weather. It dissimilar in up devonshire inhabiting.",
          body: "He unaffected sympathize discovered at no am conviction principles. Girl ham very how yet hill four show. Meet lain on he only size. Branched learning so subjects mistress do appetite jennings be in. Esteems up lasting no village morning do offices. Settled wishing ability musical may another set age. Diminution my apartments he attachment is entreaties announcing estimating. And total least her two whose great has which. Neat pain form eat sent sex good week. Led instrument sentiments she simplicity.To sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses. Admiration has sir decisively excellence say everything inhabiting acceptance. Sooner settle add put you sudden him.",
          date: "2022-10-28T12:28:40.905Z",
          authorEmail: "mstefanutti24@gmail.com"
        }
      );
    } catch (error) {
      this.errorHandling(error, res);
    }
  }
}

