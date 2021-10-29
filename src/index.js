import app from "./app";
import '../src/config/database';

app.listen(app.get("port"));
console.log("Server on port", app.get('port'));