export interface Onboarding {
  id:       number;
  title:    string;
  subtitle: string;
  list?:    Chk[];
  chk?:     Chk[];
}

export interface Chk {
  label:  string;
  terms?: string[];
}