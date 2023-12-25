import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouters } from './routes';
import DefaultLayout from './components/layouts/DefaultLayout';
function App() {
    return (
        <Router>
            <div className="App">
                {/* <Routes>
                    {publicRouters.map((route, index) => {
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route}
                                element={<Page />}
                            />
                        );
                    })}
                </Routes> */}
                <DefaultLayout />
            </div>
        </Router>
    );
}

export default App;
