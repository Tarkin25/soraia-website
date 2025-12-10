import { useEffect } from "react";
import { NavLink, useLocation } from "react-router";

const routes = {
    "/": "Home",
    "/krankheitsbild": "Krankheitsbild",
    "/diagnostik": "Diagnostik",
    "/ablauf": "Ablauf & Allgemeine Informationen",
    "/nachsorge": "Nachsorge",
    "/weitere-informationen": "Weitere Informationen",
    "/forum": "Forum"
} as { [key: string]: string };

const title = "Bestes Projekt der HSLU";

export default function Header() {
    const location = useLocation();

    useEffect(() => {
        document.title = `${title} | ${routes[location.pathname]}`;
    }, [location]);

    return (
        <header className="bg-teal-600 flex mb-8 px-12 py-4 text-white sticky top-0">
            <NavLink to="/"><h1 className="text-3xl">Bestes Projekt der HSLU</h1></NavLink>
            <nav className="ml-8 flex gap-4 items-center text-xl">
                {Object.entries(routes).map(([path, name]) => (
                    <NavLink key={path} to={path} className={({ isActive }) => isActive ? "underline" : ""}>{name}</NavLink>
                ))}
            </nav>
        </header>
    )
}