import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/layouts/DefaultLayout';
import { publicRoutes } from './routes/index';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    route.layout === null ? (
                                        <Page />
                                    ) : (
                                        <DefaultLayout>
                                            <Page />
                                        </DefaultLayout>
                                    )
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
