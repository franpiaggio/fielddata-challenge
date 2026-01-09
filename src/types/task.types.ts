export type TaskType = "Estructura" | "Sanidad" | "Agricultura" | "Ganadería" | "Finanzas";

export type TaskStatus = 'pending' | 'completed';

export interface AgricultureDetails {
  crop: {
    name: string;
    genetics: string;
  };
  density: number;
  spacing: number;
  contractor: string;
  fields: Array<{
    name: string;
    hectares: number;
  }>;
  fertilizers: Array<{
    name: string;
    amount: string;
  }>;
  createdBy: string;
  notes?: string;
  imageUrl?: string;
}

export interface SanidadDetails {
  date: string;
  animals: {
    type: string;
    quantity: number;
  };
  fields: Array<{
    name: string;
  }>;
  products: Array<{
    name: string;
    amount: string;
  }>;
  createdBy: string;
  notes?: string;
  imageUrl?: string;
}

export interface GenericDetails {
  notes: string;
  fields: Array<{
    name: string;
  }>;
  createdBy: string;
  imageUrl?: string;
}

export interface Task {
  id: number;
  type: TaskType;
  task: string;
  date: string;
  responsible: string;
  dateColor: string;
  checked: boolean;
  details?: AgricultureDetails | SanidadDetails | GenericDetails;
}
