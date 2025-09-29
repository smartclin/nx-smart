// db/seed/extra.ts

import { faker } from '@faker-js/faker';

import { db } from 'prisma';

export async function seedExtra() {
  console.log('🧩 Seeding extra models...');
  // Ensure we have base entities
  const doctor = await db.doctor.findFirst();
  const patient = await db.patient.findFirst();
  const staff = await db.staff.findFirst();
  const user = await db.user.findFirst();
  const appointment = await db.appointment.findFirst();

  // Check all necessary entities before proceeding
  if (!doctor || !patient || !staff || !appointment) {
    console.warn(
      '⚠️ Missing doctor, patient, staff, or appointment. Seed them first!',
    );
    return;
  }

  // Service
  const service = await db.services.create({
    data: {
      category: 'CONSULTATION',
      description: 'General pediatric check-up',
      duration: 30,
      price: 150,
      serviceName: 'Pediatric Consultation',
    },
  });
  console.log(`✅ Service: ${service.serviceName}`);

  // Medical Record
  const medical = await db.medicalRecords.create({
    data: {
      // These IDs are guaranteed to exist due to the check above
      appointmentId: appointment.id,
      doctorId: doctor.id,
      notes: 'Monitor temperature',
      patientId: patient.id,
      treatmentPlan: 'Rest, fluids, paracetamol',
    },
  });
  console.log(`📋 Medical Record: ${medical.id}`);
  // Prescription
  await db.prescription.create({
    data: {
      doctorId: doctor.id,
      dosage: '250mg',
      duration: '5 days',
      frequency: '3 times daily',
      instructions: 'Take after meals',
      medicalRecordId: medical.id,
      medicationName: 'Paracetamol',
      patientId: patient.id,
    },
  });

  // Feeding Log
  await db.feedingLog.create({
    data: {
      duration: 20,
      notes: 'Good latch',
      patientId: patient.id,
      type: 'BREAST',
    },
  });

  // Notification
  await db.notification.create({
    data: {
      message: 'Your child has a check-up tomorrow',
      title: 'Upcoming Appointment',
      type: 'APPOINTMENT_REMINDER',
      userId: user?.id ?? '',
    },
  });

  // Diagnosis
  await db.diagnosis.create({
    data: {
      diagnosis: 'Viral infection',
      doctorId: doctor.id,
      followUpPlan: 'Recheck in 5 days',
      medicalId: medical.id,
      notes: 'Likely self-limiting',
      patientId: patient.id,
      symptoms: 'Fever, cough',
    },
  });

  // Growth Measurement
  await db.growthChart.create({
    data: {
      ageInDays: 365,
      gender: 'Male',
      headCircumference: 46,
      height: 75,
      percentileHeight: 55,
      measuredById: staff.id,
      patientId: patient.id,
      weight: 10.5,
      heightZScore: 2,
      weightZScore: 1,
      percentileWeight: 50,
    },
  });
  const commonVaccines = [
    'Hepatitis B',
    'Rotavirus',
    'DTaP',
    'Hib',
    'Pneumococcal',
    'Polio',
    'Influenza',
    'MMR',
    'Varicella',
    'Hepatitis A',
  ];
  for (let i = 0; i < 5; i++) {
    const vaccineName = faker.helpers.arrayElement(commonVaccines);
    const dateAdministered = faker.date.between({
      from: patient.dateOfBirth,
      to: new Date(),
    });
    // Vaccination
    await db.immunization.create({
      data: {
        patientId: patient.id,
        vaccine: vaccineName,
        date: dateAdministered,
        dose: faker.lorem.word(),
        lotNumber: faker.string.alphanumeric({ length: 10 }),
        administeredByStaffId: staff.id,
        notes: faker.lorem.sentence(),
      },
    });
  }

  // Encounter
  const encounter = await db.encounter.create({
    data: {
      diagnosis: 'Healthy child',
      doctorId: doctor.id,
      medicalId: medical.id,
      notes: 'No concerns',
      patientId: patient.id,
      treatment: 'Routine care',
      type: 'Checkup',
    },
  });

  // Vital Signs
  await db.vitalSigns.create({
    data: {
      diastolic: 65,
      encounterId: encounter.id,
      heartRate: 110,
      height: 75,
      medicalId: medical.id,
      oxygenSaturation: 98,
      patientId: patient.id,
      respiratoryRate: 24,
      systolic: 100,
      temperature: 37.2,
      weight: 10.5,
    },
  });

  // Immunization
  await db.immunization.create({
    data: {
      administeredByStaffId: staff.id,
      date: new Date(),
      dose: '1st',
      lotNumber: 'HEP-123',
      notes: 'Well tolerated',
      patientId: patient.id,
      vaccine: 'Hepatitis B',
    },
  });

  console.log('🎉 Extra models seeded successfully!');
}

// Run directly
if (require.main === module) {
  seedExtra()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(() => db.$disconnect());
}
