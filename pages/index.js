import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>Diploma IT Experiments</title>
      </Head>

      <section className="w-full h-[80vh] bg-gray-50 font-montserrat grid place-items-center">
        <h1 className="text-4xl font-extrabold underline">
          Thank Me Later
        </h1>
      </section>
    </>
  );
};

export default Home;