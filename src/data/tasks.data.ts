import type { Task } from '../types/task.types';
import { COLORS } from '../constants/colors.constants';

export const INITIAL_PENDING_TASKS: Task[] = [
  {
    id: 1,
    type: "Estructura2",
    task: "Arreglar el alambre entre la Tapera y La Taba",
    date: "Hoy",
    responsible: "Martin Perez",
    dateColor: COLORS.date.today,
    checked: false,
    details: {
      notes: "Se reportó un corte en el alambrado perimetral del sector norte. Es necesario llevar herramientas de tensado y alambre nuevo (tipo San Martín). Revisar también los postes cercanos por si alguno está podrido.",
      fields: [
        { name: "La Tapera" }
      ],
      createdBy: "Lucia del Rio"
    }
  },
  {
    id: 2,
    type: "Sanidad",
    task: "Vacunación de aftosa de las vaquillonas",
    date: "Mañana",
    responsible: "Angela Paez",
    dateColor: COLORS.date.default,
    checked: false,
    details: {
      date: "27 Nov",
      animals: {
        type: "Vaquillonas",
        quantity: 210
      },
      fields: [
        { name: "La Tapera" }
      ],
      products: [
        { name: "Producto X", amount: "10mm" }
      ],
      createdBy: "Lucia del Rio",
      notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    }
  },
  {
    id: 3,
    type: "Agricultura",
    task: "Siembra de soja en La Tapera, La Taba y Frisia",
    date: "28 de Nov",
    responsible: "Martin Perez",
    dateColor: COLORS.date.default,
    checked: false,
    details: {
      crop: {
        name: "Soja",
        genetics: "Genetica X"
      },
      density: 100,
      spacing: 1.2,
      contractor: "Agro265 Servicios",
      fields: [
        { name: "La Tapera", hectares: 208 },
        { name: "La Taba", hectares: 191 },
        { name: "Frisia", hectares: 78 }
      ],
      fertilizers: [
        { name: "Urea", amount: "10 L/Ha" },
        { name: "FertilliX", amount: "20 L/Ha" }
      ],
      createdBy: "Lucia del Rio",
      notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    }
  },
  {
    id: 4,
    type: "Agricultura",
    task: "Pulverización de la Victoria con Glifosato",
    date: "28 de Nov",
    responsible: "Martin Perez",
    dateColor: COLORS.date.default,
    checked: false,
    details: {
      crop: {
        name: "Soja",
        genetics: "Genetica Y"
      },
      density: 95,
      spacing: 1.0,
      contractor: "AgroServicios SA",
      fields: [
        { name: "La Victoria", hectares: 150 }
      ],
      fertilizers: [
        { name: "Glifosato", amount: "15 L/Ha" }
      ],
      createdBy: "Martin Perez",
      notes: "Aplicación de herbicida en lote de soja de primera"
    }
  },
  {
    id: 5,
    type: "FINANZAS",
    task: "Pagar segunda cuota a Agro365",
    date: "1 de Dic",
    responsible: "Lucia del Rio",
    dateColor: COLORS.date.default,
    checked: false,
    details: {
      notes: "Segunda cuota del plan de financiamiento para insumos agrícolas. Monto: $500.000. Cuenta: Agro365 Servicios SA.",
      fields: [
        { name: "Administración" }
      ],
      createdBy: "Lucia del Rio"
    }
  },
  {
    id: 6,
    type: "Ganaderia",
    task: "Mover novillos de la Victoria a el Triunfo",
    date: "3 de Dic",
    responsible: "Martin Perez",
    dateColor: COLORS.date.default,
    checked: false,
    details: {
      notes: "Trasladar 150 novillos del potrero La Victoria al potrero El Triunfo. Revisar que tengan agua suficiente en el nuevo potrero antes del traslado.",
      fields: [
        { name: "La Victoria" },
        { name: "El Triunfo" }
      ],
      createdBy: "Martin Perez"
    }
  },
];

export const INITIAL_COMPLETED_TASKS: Task[] = [
  {
    id: 7,
    type: "Sanidad",
    task: "Vacuna de aftosa para las vaquillonas del lote 7",
    date: "15 de Nov",
    responsible: "Martin Perez",
    dateColor: COLORS.date.default,
    checked: true,
    details: {
      date: "15 Nov",
      animals: {
        type: "Vaquillonas",
        quantity: 180
      },
      fields: [
        { name: "Lote 7" }
      ],
      products: [
        { name: "Vacuna Aftosa", amount: "5ml" }
      ],
      createdBy: "Martin Perez",
      notes: "Vacunación completada sin inconvenientes. Todos los animales quedaron en observación por 24hs"
    }
  },
  {
    id: 8,
    type: "Ganaderia",
    task: "Mover los toros de el Intruso a el Ajeno",
    date: "14 de Nov",
    responsible: "Angela Paez",
    dateColor: COLORS.date.default,
    checked: true,
    details: {
      notes: "Se trasladaron 8 toros reproductores del potrero El Intruso al potrero El Ajeno para el servicio de primavera. Todos los animales llegaron en buenas condiciones.",
      fields: [
        { name: "El Intruso" },
        { name: "El Ajeno" }
      ],
      createdBy: "Angela Paez"
    }
  },
  {
    id: 9,
    type: "Ganaderia",
    task: "Venta de 200 novillos del feedlot",
    date: "2 de Nov",
    responsible: "Martin Perez",
    dateColor: COLORS.date.default,
    checked: true,
    details: {
      notes: "Venta concretada de 200 novillos del feedlot a frigorífico San José. Peso promedio: 480kg. Precio: $350/kg vivo. Total facturado: $33.600.000.",
      fields: [
        { name: "Feedlot Principal" }
      ],
      createdBy: "Martin Perez"
    }
  },
  {
    id: 10,
    type: "Agricultura",
    task: "Siembra de maíz en el Mudo y Freddy",
    date: "28 de Oct",
    responsible: "Martin Perez",
    dateColor: COLORS.date.default,
    checked: true,
    details: {
      crop: {
        name: "Maíz",
        genetics: "Híbrido DK590"
      },
      density: 75,
      spacing: 0.7,
      contractor: "Siembra Directa SA",
      fields: [
        { name: "El Mudo", hectares: 120 },
        { name: "Freddy", hectares: 95 }
      ],
      fertilizers: [
        { name: "Fosfato Diamónico", amount: "80 Kg/Ha" },
        { name: "Urea", amount: "120 Kg/Ha" }
      ],
      createdBy: "Martin Perez",
      notes: "Siembra de maíz temprano con buena humedad. Condiciones óptimas para germinación"
    }
  },
  {
    id: 11,
    type: "FINANZAS",
    task: "Pagar primera cuota a Agro365",
    date: "18 de Oct",
    responsible: "Lucia del Rio",
    dateColor: COLORS.date.default,
    checked: true,
    details: {
      notes: "Primera cuota del plan de financiamiento abonada correctamente. Monto: $500.000. Quedan 5 cuotas pendientes.",
      fields: [
        { name: "Administración" }
      ],
      createdBy: "Lucia del Rio"
    }
  },
  {
    id: 12,
    type: "Estructura2",
    task: "Arreglar el molino roto en los corrales",
    date: "13 de Oct",
    responsible: "Martin Perez",
    dateColor: COLORS.date.default,
    checked: true,
    details: {
      notes: "Se reparó el molino de los corrales principales. Se reemplazó el eje principal y se engrasaron todos los rodamientos. El molino está funcionando correctamente y bombeando agua al tanque.",
      fields: [
        { name: "Corrales Principales" }
      ],
      createdBy: "Martin Perez"
    }
  },
];
