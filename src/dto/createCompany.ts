import { object, string } from "yup";

export interface Company {
  name: string;
  cnpj: string;
  country: string;
  state: string;
  city: string;
}

export default object({
  body: object({
    name: string().required(),
    cnpj: string().length(14).required(),
    country: string().required(),
    state: string().required(),
    city: string().required(),
  }),
});
