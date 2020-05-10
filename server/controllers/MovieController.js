const axios = require('axios');

class MovieController {
    static showPopular(req, res, next) {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
            .then(response => {
                const { data } = response
                res.status(200).json(data);
            })
            .catch(err => {
                next(err);
            })
    }

    static showTopRated(req, res, next) {
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`)
            .then(response => {
                const { data } = response
                res.status(200).json(data);
            })
            .catch(err => {
                next(err);
            })
    }

    static showNowPlaying(req, res, next) {
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`)
            .then(response => {
                const { data } = response
                res.status(200).json(data);
            })
            .catch(err => {
                next(err);
            })
    }
}

module.exports = MovieController;