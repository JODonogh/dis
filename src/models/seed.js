import { db } from "."; //importing database from index

const postSeed = [
  // array of three objects, dummy data/posts
  {
    Title: "This is it",
    Status: "Alive",
  },
  {
    Title: "her we are",
    Status: "Dead",
  },
  {
    Title: "Begins",
    Status: "Alive",
  },
];

const seed = async () => {
  //async function
  try {
    // try catch block, await database since this is asynchronous
    await db.createCollection("posts");

    //variable seed posts
    const seedPosts = await db
      .collection("lists") // we want the collection posts
      .insertMany(postSeed);

    console.log("Database seeded 🌱");
    return { seedMsg: seedPosts }; // returning an object
  } catch (x) {
    console.error(x);
    return { error: x }; // returning an object
  }
};

seed();
