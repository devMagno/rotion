import { Link } from "react-router-dom";

export function Document() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center text-rotion-400">
      Documento
      <Link to="/" className="block font-bold hover:underline">
        Voltar à tela inicial
      </Link>
    </main>
  );
}
