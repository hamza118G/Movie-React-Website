import { useState, useEffect, useRef } from "react";

//Helper
import { isPersistedState } from "../helpers";


//API

import API from '../API';

const initialState = {
    page:0,
    results:[],
    total_Pages:0,
    total_results:0
}

export const useHomeFetch = () => {

    const [searchTerm , setSearchTerm] = useState('');
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const[error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    
    const fetchMovies = async (page, searchTerm = "" ) => {
        try {
            setError(false);
            setLoading(true);
            

            const movies = await API.fetchMovies(searchTerm, page);
            console.log(movies);
            setLoading(false);

            
            setState(prev => ({
                ...movies,
                results:
                page > 1 ?[ ...prev.results,...movies.results] : [...movies.results]
            }));


            
        }

            catch(error){
                setError(true);
            }
    };

           // Initial render    



            useEffect(() => {
                if (!searchTerm){
                    const sessionState = isPersistedState('homeState');

                    if (sessionState){
                        console.log("Grabbing from sessionStorage")
                        setState(sessionState);
                        return;
                    }
                }
                console.log('Geabbing from API');
                setState(initialState);
                fetchMovies(1, searchTerm);
            }, [searchTerm]);

            //Load More

            useEffect(() => {

                if(!isLoadingMore) return;

                fetchMovies(state.page + 1, searchTerm  );

                setIsLoadingMore(false);

            },[isLoadingMore , searchTerm, state.page]);

            // write to session storage
            useEffect(() => {
                if(!searchTerm) sessionStorage.getItem('homestate', JSON.stringify(state))
            },[searchTerm, state] )

            return {state, loading, error,searchTerm, setSearchTerm, setIsLoadingMore}
}