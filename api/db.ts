// import { load } from "https://deno.land/std@0.224.0/dotenv/mod.ts";
import { MongoClient } from "npm:mongodb@5.6.0";

// const { MONGODB_URI } = await load();
// 



try {
  // console.log("Before connecting to MongoDB");
  // await client.db("admin").command({ ping: 1 });
  // console.log("Connected to MongoDB");
  // await client.db("gearup_db").command({ ping: 1 });
  // console.log("Connected to MongoDB");

} catch (error) {
  console.log("Error connecting to MongoDB", error);
}

// const db = client.db('gearup_db');
// const gear = db.collection<GearItem>('gear');


interface GearItem {
  _id: { $oid: string; };
  name: string;
  type: 'tent' | 'hotel' | 'all';
  amount: number;
}

// export const getGear = async ({ response }: { response: any; }) => {
//   try {
//     const allGear = await gear.find({}).toArray();
//     console.log(allGear);
//     if (allGear) {
//       response.status = 200;
//       response.body = {
//         success: true,
//         data: allGear,
//       };
//     } else {
//       response.status = 500;
//       response.body = {
//         success: false,
//         msg: "Internal Server Error",
//       };
//     }
//   } catch (err) {
//     response.body = {
//       success: false,
//       msg: err.toString(),
//     };
//   }
// };

// client.close();