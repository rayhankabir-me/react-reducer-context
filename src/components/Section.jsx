import { LevelContext } from "../utils/LevelContext";

// eslint-disable-next-line react/prop-types
export default function Section({ level, children }) {
  return (
    <section className="section">
      <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
    </section>
  );
}
