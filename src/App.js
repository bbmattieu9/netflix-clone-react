import Row from './Row';
import requests from './request';

function App() {

  // 49ff79ae71652e665b4084b23dd0a138 tmdb api key
  return (
    <div className="App">
      <h1>Hello Netflix Clone!</h1>
      <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} />
      <Row title='Trending Movies'  fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
