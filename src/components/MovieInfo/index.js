import React from "react";
//Component
import Thumb from '../Thumb';
//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
//IMAGE
import NoImage from '../../images/no_image.jpg';
//Styles
import {Wrapper, Content, Text} from'./MovieInfo.styles';

const MovieInfo = ({movie}) => (
    <Wrapper id="mybackground" backdrop={movie.backdrop_path}>
        <Content>
            {/* <pre>{JSON.stringify(movie)}</pre> */}
            <Thumb
              image={
                  movie.poster_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                  : NoImage
              }
              clickable={false}
                />

                <Text>
                    <h1>{movie.title}</h1>
                    <h3>PLOT</h3>
                    <p>{movie.overview}</p>

                    <div className="rating-directors">
                        <div>
                            <h3>RATING</h3>
                            <div className="score">{movie.vote_average}</div>
                        </div>
                        <div className="director">
                            <h3>DIRECTORS{movie.directors.length > 1 ? 'S' : ''}</h3>
                            {movie.directors.map(director => (
                                <p key={director.credit_id}>{director.name}</p>
                            ))}

                        </div>
                    </div>
                </Text>
        </Content>
    </Wrapper>
)
export default MovieInfo;