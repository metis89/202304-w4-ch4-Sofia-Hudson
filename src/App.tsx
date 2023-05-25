import "./App.css";
import { Header } from "../header/header";

export function App() {
  const label = "Desde fuera";
  const options: MenuOptions = [
    { url: "", label: "Home" },
    { url: "todo", label: "Todo List" },
    { url: "notes", label: "Notes List" },
  ];

  return (
    <>
      <Header label={label} user="Pepe">
        <Menu options={options}></Menu>
      </Header>

      <AppRoutes></AppRoutes>
    </>
  );
}
