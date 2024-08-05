export interface TableColumn<T> {
  label: string;
  property: keyof T | string;
  type: 'text' | 'image' | 'index' | 'checkbox' | 'status' | 'button' | 'date' | 'datetime' | 'number' | 'badge' | 'date' | 'datetime' | 'currency';
  visible?: boolean;
  cssClasses?: string[];
  buttons?: ('view' | 'edit' | 'delete')[];
}
