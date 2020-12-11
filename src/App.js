import Row from './Row';
import requests from './request';
import Banner from './Banner';
import './App.css';

function App() {

  // 49ff79ae71652e665b4084b23dd0a138 tmdb api key
  return (
    <div className="App">
       {/* Nav here.. */}

       <Banner />
      {/* <h1>Hello Netflix Clone!</h1> */}
      <Row title='NETFLIX ORIGINALS' 
           isLargeRow
          fetchUrl={requests.fetchNetflixOriginals} />
      <Row title='Trending Now'  fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated'  fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies'  fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies'  fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movies'  fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance Movies'  fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries'  fetchUrl={requests.fetchDocumentaries} />

    </div>
  );
}

export default App;
