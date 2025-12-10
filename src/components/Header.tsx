import { useEffect } from "react";
import { NavLink, useLocation } from "react-router";
import logo from '../assets/logo.png';

const routes = {
    "/": "Home",
    "/krankheitsbild": "Krankheitsbild",
    "/diagnostik": "Diagnostik",
    "/ablauf": "Ablauf & Allgemeine Informationen",
    "/nachsorge": "Nachsorge",
    "/kontaktstellen": "Kontaktstellen",
    "/forum": "Forum"
} as { [key: string]: string };

const title = "SmilePath";

export default function Header() {
    const location = useLocation();

    useEffect(() => {
        document.title = `${title} | ${routes[location.pathname]}`;
    }, [location]);

    return (
        <header className="bg-[#C08081] flex mb-8 px-12 py-2 text-white sticky top-0">
            <NavLink to="/"><img src={logo} className="h-32 overflow-hidden" /></NavLink>
            <nav className="ml-8 flex gap-4 items-center text-xl">
                {Object.entries(routes).map(([path, name]) => (
                    <NavLink key={path} to={path} className={({ isActive }) => isActive ? "underline" : ""}>{name}</NavLink>
                ))}
            </nav>
        </header>
    )
}