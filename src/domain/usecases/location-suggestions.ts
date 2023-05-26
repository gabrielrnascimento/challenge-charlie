import { type LocationSuggestionsModel } from '@/data/models';
import { type HttpResponse } from '@/data/protocols/http';

export interface LocationSuggestions {
  load: (term: LocationSuggestions.Params) => Promise<HttpResponse<LocationSuggestions.Model>>
}

export namespace LocationSuggestions {
  export type Model = LocationSuggestionsModel[];
  export type Params = string;
}