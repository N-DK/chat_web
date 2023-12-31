import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/layouts/DefaultLayout';
import Profile from './components/Profile';
import Sidebar from './components/layouts/DefaultLayout/Sidebar';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route
                        path="/profile"
                        element={
                            <DefaultLayout>
                                <Profile />
                            </DefaultLayout>
                        }
                    />
                    <Route
                        path="/chatroom"
                        element={
                            <DefaultLayout>
                                <Sidebar />
                            </DefaultLayout>
                        }
                    />
                    <Route
                        path="/"
                        element={
                            <DefaultLayout>
                                <Sidebar />
                            </DefaultLayout>
                        }
                    />
                    <Route
                        path="/groups"
                        element={
                            <DefaultLayout>
                                <Sidebar />
                            </DefaultLayout>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
