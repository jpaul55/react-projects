import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";

function App() {
    return (
      <>
      <Header />
      <div className="container">
        <div className="feedback-container">
          <FeedbackItem />
        </div>
      </div>
      </>
    )
}

export default App;
