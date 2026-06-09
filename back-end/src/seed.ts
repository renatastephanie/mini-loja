import {  connectDatabase } from './config/database'
import { Product } from './models/Product'

const products = [
  {
    name: "Sofá Retrátil Cinza",
    price: 25.0,
    description:
      "Confortável sofá retrátil de 3 lugares, ideal para sua sala de estar.",
    category: "Sala",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=500",
    stock: 10,
  },

  {
    name: "Mesa de Jantar Madeira",
    price: 1200.0,
    description:
      "Mesa robusta de madeira maciça com capacidade para 6 pessoas.",
    category: "Cozinha",
    image:
      "https://images.unsplash.com/photo-1530018607912-eff2df11a2ba?auto=format&fit=crop&q=80&w=500",
    stock: 5,
  },

  {
    name: "Cama Queen Size",
    price: 3200.0,
    description: "Cama com molas ensacadas e acabamento premium.",
    category: "Quarto",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=500",
    stock: 8,
  },

  {
    name: "Cadeira Gamer",
    price: 850.0,
    description: "Cadeira ergonômica com regulagem de altura e inclinação.",
    category: "Escritório",
    image:
      "https://images.unsplash.com/photo-1598550476439-6847785fce6e?auto=format&fit=crop&q=80&w=500",
    stock: 15,
  },
];

async function seed() {
  try {
    // GARANTE QUE O BANCO ESTÁ CONECTADO
    await connectDatabase()

    // LIMPA A TABELA ANTES DE INSERIR
    await Product.destroy({where: {}, truncate: true, cascade: true})

    // INSERE OS PRODUTOS
    await Product.bulkCreate(products as any)

    console.log('✅ Banco de dados populado com sucesso!');
    process.exit(0)

  } catch (error) {
    console.error('❌ Erro ao popular o banco:', error)
    process.exit(1)
  }
}

seed()