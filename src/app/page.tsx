import BookCatalogue from "@/components/Home/BookCatalogue";
import RefreshAnimation from "@/components/Home/RefreshAnimation";
import books from "../../public/mock-data/products.json";

export default function Home() {
  return (
    <div>
      <div className="w-full h-auto flex flex-row flex-wrap justify-around items-start ">
        {books.map((book, id) => {
          return <BookCatalogue key={id} book={book} />;
        })}
      </div>
    </div>
  );
}
