import { useWordContext } from "../WordContext";
import ErrorMessage from "./ErrorMessage";

function Main({ children }) {
  const { error } = useWordContext();

  return (
    <main>
      {error ? (
        <div className="mt-12">
          <ErrorMessage message={"Something went wrong"} />
        </div>
      ) : (
        children
      )}
    </main>
  );
}

export default Main;
