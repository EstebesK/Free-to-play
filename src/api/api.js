import * as axios from 'axios';

const axiosInstance = axios.create({
    baseURL: `https://free-to-play-games-database.p.rapidapi.com/api/`,
    headers: {
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        'x-rapidapi-key': '9601f11a60mshb96418aa9153e9ap14718fjsn1cfa6090f566'
    }
})

export const gamesApi = {
    getGamesList() {
        return axiosInstance.get(`games`)
            .then(response => {
                return response.data
            })
    },
    getSortedGamesList(sort) {
        return axiosInstance.get(`games?sort-by=${sort}`)
            .then(response => {
                return response.data
            })
    },
    getGamesListByPlatform(platform) {
        return axiosInstance.get(`games?platform=${platform}`)
            .then(response => {
                return response.data
            })
    },
    getGamesListByCategory(category) {
        return axiosInstance.get(`games?&category=${category}`)
            .then(response => {
                return response.data
            })
    },
    getSortedGamesListByAllFilters(platform, category, sort) {
        return axiosInstance.get(`games?platform=${platform}&category=${category}&sort-by=${sort}`)
            .then(response => {
                return response.data
            })
    },
}
