import { Users } from "../../utils/models";

export default defineEventHandler(async e => {
  const { tokenData } = e.context;
  if(!tokenData) throw createError({
    statusCode: 401,
    statusMessage: "No token or invalid token"
  });

  const user = await Users
    .findById(tokenData.id)
    .select("-password")
    .populate("fields machines services");
  if (!user) throw createError({
    statusCode: 401,
    statusMessage: "No user found"
  });

  return { user }
})
