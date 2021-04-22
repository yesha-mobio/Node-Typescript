import dotenv from 'dotenv';

dotenv.config();

const MONGO_OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};

const MONGO = {
    url: `mongodb://localhost:27017/NodeWithTypescript`,
    options: MONGO_OPTIONS
};

const SERVER_PORT = process.env.SERVER_PORT || 1337;
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const config = {
    mongo: MONGO,
    server: SERVER
};

export default config;
