import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/layouts/DefaultLayout';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/:slug" element={<DefaultLayout />} />
                    <Route path="/" element={<DefaultLayout />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
