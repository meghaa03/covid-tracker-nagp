import { Component, OnInit } from '@angular/core';
import { INewsDetails } from 'src/app/common/interfaces/interfaces';
import { NewsService } from 'src/app/services/news.services';
import { NewsDetails } from 'src/app/common/classes/classes';
import { Constants } from 'src/app/common/constants';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-news-update',
    templateUrl: './news-update.component.html',
    providers:[MessageService],
    styleUrls:['./news-update.component.css']
})
export class NewsUpdateComponent implements OnInit{

    newsDetails:INewsDetails;

    newsUpdateForm:FormGroup;

    constructor(private _news: NewsService, private messageService: MessageService) {

    }
    ngOnInit(): void {
        this.newsUpdateForm=new FormGroup({
            title:new FormControl('',[Validators.required]),
            description:new FormControl('',[Validators.required]),
            summary:new FormControl('',[Validators.required]),
            fullNews:new FormControl('',[Validators.required])
        });
    }

    updateNews()
    {
        this.newsDetails=new NewsDetails();
        
        this.newsDetails.title=this.newsUpdateForm.value.title;
        this.newsDetails.description=this.newsUpdateForm.value.description;
        this.newsDetails.summary=this.newsUpdateForm.value.summary;
        this.newsDetails.fullNews=this.newsUpdateForm.value.fullNews;
        
        this._news.AddNewNews(this.newsDetails);
        this.messageService.add({severity:'success', summary:'News Added', detail:'Saved Successfully'});
            
        this.newsUpdateForm.reset();
    }

}