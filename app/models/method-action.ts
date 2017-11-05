import { IMethodField } from './method-field';

export interface IMethodAction { 
  method: string;           // webservice method
  fields: IMethodField[];   // list of method fields
  steps: string[];          // 
  repeat: boolean;          // repeat action or return to menu
};

