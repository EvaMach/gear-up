import { load } from "https://deno.land/std@0.224.0/dotenv/mod.ts";
import type { RouterContext } from "https://deno.land/x/oak@v16.0.0/mod.ts";


const { APP_ID, DATA_API_KEY } = await load();

const BASE_URI = `https://eu-central-1.aws.data.mongodb-api.com/app/${APP_ID}/endpoint/data/v1/action`;

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
  _id: { $oid: string; };
  name: string;
  type: 'tent' | 'hotel' | 'all';
  amount: number;
}

interface SuccessResponse<T> {
  success: true;
  data: {
    documents: T;
  };
}

interface ErrorResponse {
  success: false;
  msg: string;
}

interface ApiResponse<T> {
  status: number;
  body: SuccessResponse<T> | ErrorResponse;
}

export const getGear = async (context: RouterContext) => {
  const { response, request } = context;
  try {

    const url = request.url;
    const type = url.searchParams.get('type');

    const URI = `${BASE_URI}/find`;
    const query = {
      collection: COLLECTION,
      database: DATABASE,
      dataSource: DATA_SOURCE,
      filter: type ? { "type": { $in: [type, "all"] } } : {},
    };
    options.body = JSON.stringify(query);
    const dataResponse = await fetch(URI, options);
    const data = await dataResponse.json();
    console.log(data);

    if (data) {
      response.status = 200;
      response.body = {
        success: true,
        data: data,
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
