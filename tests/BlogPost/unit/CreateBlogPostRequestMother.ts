import {CreateBlogPostRequest} from '../../../src/BlogPost/dtos/CreateBlogPostRequest'
import { DateMother } from '../../Shared/DataGenerator/DateMother';
import { EmailMother } from '../../Shared/DataGenerator/EmailMother';
import { LongTextMother } from '../../Shared/DataGenerator/LongTextMother';
import { SentenceMother } from '../../Shared/DataGenerator/SentenceMother';
import { UuidMother } from '../../Shared/DataGenerator/UuidMother';
import { WordMother } from '../../Shared/DataGenerator/WordMother';

export class CreateBlogPostRequestMother{

  static radom = ():CreateBlogPostRequest  => {

    const request = {
      id: UuidMother.random(), 
      title: WordMother.random(),
      description: SentenceMother.random(), 
      body: LongTextMother.byNumberOfParagraphs(10), 
      date: DateMother.past().toISOString() ,
      authorEmail: EmailMother.random()
    }
    
    return request
  }

  static futureDate = ():CreateBlogPostRequest  => {

    const request = {
      id: UuidMother.random(), 
      title: WordMother.random(),
      description: SentenceMother.random(), 
      body: LongTextMother.byNumberOfParagraphs(10), 
      date: DateMother.future().toISOString() ,
      authorEmail: EmailMother.random()
    }
    
    return request
  }

  static wrongEmail = ():CreateBlogPostRequest  => {

    const request = {
      id: UuidMother.random(), 
      title: WordMother.random(),
      description: SentenceMother.random(), 
      body: LongTextMother.byNumberOfParagraphs(10), 
      date: DateMother.past().toISOString() ,
      authorEmail: "I am not an email"
    }
    
    return request
  }

  static tooShortTitle = ():CreateBlogPostRequest  => {

    const request = {
      id: UuidMother.random(), 
      title: "a",
      description: SentenceMother.random(), 
      body: LongTextMother.byNumberOfParagraphs(10), 
      date: DateMother.past().toISOString() ,
      authorEmail: EmailMother.random()
    }
    
    return request
  }

}

