import { env } from '@/env';
import { prisma } from '@/index';
import { seedAppointments } from './faker/appointments';
import { seedExtra } from './faker/clinic';
import { seedUsers } from './faker/users';
import { seedFiles } from './tables/files';
import { seedRootAdmin } from './tables/root-admin';

async function main() {
  console.log('🌱 Starting full seeding process...\n');

  await seedRootAdmin(prisma);
  await seedUsers(); // 1. Base Users, Doctors, Staff, Patients
  await seedExtra(); // 2. Services, Working Days, Clinic data
  await seedAppointments(); // 3. Appointments, Reminders, Billing, etc.

  if (env.NODE_ENV === 'development') {
    await seedFiles(prisma);
  }
}

await main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
