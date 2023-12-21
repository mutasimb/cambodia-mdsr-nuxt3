import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async e => {
  const { tokenData } = e.context;

  if(!tokenData) throw createError({
    statusCode: 401,
    statusMessage: "No token or invalid token"
  });

  const user = await prisma.user.findUnique({
    where: { id: tokenData.id },
    select: {
      id: true,
      phone: true,
      role: true,
      name: true,
      password: false,
      adm1: true,
      adm2: true,
      adm3: true,
      address: true,
      lon: true,
      lat: true,
      dob: true,
      sex: true,
      date_created: true,
      updated_at: true
    }
  });

  if (!user) throw createError({
    statusCode: 401,
    statusMessage: "No user found"
  });

  return { user }
})
