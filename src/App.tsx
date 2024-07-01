import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Home from './pages/home';
import Layout from './layout';

const MetaData = () => (
  <Helmet>
    <title>E-commerce VTEX</title>
    <meta name="description" content="E-commerce VTEX - O melhor lugar para encontrar celulares, notebooks e tecnologia." />
    <meta name="keywords" content="e-commerce, celular, tecnologia, notebook, computador, iphone" />
    <meta name="author" content="George Lucas" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <html lang="pt-BR" />
    <meta charSet="UTF-8" />
  </Helmet>
);

export default function App() {
  return (
    <HelmetProvider>
      <MetaData />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}
