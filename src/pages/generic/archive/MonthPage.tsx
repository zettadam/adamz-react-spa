import { Link, useLocation, useParams } from "react-router-dom";

export function MonthPage() {
  const l = useLocation();
  const { year, month } = useParams();

  const s = l.pathname.split("/")[1];

  return (
    <main>
      <h4>
        Archive Month:{" "}
        {year ? <Link to={`/${s}/archive/${year}`}>{year}</Link> : null}
        {month ? ` / ${month}` : null}
      </h4>
      <p>Month page will be rendered here.</p>
    </main>
  );
}
