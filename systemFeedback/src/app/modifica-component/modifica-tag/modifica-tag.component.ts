import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tag } from 'src/app/model/tag';
import { TagService } from 'src/app/servizi/tag.service';

@Component({
  selector: 'app-modifica-tag',
  templateUrl: './modifica-tag.component.html',
  styleUrls: ['./modifica-tag.component.css']
})
export class ModificaTagComponent implements OnInit{


  tag: Tag = new Tag();
  message!: string;
  idTag!: number;

  constructor(
    private crud: TagService, private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.idTag = this.activatedRoute.snapshot.params ['id'];
    this.crud.getTags(this.idTag).subscribe((tag:Tag) =>{
      this.tag = tag;
    });
  }

  onSubmit(tag:Tag): void{
    this.crud.addTag(this.tag)
    this.tag = new Tag();
  }

}
