const passport = require("passport");
const { BasicStrategy } = require("passport-http");

const basicAuthApi = [
  {
    username: process.env.BASIC_AUTH_USERNAME,
    password: process.env.BASIC_AUTH_PASSWORD,
  },
];

passport.use(
  new BasicStrategy((username, password, done) => {
    const user = basicAuthApi.find(
      (u) => u.username === username && u.password === password
    );
    if (!user) {
      return done(null, false, { message: "Invalid credentials" });
    }
    return done(null, user);
  })
);

const isAuthenticated = passport.authenticate("basic", { session: false });
const init = () => passport.initialize();

module.exports = {
  isAuthenticated,
};
