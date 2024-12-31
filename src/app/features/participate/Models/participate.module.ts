export interface ParticipateModule { 
  questionId:string;
  answerId?:string;
  answers?:{
    answerId:string,
  }[];
}
