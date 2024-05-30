import './App.css';
import StarRating from './components/star-ratings';

function App() {
  return (
    <div className="App">
      {/* Star rating component */}
      <StarRating noOfStars={10} />
    </div>
  );
}

export default App;
