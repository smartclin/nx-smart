/** biome-ignore-all lint/style/useNamingConvention: <db> */
import { faker } from '@faker-js/faker';
import {
  concerningGrowthMeasurements,
  sampleGrowthMeasurements,
  samplePatients,
  // sampleGrowthPatients,
} from '@repo/utils/sampleDate';
import { db, Gender, Role, Status } from 'prisma';

/**
 * Seeds the database with mock patient, growth, and medical record data.
 */
export async function seedGrowthData() {
  console.log('Seeding patients + growth data...');

  const doctors = await db.doctor.findMany({ where: { isActive: true } });

  if (doctors.length === 0) {
    console.log('No active doctors found. Please seed doctors first.');
    return;
  }

  // Convert sampleGrowthMeasurements to array format if it's an object
  const allSampleMeasurements = Array.isArray(sampleGrowthMeasurements)
    ? sampleGrowthMeasurements
    : Object.values(sampleGrowthMeasurements).flat();

  const allConcerningMeasurements = Array.isArray(concerningGrowthMeasurements)
    ? concerningGrowthMeasurements
    : Object.values(concerningGrowthMeasurements).flat();

  // Seed sample patients from the hardcoded data file
  for (const samplePatientseed of samplePatients) {
    const user = await db.user.create({
      data: {
        email: samplePatientseed.email,
        emailVerified: true,
        username: samplePatientseed.username,
        password: samplePatientseed.password ?? '',
        phone: samplePatientseed.phone,
        name: `${samplePatientseed.firstName} ${samplePatientseed.lastName}`,
        role: 'PATIENT',
      },
    });

    // Convert gender string to enum
    const gender = samplePatientseed.gender === 'Male' ? Gender.Male : Gender.Female;

    const patient = await db.patient.create({
      data: {
        address: samplePatientseed.address,
        allergies: samplePatientseed.allergies,
        bloodGroup: samplePatientseed.bloodGroup,
        dateOfBirth: new Date(samplePatientseed.dateOfBirth),
        email: samplePatientseed.email,
        firstName: samplePatientseed.firstName,
        gender,
        lastName: samplePatientseed.lastName,
        medicalHistory: samplePatientseed.medicalHistory,
        phone: samplePatientseed.phone,
        status: 'active',
        userId: user.id,
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
    // Seed growth measurements for the sample patient
    // Seed growth measurements for the sample patient
    const patientMeasurements = (
      samplePatientseed.type === 'concerning'
        ? allConcerningMeasurements
        : allSampleMeasurements
    ).filter((m) => (m as { patientId: string }).patientId === samplePatientseed.id);

    for (const measurement of patientMeasurements) {
      const m = measurement as {
        measuredAt: string;
        ageInDays: number;
        weight: number;
        height: number;
        headCircumference?: number;
        notes?: string;
        weightPercentile?: number;
        heightPercentile?: number;
        weightZScore?: number;
        heightZScore?: number;
      };

      await db.growthChart.create({
        data: {
          ageInDays: m.ageInDays,
          headCircumference: m.headCircumference ?? null,
          height: m.height,
          percentileHeight: m.heightPercentile ?? null,
          heightZScore: m.heightZScore ?? null,
          date: new Date(m.measuredAt),
          measuredById: staff.id,
          notes: m.notes ?? null,
          patientId: patient.id,
          weight: m.weight,
          percentileWeight: m.weightPercentile ?? null,
          weightZScore: m.weightZScore ?? null,
        },
      });
    }

    // Seed 20 additional random patients and their data
    for (let i = 0; i < 20; i++) {
      const dob = faker.date.birthdate({ max: 5, min: 0, mode: 'age' });

      const user = await db.user.create({
        data: {
          email: faker.internet.email(),
          emailVerified: true,
          username: faker.internet.username(),
          password: faker.internet.password(),
          phone: faker.phone.number(),

          name: `${faker.person.firstName()} ${faker.person.lastName()}`,
          role: 'PATIENT',
        },
      });

      const patient = await db.patient.create({
        data: {
          address: faker.location.streetAddress(),
          dateOfBirth: dob,
          email: faker.internet.email(),
          firstName: faker.person.firstName(),
          gender,
          lastName: faker.person.lastName(),
          phone: faker.phone.number({ style: 'national' }),
          status: 'active',
          userId: user.id,
        },
      });

      const ageInDays = Math.floor(
        (Date.now() - dob.getTime()) / (1000 * 60 * 60 * 24),
      );

      const count = faker.number.int({ max: 10, min: 5 });
      for (let j = 0; j < count; j++) {
        const days = faker.number.int({ max: ageInDays, min: 30 });

        const ageInMonths = days / 30.44;
        let weight: number;
        if (gender === Gender.Male) {
          weight = faker.number.float({
            max: 4.5 + ageInMonths * 0.8,
            min: 3.5 + ageInMonths * 0.7,
          });
        } else {
          weight = faker.number.float({
            max: 4.2 + ageInMonths * 0.7,
            min: 3.2 + ageInMonths * 0.6,
          });
        }

        let height: number;
        if (gender === Gender.Male) {
          height = faker.number.float({
            max: 55 + ageInMonths * 2.2,
            min: 50 + ageInMonths * 2.0,
          });
        } else {
          height = faker.number.float({
            max: 53 + ageInMonths * 2.1,
            min: 48 + ageInMonths * 1.9,
          });
        }

        weight = faker.number.float({ max: weight * 1.05, min: weight * 0.95 });
        height = faker.number.float({ max: height * 1.02, min: height * 0.98 });

        // Corrected GrowthChart seeding block
        await db.growthChart.create({
          data: {
            ageInDays: days,
            headCircumference: faker.number.float({
              min: 30,
              max: 60,
              fractionDigits: 1,
            }),
            height: Number.parseFloat(height.toFixed(1)),
            percentileHeight: faker.number.float({ max: 95, min: 5 }),
            heightZScore: faker.number.float({ max: 2, min: -2 }),
            date: new Date(), // Use a new date or the 'date' variable if it's defined
            measuredById: staff.id ?? '',
            notes: faker.helpers.maybe(() => faker.lorem.sentence(), {
              probability: 0.3,
            }),
            patientId: patient.id,
            weight: Number.parseFloat(weight.toFixed(2)),
            percentileWeight: faker.number.float({ max: 95, min: 5 }),
            weightZScore: faker.number.float({ max: 2, min: -2 }),
          },
        });
        const appointment = await db.appointment.findFirst(); // Make sure it's declared here
        const doctor = await db.doctor.findFirst(); // Make sure it's declared here
        if (!doctor || !patient || !staff || !appointment) {
          console.warn(
            '⚠️ One or more required entities (doctor, patient, staff, or appointment) are missing. Please seed them first.',
          );
          // Return early or throw an error to prevent the script from crashing
          return;
        }
        const recordCount = faker.number.int({ max: 3, min: 1 });
        for (let k = 0; k < recordCount; k++) {
          await db.medicalRecords.create({
            data: {
              appointmentId: appointment.id,
              doctorId: doctor.id,
              patientId: patient.id,
            },
          });
        }
      }

      console.log('✅ Patient seeding complete');
    }
  }
}
