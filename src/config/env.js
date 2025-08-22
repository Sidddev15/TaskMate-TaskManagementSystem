// central place to read and validate env
export const env = {
    NODE_ENV: process.env.NODE_ENV || "development",
    PORT: process.env.PORT || 8080,
    MONGO_URI: process.env.MONGO_URI,
    CORS_ORIGIN: process.env.CORS_ORIGIN || "http://localhost:5173",
};

if (!env.MONGO_URI) {
    console.warn("⚠ MONGO_URI not set, Using default local URI");
    env.MONGO_URI = "mongodb://localhost:27017/taskmate";
}
