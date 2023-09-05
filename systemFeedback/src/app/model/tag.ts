export class Tag{
    id: number;
    tag_name: string;
    description: string;
    created_at: Date;
    update_at: Date;
    enable: Boolean;

    constructor(){
        this.id = 0;
        this.tag_name = '';
        this.description = '';
        this.created_at = new Date;
        this.update_at = new Date;
        this.enable = new Boolean("")
    }
}