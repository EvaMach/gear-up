import { config } from 'https://deno.land/x/dotenv@v3.2.2/mod.ts';

const { DATA_API_KEY, APP_ID } = config();

const BASE_URI = `https://data.mongodb-api.com/app/${APP_ID}/endpoint/data/v1/action`;

const DATA_SOURCE = "Cluster0";
const DATABASE = "gearup_db";
const COLLECTION = "gear";

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "api-key": DATA_API_KEY
  },
  body: ""
};

interface GearItem {
  _id: {$oid: string};
  name: string;
  type: 'tent' | 'hotel' | 'all';
  amount: number;
}

export const getGear = async ({ response }: { response: any }) => {
  try {
    const URI = `${BASE_URI}/find`;
    const query = {
      collection: COLLECTION,
      database: DATABASE,
      dataSource: DATA_SOURCE
    };
    options.body = JSON.stringify(query);
    const dataResponse = await fetch(URI, options);
    const {data: allGear} = await dataResponse.json();

    if (allGear) {
      response.status = 200;
      response.body = {
        success: true,
        data: allGear,
      };
    } else {
      response.status = 500;
      response.body = {
        success: false,
        msg: "Internal Server Error",
      };
    }
  } catch (err) {
    response.body = {
      success: false,
      msg: err.toString(),
    };
  }
};
