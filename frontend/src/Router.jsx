import { Route, Routes} from 'react-router-dom';
import Home from './containers/Home';
import Addtocart from "./containers/Home"

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adtocart" element={<Addtocart />} />
        </Routes>
    );
};
export default Router;
