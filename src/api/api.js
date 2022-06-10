import * as axios from 'axios';

const axiosInstance = axios.create({
    baseURL: `https://free-to-play-games-database.p.rapidapi.com/api/`,
    headers: {
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY
    }
})

export const gamesApi = {
    getGamesList() {
        try {
            return axiosInstance.get(`games`)
                .then(response => {
                    return response.data
                })
        } catch (e) {
            console.log('error')
        }

    },
    getSortedGamesList(sort) {
        try {
            return axiosInstance.get(`games?sort-by=${sort}`)
                .then(response => {
                    return response.data
                })
        } catch (e) {
            console.log('error')
        }

    },
    getGamesListByPlatform(platform) {
        try {
            return axiosInstance.get(`games?platform=${platform}`)
                .then(response => {
                    return response.data
                })
        } catch (e) {
            console.log('error')
        }

    },
    getGamesListByCategory(category) {
        try {
            return axiosInstance.get(`games?category=${category}`)
                .then(response => {
                    return response.data
                })
        } catch (e) {
            console.log('error')
        }

    },
    getSortedGamesListByAllFilters(platform, category, sort) {
        try {
            return axiosInstance.get(`games?platform=${platform}&category=${category}&sort-by=${sort}`)
                .then(response => {
                    return response.data
                })
        } catch (e) {
            console.log('error')
        }
    },
    detail(id) {
        try {
            return axiosInstance.get(`game?id=${id}`)
                .then(response => {
                    return response.data
                })
        } catch (e) {
            console.log('error')
        }
    }
}
