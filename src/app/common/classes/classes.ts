export class NewsDetails{
    title:string
    description:string
    summary:string
    fullNews:string
}

export class LoginDetails
{
    emailId: string
    password:string

    constructor(email:string,password:string)
    {
        this.emailId=email;
        this.password=password;
    }
}
