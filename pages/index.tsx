import Head from "next/head";
import type { NextPage, GetStaticProps } from "next";
import { Banner, SmallCard, MediumCard, LargeCard } from "../components";

import { ExploreData, CardsData } from "../types";

interface HomeProps {
  exploreData: ExploreData[];
  cardsData: CardsData[];
}

const Home: NextPage<HomeProps> = ({ exploreData, cardsData }) => {
  return (
    <div>
      <Head>
        <title>Airbnb App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />

      <div className="pt-6 px-8 sm:px-16 max-w-7xl mx-auto">
        <section>
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, location, distance }, i) => (
              <SmallCard
                key={distance + i}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData.map(({ img, title }, i) => (
              <MediumCard key={title + i} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard img="/the_greatest_outdoors.webp" title="The Greatest Outdoors" description="Wishlists curated by Airbnb" buttonText="Get Inspired"/>
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const exploreData = await fetch(
    "http://localhost:3000/api/exploreNearby"
  ).then((res) => res.json());

  const cardsData = await fetch("http://localhost:3000/api/liveAnywhere").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
};
