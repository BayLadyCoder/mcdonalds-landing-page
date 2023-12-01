import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-10'>
      <h1 className='text-4xl font-bold mb-5 text-gray-800'>WcDonald's Menu</h1>
      <p className='container w-full lg:w-4/5 text-xl mb-2 indent-8 text-gray-700 text-justify'>
        Indulge your senses at our burger haven, where every bite tells a story
        of flavor and craftsmanship. At WcDonald's, we take pride in elevating
        the art of burger-making to a culinary experience. Picture succulent,
        handcrafted patties made from premium, locally sourced ingredients,
        perfectly grilled to perfection and nestled within artisanal buns that
        redefine freshness.
      </p>
      <p className='container w-full lg:w-4/5 text-xl mb-10 indent-8 text-gray-700 text-justify'>
        Our menu is a symphony of taste, featuring gourmet creations and classic
        favorites that cater to every palate. From the sizzle on the grill to
        the moment you sink your teeth into one of our mouthwatering creations,
        we promise an unforgettable journey for your taste buds. With a
        commitment to quality, innovation, and an ambiance that exudes warmth,
        WcDonald's invites you to savor the extraordinary – because exceptional
        burgers are more than just a meal; they're a culinary adventure.
        culinary adventure.
      </p>
      <div className='grid grid-cols-2 gap-4 w-full lg:w-3/5'>
        <a
          href='#'
          className='flex flex-col justify-center items-center border-solid border-2 border-gray-300 rounded-md p-6'
        >
          <Image
            src='/mainMenu/breakfast.jpeg'
            alt='Vercel Logo'
            className='dark:invert'
            width={450}
            height={450}
            priority
          />
          <p className='text-2xl text-gray-800'>Breakfast</p>
        </a>
        <a
          href='#'
          className='flex flex-col justify-center items-center border-solid border-2 border-gray-300 rounded-md p-6'
        >
          <Image
            src='/mainMenu/burgers.jpeg'
            alt='Vercel Logo'
            className='dark:invert'
            width={400}
            height={400}
            priority
          />
          <p className='text-2xl text-gray-800'>Burgers</p>
        </a>
        <a
          href='#'
          className='flex flex-col justify-center items-center border-solid border-2 border-gray-300 rounded-md p-6'
        >
          <Image
            src='/mainMenu/sweets.jpeg'
            alt='Vercel Logo'
            className='dark:invert'
            width={450}
            height={450}
            priority
          />
          <p className='text-2xl text-gray-800'>Sweets</p>
        </a>
        <a
          href='#'
          className='flex flex-col justify-center items-center border-solid border-2 border-gray-300 rounded-md p-6'
        >
          <Image
            src='/mainMenu/beverages.jpeg'
            alt='Vercel Logo'
            className='dark:invert'
            width={450}
            height={450}
            priority
          />
          <p className='text-2xl text-gray-800'>Beverages</p>
        </a>
      </div>
    </main>
  );
}
