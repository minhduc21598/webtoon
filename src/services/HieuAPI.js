import {url} from '../const';

const getDaily = (day) =>{
    return fetch(
        `${url}schedule/${day}`,
        {
            method: 'GET',
            headers:{
                Accept: 'application/json',
                'Content-type':'application/json'
            }
        }
    )
}

const getAnimeByGenre=(genreID, page) =>{
    return fetch(
        `https://api.jikan.moe/v3/genre/anime/1/1`,
        {
            method: 'GET',
            headers:{
                Accept: 'application/json',
                'Content-type':'application/json'
            }
        }
    )
}

const getAnimeByYear=(year, season) =>{
    return fetch(
        `${url}season/${year}/${season}`,
        {
            method: 'GET',
            headers:{
                Accept: 'application/json',
                'Content-type':'application/json'
            }
        }
    )
}

export{
    getDaily,
    getAnimeByGenre,
    getAnimeByYear
}