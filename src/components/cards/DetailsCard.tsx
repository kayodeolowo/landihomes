// DetailsSection.tsx
import React from 'react';
import { NewReserveType } from "@/types/reserves";

interface DetailsSectionProps {
  reserve: NewReserveType;
}

const DetailsCard: React.FC<DetailsSectionProps> = ({ reserve }) => {
  return (
    <div>
      <h1>{reserve.country}</h1>
      <p>{reserve.description}</p>
    </div>
  );
};

export default DetailsCard;
