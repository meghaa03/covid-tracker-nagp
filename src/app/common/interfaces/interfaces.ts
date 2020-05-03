export interface IStatewiseInfo{
    active: string
    confirmed: string
    deaths: string
    deltaconfirmed: string
    deltadeaths: string
    deltarecovered: string
    lastupdatedtime: string
    recovered: string
    state: string
    statecode: string
    statenotes: string
}

export interface IDistrictMapper{
    name: string
    details: IDistrictInfo
}

export interface IDistrictInfo{
    notes: string
    active: number
    confirmed: number
    deceased: number
    recovered: number
    delta: any
}

export interface INewsDetails{
    title:string
    description:string
    summary:string
    fullNews:string
}

export interface IUserDetails
{
    userId:number
    emailId: string
    password:string
}

export interface ILoginDetails
{
    emailId: string
    password:string
}