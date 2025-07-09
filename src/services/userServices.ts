import { PrismaClient } from '@prisma/client' 
const prisma = new PrismaClient();

export interface Email {
  email: string;
}

export const findEmail = async (email: string): Promise<Email | null> => {
  const result = await prisma.user.findUnique({
    where: {
      email: email,
    },
    select: {
      email: true,
    },
  });
  return result;
};

//--------------------------------------------------------------------------------------

export const findUserByEmail = async (email: string) => {
  const result = await prisma.User.findUnique({
    where: { email: email }
  });
  return result;
};

//--------------------------------------------------------------------------------------

interface Resident {
    fullName: string;
    email: string;
    password: string;
    buildingId: number;
    blockId: number;
    unit: string;
}

export const createUser = async (newResident: Resident) => {
  const created = await prisma.user.create({
    data: {
      fullName: newResident.fullName,
      email: newResident.email,
      password: newResident.password,
      buildingId: newResident.buildingId,
      blockId: newResident.blockId,
      roleCode: 1, // 1 = Resident
      unit: newResident.unit,
    },
  });
  return created;
};

//--------------------------------------------------------------------------------------

export const updateUser = async (userId: number, userRefreshToken: string) => {
  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: { refreshToken: userRefreshToken }
  });
  return updatedUser;
};