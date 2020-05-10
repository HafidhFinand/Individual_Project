const axios = require('axios');

class TvController {
    static showPopular(req, res, next) {
        axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
            .then(response => {
                const { data } = response
                res.status(200).json(data);
            })
            .catch(err => {
                next(err);
            })
    }

    static showTopRated(req, res, next) {
        axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`)
            .then(response => {
                const { data } = response
                res.status(200).json(data);
            })
            .catch(err => {
                next(err);
            })
    }

    static showOnAir(req, res, next) {
        axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.API_KEY}&language=en-US&page=1`)
            .then(response => {
                const { data } = response
                res.status(200).json(data);
            })
            .catch(err => {
                next(err);
            })
    }

    static showAiringToday(req, res, next) {
        axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.API_KEY}&language=en-US&page=1`)
            .then(response => {
                const { data } = response
                res.status(200).json(data);
            })
            .catch(err => {
                next(err);
            })
    }
}

module.exports = TvController;