import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';

export default class Films extends Component {

    constructor() {
        super();

        this.state = { films: [] };
    }

    async componentDidMount() {
        const { episode_id } = this.props.match.params;

        const response = await api.get(`/films/${episode_id}`);

        this.setState({ films: response.data })
    }

    render () {
        const { films } = this.state;
        
        if (films) {
            
            return (
                <div className="film-info interna">
                    <div className="thumb-filme">
                        <div className={"filmes episodio_" + films.episode_id }></div>
                    </div>
                    
                    <div className="descricao">
                        <h1 className="titulo">{films.title}</h1>
                        <p><b>Resumo: </b> {films.opening_crawl}</p> 
                        <p><b>Diretor: </b> {films.director}</p>
                        <p><b>Produtor: </b>{films.producer}</p> 
                        <p><b>Lançamento: </b>{films.release_date}</p> 
                        <a href="/">Voltar a lista</a>
                    </div>
                </div>
            );
        }

        return (
            <div className="film-info">
                <h1>Filme nao disponivel</h1>
            </div>
        )
    }

}