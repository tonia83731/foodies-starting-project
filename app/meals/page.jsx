import Link from "next/link";

export default function MealsPage() {
  const item_name = ["meal-1", "meal-2", "meal-3", "meal-4", "meal-5"];
  return (
    <main>
      <h1>This is Meals Page</h1>
      <Link href="/meals/share">Share</Link>
      <ul>
        {
          item_name.map((item) => {
            return (
              <li key={item}>
                <Link href={`/meals/${item}`}>{item}</Link>
              </li>
            );
          })
        }
      </ul>
    </main>
  );
}
