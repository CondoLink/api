import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export const findUsers = async (buildingId: number) => {
  const result = await prisma.user.findMany({
    where: {
      buildingId: buildingId,
      roleCode: { not: 3 }
    },
    select: {
      id: true,
      fullName: true,
      email: true,
      unit: true,
      roleCode: true,
      serviceType: true,
      companyName: true,
      phone: true,
      buildingId: true,
      blockId: true,
      approvedBy: true
    }
  });
  return result;
}

//--------------------------------------------------------------------------------------

export const findBuildings = async (buildingId: number) => {
  const result = await prisma.buildings.findMany({
    where: { id: buildingId },
    select: {
      id: true,
      name: true,
      address: true,
      code: true
    },
  });
  return result;
};

//--------------------------------------------------------------------------------------

export const findBlocks = async (buildingId: number) => {
  const result = await prisma.blocks.findMany({
    where: { building_id: buildingId },
    select: {
      id: true,
      name: true,
      building_id: true
    },
  });
  return result;
};

//--------------------------------------------------------------------------------------

export const getMaintenance = async (buildingId: number) => {
  const result = await prisma.maintenance.findMany();
  return result;
};

//--------------------------------------------------------------------------------------

export const getServices = async () => {
  const result = await prisma.ServiceCategory.findMany();
  return result;
};

//--------------------------------------------------------------------------------------

