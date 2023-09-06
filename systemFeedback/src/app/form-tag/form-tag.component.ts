import { Component, OnInit } from '@angular/core';
import { Tag } from '../model/tag';
import { TagService } from '../servizi/tag.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-tag',
  templateUrl: './form-tag.component.html',
  styleUrls: ['./form-tag.component.css']
})
export class FormTagComponent implements OnInit{

  message!: string;
  tag: Tag = new Tag();
  tags:Tag[]=[]

  constructor(private crud: TagService, private router: Router){}


  ngOnInit(): void {
  }

  insertTag(tag: Tag): void {
    this.crud.addTag(tag).subscribe((message: string) => {
      this.message = message;
    });
  }
  
  getTag(id: number): any{
    this.crud.getTags(id).subscribe(( tagObs: Tag) => {this.tag = tagObs})
  }

  onSearch(): void {
    this.tag = this.getTag(this.tag.id);
  }

  resetMessage(): void{
    this.message = "";
  }

  onSubmit(): void {
    this.insertTag(this.tag);
    this.router.navigate(['tabForn']);
    this.tag = new Tag();
  }

}
