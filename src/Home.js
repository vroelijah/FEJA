
import { Link } from 'react-router-dom';
import './css/Home.css';





let Home = ()=>{

    return(
    

    <div>
        <h1><center>Home</center></h1>
        <button class="filter-button">Filter</button>
        <div class="grid-container">
        <div class="grid-item"><button>Parking</button></div>
        <div class="grid-item"><button>Studying</button></div>
        <div class="grid-item"><button>Gym</button></div>
</div>
    

    

    </div>

    )


}

export default Home;