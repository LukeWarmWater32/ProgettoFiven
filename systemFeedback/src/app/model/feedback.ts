export class Feedback{
  id: number;
  feedbacksType: string;
  sendDate: Date;
  createdAt: Date;
  updatedAt: Date;
  enable: Boolean;
  description: string;

  constructor(){
      this.id = 0;
      this.feedbacksType = '';
      this.sendDate = new Date;
      this.createdAt = new Date;
      this.updatedAt = new Date;
      this.enable = new Boolean("");
      this.description = '';
  }


}
