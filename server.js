
import http from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import fs from "node:fs";

const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
http.createServer((_req, res) => {
	fs.readFile(join(__dirname, "public/index.html"), (err, data) => {
		if (err) {
			res.writeHead(404);
			return;
		}
		else {
			res.writeHead(200, { "content-type": "text/html" });
			res.write(data);
		}
		res.end();
	});
}).listen(port);

console.log("server running at http://localhost");
