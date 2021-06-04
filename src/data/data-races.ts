import { checkYear, roundCheck } from '../lib/utils';
import {F1} from './data-source';
export class RacesData extends F1{
    constructor(){
        super();    
    }
    async getYear(year: string){
        const currentYear = new Date().getFullYear();
        if(isNaN(+year) || +year < 1950 || +year > currentYear){
            year = String(currentYear);
        }
        return await this.get(`${year}.json`,{
            cacheOptions: {ttl: 60}
        });
       
    }
    async getYearRound(year: string, round: number){
        year = checkYear(year);
        round = roundCheck(round);
        return await this.get(`${ year }`,{
            cacheOptions: {ttl:60}
        });
    }
}  