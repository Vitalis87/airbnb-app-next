import { NextPage, GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { format } from "date-fns";
import { SearchResultsData } from "../types";
import { InfoCard, Map } from "../components";

interface SearchProps {
  searchResults: SearchResultsData[];
}

const Search: NextPage<SearchProps> = ({ searchResults }) => {
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuests } = router.query;

  const formattedStartDate = format(
    new Date(startDate.toLocaleString()),
    "dd MMMM yy"
  );
  const formattedEndDate = format(
    new Date(endDate.toLocaleString()),
    "dd MMMM yy"
  );

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <>
      <section className="flex-grow pt-14 px-6">
        <p className="text-xs">
          300+ Stays - {range} - for {numberOfGuests} guests
        </p>

        <h1 className="text-3xl font-semibold mt-2 mb-6">
          Stays in {location}
        </h1>

        <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
          <p className="button">Cancelletion Flexibility</p>
          <p className="button">Type of Place</p>
          <p className="button">Price</p>
          <p className="button">Rooms and Beds</p>
          <p className="button">More filters</p>
        </div>

        <div className="flex flex-col">
          {searchResults.map(
            ({
              img,
              location,
              title,
              description,
              star,
              price,
              total,
              long,
            }) => (
              <InfoCard
                key={long}
                img={img}
                location={location}
                title={title}
                description={description}
                star={star}
                price={price}
                total={total}
              />
            )
          )}
        </div>
      </section>

      <section className="hidden xl:inline-flex xl:min-w-[600px]">
        <Map searchResults={searchResults}/>
      </section>
    </>
  );
};

export default Search;

export const getServerSideProps: GetServerSideProps = async () => {
  const searchResults = await fetch(
    "http://127.0.0.1:3000/api/searchResults"
  ).then((res) => res.json());

  return {
    props: {
      searchResults,
    },
  };
};
