import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create initial admin user
  const admin = await prisma.user.create({
    data: {
      email: 'admin@example.com',
      name: 'Admin',
      password: 'your-hashed-password',
      role: 'admin'
    },
  });

  // Create a wholesaler first
  const wholesaler = await prisma.wholesaler.create({
    data: {
      name: 'Sample Wholesaler',
      phone_number: '1234567890',
      email: 'wholesaler@example.com',
      address: '123 Business St',
      user_id: admin.user_id  // Direct field assignment instead of connect
    }
  });

  // Add sample products with required relationships
  await prisma.product.createMany({
    data: [
      {
        name: 'Sample Product 1',
        category: 'Electronics',
        stock_quantity: 100,
        price_per_unit: 19.99,
        user_id: admin.user_id,
        wholesaler_id: wholesaler.wholesaler_id
      },
      {
        name: 'Sample Product 2',
        category: 'Electronics',
        stock_quantity: 50,
        price_per_unit: 29.99,
        user_id: admin.user_id,
        wholesaler_id: wholesaler.wholesaler_id
      }
    ]
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });