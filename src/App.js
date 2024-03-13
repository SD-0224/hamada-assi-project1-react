import './App.css';
import { Favorites } from './pages/favourites/favourites';
import TopicsContainer from './pages/home/components/topicsContainer/topicsContainer';
import Welcome from './shared/components/Welcome/welcome';
import { Footer } from './shared/components/footer/footer';
import { Header } from './shared/components/header/header';

function App() {
  return (
    <>
      <Header></Header>
      <main>
      <Welcome></Welcome>
      <TopicsContainer></TopicsContainer>
      <Favorites></Favorites>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
