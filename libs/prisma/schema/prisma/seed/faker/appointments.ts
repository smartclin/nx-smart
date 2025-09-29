// db/seed/appointments.ts

import { addMinutes } from 'date-fns';

import { db } from 'prisma';

export async function seedAppointments() {
  console.log('📅 Seeding Appointments...');

  // Fetch one doctor, one patient, one service
  const doctor = await db.doctor.findFirst();
  const patient = await db.patient.findFirst();
  const service = await db.services.findFirst();

  if (!doctor || !patient || !service) {
    console.warn('⚠️ Missing doctor, patient, or service. Seed them first!');
    return;
  }

  // Create Appointment
  const appointment = await db.appointment.create({
    data: {
      appointmentDate: new Date(),
      doctorId: doctor.id,
      time: '45',
      note: 'Patient presented with mild fever.',
      patientId: patient.id,
      reason: 'Routine check-up',
      status: 'SCHEDULED',
      type: 'CONSULTATION',
    },
  });

  console.log(`✅ Appointment created: ${appointment.id}`);

  // Reminder
  const reminder = await db.reminder.create({
    data: {
      appointmentId: appointment.id,
      method: 'EMAIL',
      sentAt: new Date(),
      status: 'SENT',
    },
  });

  console.log(`🔔 Reminder created: ${reminder.id}`);

  // Billing
  const billing = await db.billing.create({
    data: {
      amount: 100.0,
      appointmentId: appointment.id,
      dueDate: addMinutes(new Date(), 60 * 24 * 7), // one week later
      insurance: 'EgyptCare',
      insuranceId: 'IC123456',
      notes: 'Initial consultation billing',
      patientId: patient.id,
      serviceDate: new Date(),
      status: 'PENDING',
    },
  });

  console.log(`💳 Billing created: ${billing.id}`);

  // Payment with BillItem
  const payment = await db.payment.create({
    data: {
      amountPaid: 100.0,
      appointmentId: appointment.id,
      billDate: new Date(),
      receiptNumber: 12,
      bills: {
        create: {
          quantity: 1,
          serviceDate: new Date(),
          serviceId: service.id,
          totalCost: 100.0,
          unitCost: 100.0,
        },
      },
      discount: 0,
      patientId: patient.id,
      paymentDate: new Date(),
      paymentMethod: 'CASH',
      totalAmount: 100.0,
    },
    include: { bills: true },
  });

  console.log(`💰 Payment created with ${payment.bills.length} bill items`);

  // Lab Test
  const record = await db.medicalRecords.findFirst({
    where: { patientId: patient.id },
  });

  if (record) {
    const labTest = await db.labTest.create({
      data: {
        notes: 'No abnormalities detected.',
        recordId: record.id,
        result: 'Normal blood count',
        serviceId: service.id,
        status: 'COMPLETED',
        testDate: new Date(),
      },
    });

    console.log(`🧪 Lab test created: ${labTest.id}`);
  } else {
    console.warn('⚠️ No medical record found for patient, skipping LabTest seed.');
  }

  console.log('✅ Appointments & related data seeded successfully.');
}

// Run directly if invoked via tsx
if (require.main === module) {
  seedAppointments()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(() => db.$disconnect());
}
