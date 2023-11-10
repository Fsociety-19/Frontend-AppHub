export interface ChipsModel {
  id: number;
  label: string;
  icon?: string;
  typeClaf?: string;
  styleClass?: string;
  removable?: boolean;
  onRemove?: () => void;
}
