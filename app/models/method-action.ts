import { MethodField } from './method-field';

export interface MethodAction { 
  method: string;
  fields: MethodField[];
//  steps: Steps[]; //per mat-stepper
  steps: string[];
};

