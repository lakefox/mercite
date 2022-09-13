import { error, redirect, json } from '@sveltejs/kit';
import { MongoClient } from "mongodb";

import 'dotenv/config';

let mongoURI = `mongodb+srv://LAKEFOX:${process.env.MONGOPASSWORD}@instanceone.tdbnt.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(mongoURI);

/** @type {import('./$types').RequestHandler} */
export async function POST({ params, request }) {
    const database = client.db('InstanceOne');
    const body = await request.formData(); // or request.json(), etc
    try {
        const table = body.get("table");
        const tableDB = database.collection(table);

        let keys = [...body.entries()];
        let doc = {};

        for (let i = 0; i < keys.length; i++) {
            const element = keys[i];
            if (["redirect", "table"].indexOf(element[0]) == -1) {
                doc[element[0]] = element[1];
            }
        }

        await tableDB.insertOne(doc);
    } finally {
        await client.close();
        throw redirect(307, body.get("redirect") || "/");
    }
}