import BookCatalogue from "@/components/Home/BookCatalogue";
import RefreshAnimation from "@/components/Home/RefreshAnimation";

const bookData = [1, 2, 3, 4, 5];

export default function Home() {
  return (
    <div>
      <div className="w-full h-[1200px] flex flex-row flex-wrap justify-start items-start ">
        {bookData.map((data) => {
          return <BookCatalogue />;
        })}
      </div>
    </div>
  );
}
