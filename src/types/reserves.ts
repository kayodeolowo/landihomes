// export interface NewReserveType {
//     id?: string;
//     country?: string;
//     description?: string;
    
// }


export interface PropertyCardProps {

      id?: string;
      country?: string;
      description?: string;
      reserve?: PropertyCardProps;
      // Add other properties here as needed
  
  }