import "./App.css";
import { Info } from "./info";
import { Actions } from "./action";
import { Keyboard } from "./keyboard";

export function App() {
  return (
    <>
      <Keyboard>
        <Info></Info>
        <Actions></Actions>
      </Keyboard>
    </>
  );
}
