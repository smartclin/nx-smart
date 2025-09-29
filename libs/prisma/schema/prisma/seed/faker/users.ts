// db/seed.ts
import { faker } from '@faker-js/faker';
import { db, Gender, JOBTYPE, type Prisma, Role, Status } from 'prisma';

export async function seedUsers() {
  console.log('👤 Seeding users...');

  await db.workingDays.deleteMany();
  await db.doctor.deleteMany();
  await db.staff.deleteMany();
  await db.patient.deleteMany();
  await db.user.deleteMany();

  // ---------------------
  // Create Doctors + Users
  // ---------------------
  const doctors: Prisma.DoctorWhereInput[] = [];
  for (let i = 0; i < 3; i++) {
    const user = await db.user.create({
      data: {
        email: faker.internet.email().toLowerCase(),
        emailVerified: true,
        username: faker.internet.username(),
        password: faker.internet.password(),
        phone: faker.phone.number(),
        name: faker.person.fullName(),
        role: 'DOCTOR',
      },
    });

    const doctor = await db.doctor.create({
      data: {
        address: faker.location.streetAddress(),
        availabilityStatus: 'AVAILABLE',
        colorCode: faker.color.rgb(),
        email: user.email,
        img: faker.image.avatar(),
        licenseNumber: `LIC-${faker.string.alphanumeric(6).toUpperCase()}`,
        name: user.name,
        phone: faker.phone.number(),
        specialization: faker.helpers.arrayElement([
          'Pediatrics',
          'Cardiology',
          'Dermatology',
        ]),
        type: JOBTYPE.FULL,
        userId: user.id,
      },
    });

    // assign working days (Mon–Fri, 9–17)
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    for (const day of days) {
      await db.workingDays.create({
        data: {
          closeTime: '17:00',
          day,
          doctorId: doctor.id,
          startTime: '09:00',
        },
      });
    }

    doctors.push(doctor);
  }
  console.log(`✅ Created ${doctors.length} doctors with working days`);

  // ---------------------
  // Create Staff + Users
  // ---------------------
  const staffMembers: Prisma.StaffWhereInput[] = [];
  for (let i = 0; i < 5; i++) {
    const user = await db.user.create({
      data: {
        email: faker.internet.email().toLowerCase(),
        emailVerified: true,
        username: faker.internet.username(),
        password: faker.internet.password(),
        phone: faker.phone.number(),
        name: faker.person.fullName(),
        role: Role.STAFF,
      },
    });

    const staff = await db.staff.create({
      data: {
        address: faker.location.streetAddress(),
        colorCode: faker.color.rgb(),
        department: faker.helpers.arrayElement([
          'Nursing',
          'Reception',
          'Billing',
          'Laboratory',
          'Pharmacy',
        ]),
        email: user.email,
        hireDate: faker.date.past({ years: 5 }),
        img: faker.image.avatar(),
        licenseNumber: `STF-${faker.string.alphanumeric(6).toUpperCase()}`,
        name: user.name,
        phone: faker.phone.number(),
        role: Role.STAFF,
        salary: faker.number.float({
          fractionDigits: 2,
          max: 80_000,
          min: 30_000,
        }),
        status: Status.ACTIVE,
        userId: user.id,
      },
    });

    staffMembers.push(staff);
  }
  console.log(`✅ Created ${staffMembers.length} staff`);

  // ---------------------
  // Create Patients + Users
  // ---------------------
  const patients: Prisma.PatientWhereInput[] = [];
  for (let i = 0; i < 10; i++) {
    const user = await db.user.create({
      data: {
        email: faker.internet.email().toLowerCase(),
        emailVerified: true,
        username: faker.internet.username(),
        password: faker.internet.password(),
        phone: faker.phone.number(),
        name: faker.person.fullName(),
        role: Role.PATIENT,
      },
    });

    const patient = await db.patient.create({
      data: {
        address: faker.location.streetAddress(),
        dateOfBirth: faker.date.birthdate({ max: 18, min: 1, mode: 'age' }),
        email: user.email,
        emergencyContactName: faker.person.fullName(),
        emergencyContactNumber: faker.phone.number(),
        firstName: faker.person.firstName(),
        gender: faker.helpers.arrayElement([Gender.Male, Gender.Female]),
        lastName: faker.person.lastName(),
        phone: faker.phone.number(),
        relation: faker.helpers.arrayElement(['Mother', 'Father', 'Guardian']),
        userId: user.id,
      },
    });

    patients.push(patient);
  }
  console.log(`✅ Created ${patients.length} patients`);

  console.log('🌱 Seeding finished!');
}

seedUsers()
  .then(() => db.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
