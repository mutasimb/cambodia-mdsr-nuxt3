import jsonwebtoken from "jsonwebtoken";

const { secretJWT } = useRuntimeConfig();

export default id => jsonwebtoken.sign(
  { id },
  secretJWT,
  { expiresIn: "365 days" }
);
