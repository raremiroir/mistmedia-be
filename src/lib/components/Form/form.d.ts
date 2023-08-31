// Email types
interface SendEmail {
   from: string;
   to: string[];
   cc?: string,
   subject: string,
   message: string,
}

// Turnstile types
interface TokenValidateResponse {
   'error-codes': string[],
   success: boolean,
   action: string,
   cdata: string
}
type TurnstileVersion = 'v0' | 'v1';

// Form / Input types
export type InputItem = {
   enabled: boolean = false,
   disabled?: boolean,
   placeholder?: string,
   required?: boolean = true,
   automatic?: boolean = false,
}

export type TextAreaItem = InputItem & {
   rows?: number;
}
export type SelectItem = InputItem & {
   options: string[];
}

export type InputItems = InputItem[];

export type ChosenInputs = {
   name?: InputItem,
   email?: InputItem,
   phone?: InputItem,

   company?: InputItem,
   job?: InputItem,

   subject?: InputItem,
   message?: TextAreaItem,
   file?: InputItem,

   terms?: InputItem,

   password?: InputItem,
   password_confirm?: InputItem,

   address?: InputItem,
   city?: InputItem,
   state?: InputItem,
   zip?: InputItem,
   country?: InputItem,

   date?: InputItem,
   text?: InputItem,
   number?: InputItem,

   turnstile_response?: InputItem,
   accept_terms?: InputItem,
}