import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AlertStore from "./components/WarningSign";
import BadgeStore from "./components/MyBadge";
import OneBook from "./components/SingleBook";
import BooksList from "./components/ListOfBooks";
import InputSearch from "./components/FilterBookList";
import NavBar from "./components/MyNav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <AlertStore text="This is some example" />
      <BadgeStore color="success" text="whahahaha" />
      <InputSearch />
      <BooksList />
      <Footer />
    </>
  );
}

export default App;
