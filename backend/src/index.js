require("dotenv").config();

const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const mongoose = require("mongoose");
const api = require("./api");
const session = require("koa-session");

const app = new Koa();
const router = new Router();

const {
	PORT: port = 4000,
	MONGO_URI: mongoURI,
	COOKIE_SIGN_KEY: signKey
} = process.env;

mongoose.Promise = global.Promise;
mongoose.connect(mongoURI).then(() => {
	console.log("connected to mongodb");
}).catch((e) => {
	console.error(e);
});


router.use("/api", api.routes());


app.use(bodyParser());

const sessionConfig = {
	maxAge: 86400000, // 1 day
	// signed: true (default)
};

app.use(session(sessionConfig, app));
app.keys = [signKey];


// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
	console.log("listening to port", port);
});