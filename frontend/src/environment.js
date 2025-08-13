let IS_PROD = true;
const server = IS_PROD
  ? "https://videocalling-chatapp-sc9a.onrender.com"
  : "http://localhost:8000";

export default server;
