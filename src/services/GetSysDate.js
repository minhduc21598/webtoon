import {season} from '../const';

const getSeason = () => {
    let d = new Date();
    let currentMonth = d.getMonth() + 1;
    if(currentMonth >= 2 && currentMonth <= 4) return season[0];
    else if(currentMonth >= 5 && currentMonth <= 7) return season[1];
    else if(currentMonth >= 8 && currentMonth <= 10) return season[2];
    else return season[3];
};

const getYear = () => {
    let d = new Date();
    let currentYear = d.getFullYear();
    return currentYear;
};

export { getSeason, getYear }