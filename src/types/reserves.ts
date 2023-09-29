export interface NewReserveType {
    id?: string;
    country?: string;
    description?: string;
}


export interface PropertyCardProps {
    reserve: {
      id?: string;
      country: string;
      // Add other properties here as needed
    }
  }