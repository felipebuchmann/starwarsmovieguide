import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './styles.css';

export default class Main extends Component {

    state = {
        films: [],
    }

    componentDidMount() {
        this.loadFilms();
    }

    loadFilms = async () => {
        const response = await api.get("/films");

        this.setState({ films: response.data.results })
    };

    getEpisode(url) {
        return url.match(/\d/)
    }
    
    render () {
        const { films } = this.state;

        return (
            <div className="list-movies">
                { films.map( film => {
                    
                    let filmId = this.getEpisode(film.url);
                    let className = [`episodio_${film.episode_id}`, 'filmes', 'capa-do-filme'].join(' ');

                    return (
                        <Link className="capa" to={`/films/${filmId}`} key={film.episode_id}>
                            <article className={className}>                                
                            </article>
                            <h2 className="titulo">{film.title}</h2>
                        </Link>
                )})}
            </div>
        );
    }
}