export type TaskType = "Estructura2" | "Sanidad" | "Agricultura" | "Ganaderia" | "FINANZAS";

export type TaskStatus = 'pending' | 'completed';

export interface AgricultureDetails {
  crop: {
    name: string;
    genetics: string;
  };
  density: number; // k/ha
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
  type: TaskType;  // Changed from 'tipo'
  task: string;    // Changed from 'tarea'
  date: string;    // Changed from 'fecha'
  responsible: string;  // Changed from 'responsable'
  dateColor: string;    // Changed from 'fechaColor'
  checked: boolean;
  // Optional task-specific details (can be AgricultureDetails, SanidadDetails, GenericDetails, or other types in the future)
  details?: AgricultureDetails | SanidadDetails | GenericDetails;
}
