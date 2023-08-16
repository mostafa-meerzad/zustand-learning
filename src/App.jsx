import { create } from "zustand";
import "./App.css";

const useBearStore = create((set) => ({
  bears: 4,
  increaseBearCount: () =>
    set((state) => ({
      bears: state.bears + 1,
    })),
  decreaseBearCount: () =>
    set((state) => ({ bears: state.bears > 0 ? state.bears - 1 : 0 })),
  killAllBears: () =>
    set({
      bears: 0,
    }),
}));

function App() {
  return (
    <>
      <ShowBears />
      <br />
      <AddBear />
      <RemoveBear />
      <br />
      <br />
      <KillAllBears />
    </>
  );
}

export default App;

function ShowBears() {
  const { bears } = useBearStore();
  return <div>{bears} around here...</div>;
}

function AddBear() {
  const { increaseBearCount } = useBearStore();
  console.log(increaseBearCount);

  return <button onClick={increaseBearCount}>add a bear</button>;
}

function RemoveBear() {
  const { decreaseBearCount } = useBearStore();

  return <button onClick={decreaseBearCount}>remove a bear</button>;
}

function KillAllBears() {
  const killArrBears = useBearStore((state) => state.killAllBears);
  console.log(killArrBears);

  return <button onClick={killArrBears}>Kill all of them</button>;
}
