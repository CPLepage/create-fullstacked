import {describe, it} from "mocha";
import {ok} from "assert";
import {resolve} from "path";
import Mongo from "../server/mongodb.js";
import testIntegration from "fullstacked/utils/testIntegration.js";
import {dirname} from "path";
import {fileURLToPath} from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

testIntegration(describe("MongoDB Template Tests", function(){
    it('Should get connection', async function(){
        const mongo = new Mongo();
        const connection = await mongo.getConnection();
        ok(connection);
        await connection.close();
    });
}), resolve(__dirname, ".."));
