import "./App.css";
import Blog from './screen/Blog'
import Navigation from "./components/navigation";
import Secondnav from "./components/secondnav";
import Foot from "./components/foot";
import Destination from "./screen/Destination";


function App() {
    return ( <
        div className = "App" >
        <
        Navigation / >
        <
        Secondnav / >
        <
        Blog / >
        <
        Destination / >
        <
        Foot / >
        <
        div > < /div> <
        /div>
    );
}


export default App;