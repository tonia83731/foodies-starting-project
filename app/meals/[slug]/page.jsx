export default function MealsDetailsPage({params: {slug}}) {
  return (
    <main>
      <h1>This is Meals Details Page</h1>
      <p>item: {slug}</p>
    </main>
  );
}
