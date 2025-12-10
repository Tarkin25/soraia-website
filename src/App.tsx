import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Home from "./pages/Home";
import Container from "./components/Container";
import Krankheitsbild from "./pages/Krankheitsbild";
import Diagnostik from "./pages/Diagnostik";
import Ablauf from "./pages/Ablauf";
import Nachsorge from "./pages/Nachsorge";

export default function App() {
    return (
        <div className="">
            <Header />
            <Container>
                <Routes>
                    <Route index Component={Home} />
                    <Route path="krankheitsbild" Component={Krankheitsbild} />
                    <Route path="diagnostik" Component={Diagnostik} />
                    <Route path="ablauf" Component={Ablauf} />
                    <Route path="nachsorge" Component={Nachsorge} />
                </Routes>
            </Container>
        </div>
    )
}