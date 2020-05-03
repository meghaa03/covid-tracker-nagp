import { Component, OnInit } from '@angular/core';
import { INewsDetails } from 'src/app/common/interfaces/interfaces';
import { NewsService } from 'src/app/services/news.services';

@Component({
    selector: 'app-news-display',
    templateUrl: './news-display.component.html',
    styleUrls:['./news-display.component.css']
})
export class NewsDisplayComponent implements OnInit {

    newsList: INewsDetails[] = [];

    constructor(private _newsService: NewsService) 
    {
        this._newsService.newsUpdated.subscribe((updateNewsList:INewsDetails[])=>{
            this.newsList=updateNewsList;
        })
    }

    ngOnInit(): void {
        this.newsList = this._newsService.GetAllNews();
    }
}