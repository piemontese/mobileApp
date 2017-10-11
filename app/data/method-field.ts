import { FieldType } from './field-type.enum';

export interface MethodField {
  field: string;
  description: string;
  type: FieldType;
  obligatory: boolean;
  value: any; //valore da proporre
  length: number;
  data: Array<any>; //elenco ad es. autocostruzione  
  minWidth: number;
  maxWidth: number;
  step: number;
}
