export class Feedback{
    id: number;
    feedbacks_type: string;
    send_date: Date;
    created_at: Date;
    updated_at: Date;
    enable: Boolean;
    description: string;
    
    constructor(){
        this.id = 0;
        this.feedbacks_type = '';
        this.send_date = new Date;
        this.created_at = new Date;
        this.updated_at = new Date;
        this.enable = new Boolean("");
        this.description = '';
    }

}