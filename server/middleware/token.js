import jsonwebtoken from "jsonwebtoken";

export default defineEventHandler(e => {
  const
    { token } = parseCookies(e),
    { secretJWT } = useRuntimeConfig();

  if (!token) {
    e.context.tokenData = null;
  } else {
    jsonwebtoken.verify(
      token,
      secretJWT,
      (err, decoded) => { e.context.tokenData = err ? null : decoded; }
    );
  }
})
