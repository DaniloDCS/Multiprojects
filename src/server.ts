import App from "./App";
import "dotenv/config";

const PORT = process.env.PORT || 3000;

App.listen(PORT, () => console.log(`Running in host: http://127.0.0.1:${PORT}`));
