import { ToastAndroid } from 'react-native';
import CheckConnection from './CheckConnection';
import { getSeason, getYear } from './GetSysDate';
import { url } from '../const';

const getCurrentSeason = async () => {
    const checked = await CheckConnection();
    if (checked) {
        let year = getYear();
        let season = getSeason();
        return fetch(`${url}season/${year}/${season}`,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            }
        )
    } else {
        ToastAndroid.showWithGravity('Please check your network !', ToastAndroid.SHORT, ToastAndroid.CENTER);
    }
}

const getRecomAnime = async (id) => {
    const checked = await CheckConnection();
    if (checked) {
        return fetch(`${url}anime/${id}/recommendations/`,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            }
        )
    } else {
        ToastAndroid.showWithGravity('Please check your network !', ToastAndroid.SHORT, ToastAndroid.CENTER);
    }
}

const getTypeAnime = async (page, type) => {
    const checked = await CheckConnection();
    if (checked) {
        return fetch(`${url}top/anime/${page}/${type}`,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            }
        )
    } else {
        ToastAndroid.showWithGravity('Please check your network !', ToastAndroid.SHORT, ToastAndroid.CENTER);
    }
}

const getRecomManga = async (id) => {
    const checked = await CheckConnection();
    if (checked) {
        return fetch(`${url}manga/${id}/recommendations`,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            }
        )
    } else {
        ToastAndroid.showWithGravity('Please check your network !', ToastAndroid.SHORT, ToastAndroid.CENTER);
    }
}

const getTypeManga = async (page, type) => {
    const checked = await CheckConnection();
    if (checked) {
        return fetch(`${url}top/manga/${page}/${type}`,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            }
        )
    } else {
        ToastAndroid.showWithGravity('Please check your network !', ToastAndroid.SHORT, ToastAndroid.CENTER);
    }
}

const getDaily = async (day) => {
    const checked = await CheckConnection();
    if (checked) {
        return fetch(
            `${url}schedule/${day}`,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json'
                }
            }
        )
    } else {
        ToastAndroid.showWithGravity('Please check your network !', ToastAndroid.SHORT, ToastAndroid.CENTER);
    }
}

const getAnimeByYear = async (year, season) => {
    const checked = await CheckConnection();
    if (checked) {
        return fetch(
            `${url}season/${year}/${season}`,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json'
                }
            }
        )
    } else {
        ToastAndroid.showWithGravity('Please check your network !', ToastAndroid.SHORT, ToastAndroid.CENTER);
    }
}

const getResultSearch = async (type, name, page) => {
    const checked = await CheckConnection();
    if (checked) {
        return fetch(`${url}search/${type}/?q=${name}&page=${page}`,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            }
        )
    }
    else {
        ToastAndroid.showWithGravity('Please check your network !', ToastAndroid.SHORT, ToastAndroid.CENTER);
    }
}

const getMangaCharacters = async (id) => {
    const checked = await CheckConnection();
    if (checked) {
        return fetch(`${url}manga/${id}/characters`,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            }
        )
    } else {
        ToastAndroid.showWithGravity('Please check your network !', ToastAndroid.SHORT, ToastAndroid.CENTER);
    }
}

export {
    getCurrentSeason,
    getRecomAnime,
    getTypeAnime,
    getRecomManga,
    getTypeManga,
    getDaily,
    getAnimeByYear,
    getResultSearch,
    getMangaCharacters,
};