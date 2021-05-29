import { hash } from "bcryptjs";
import { v4 as uuidV4 } from "uuid";

import createConnection from "../index";

async function create() {
  const connection = createConnection("localhost");

  const id = uuidV4();
  const password = await hash("admin", 8);

  (await connection).query(
    `INSERT INTO users (id, "name", "password", email, driver_license, "isAdmin", created_at) 
    VALUES('${id}', 'Admin', '${password}', 'admin@email.com', 'xxxxxxx', true, now());
    `
  );

  await (
    await connection
  ).close;
}

create().then(() => console.log("User admin created"));
