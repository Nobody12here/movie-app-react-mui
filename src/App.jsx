import React, { useState, useEffect } from 'react'
import MovieCard from './components/MovieCard'
import MovieInfo from './components/MovieInfo'
import { Container, Pagination } from '@mui/material'
import Header from './components/header'
//A simple comment for testing purpose
function App() {
    const [Moviedata, setMoviedata] = useState({
        page: 0,
        results: [],
        total_results: 0,
        total_pages: 0
    });
    const [MovieInfodata, setMovieInfodata] = useState({
        page: 0,
        results: [],
        total_results: 0,
        total_pages: 0
    });
    const [display, SetDisplay] = useState(false);
    const [Loading, setLoading] = useState(false)
    const [page, SetPage] = useState(1);

    let url = `https://api.themoviedb.org/3/trending/movie/day?api_key=560501c8aef8e0ec67feee5aadb5689f&page=${page}`

    async function fetchData(url) {
        const request = await fetch(url)
        const resp = await request.json();
        setMoviedata(resp);
        setLoading(false);
    }


    useEffect(() => {

        setLoading(true);
        fetchData(url);

    }, [url]);

    if (Loading) {

        return <div>Loading Data</div>

    }

    return (
        <Container>
            <Header />
            <Container className="container" fixed disableGutters={true} sx={{ marginTop: 10, display: "flex", flexFlow: "row wrap", alignContent: 'space-between' }}>

                {
                    Moviedata.results.map((data) => {
                        return (

                            <MovieCard data={data} SetDisplay={SetDisplay} setMovieInfodata={setMovieInfodata}>
                            </MovieCard>
                        )
                    })
                }
                {
                    display ? <MovieInfo data={MovieInfodata} SetDisplay={SetDisplay} ></MovieInfo> : ""
                }
            </Container>
            <Pagination sx={{ padding: 2, justifyContent: "center" }} color="primary" size="large" count={Moviedata.total_pages} page={page} onChange={(e, pageNumber) => SetPage(pageNumber)} />
        </Container>
    )

}

export default App;
