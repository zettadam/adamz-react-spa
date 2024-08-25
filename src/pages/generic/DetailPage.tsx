import { useParams } from "react-router-dom";

export function DetailPage() {
  const { id } = useParams();
  return (
    <main className="detail">
      <p>Detail ({id}) page will be rendered here.</p>
    </main>
  );
}
