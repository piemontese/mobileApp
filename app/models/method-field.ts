import { IFieldType } from './field-type.enum';

export interface IMethodField {
  field: string;
  description: string;
  type: IFieldType;
  required: boolean;
  value: any; // valore da proporre
  defaultValue: any; // valore da proporre
  length: number;
  data: Array<any>; // elenco ad es. autocostruzione
  minlength: string;
  maxlength: string;
  step: number;
  valid: boolean;
}
