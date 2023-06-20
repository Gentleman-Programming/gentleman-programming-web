export interface Event {
  data: Data;
  pagination: any;
}

export interface Data {
  segments: Segment[];
  broadcaster_id: string;
  broadcaster_name: string;
  broadcaster_login: string;
  vacation?: any;
}

export interface Segment {
  id: string;
  start_time: string;
  end_time: string;
  title: string;
  canceled_until?: any;
  category: Category;
  is_recurring: boolean;
}

export interface Category {
  id: string;
  name: string;
}
