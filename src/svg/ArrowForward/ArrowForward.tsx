import cn from "classnames";

interface Props {
  currentPage?: number;
  totalPages?: number;
  classNames?: string;
}

export const ArrowForward: React.FC<Props> = ({ currentPage, totalPages, classNames }) => {
  const className = cn(
    classNames,
  );

  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={cn({'pagination-item--disabled': currentPage === totalPages})} d="M9.65006 7.99996L4.75006 3.09996C4.58339 2.93329 4.50273 2.73596 4.50806 2.50796C4.51339 2.27996 4.59962 2.08285 4.76673 1.91663C4.93339 1.74996 5.13073 1.66663 5.35873 1.66663C5.58673 1.66663 5.78384 1.74996 5.95006 1.91663L11.0667 7.04996C11.2001 7.18329 11.3001 7.33329 11.3667 7.49996C11.4334 7.66663 11.4667 7.83329 11.4667 7.99996C11.4667 8.16663 11.4334 8.33329 11.3667 8.49996C11.3001 8.66663 11.2001 8.81663 11.0667 8.94996L5.93339 14.0833C5.76673 14.25 5.57228 14.3306 5.35006 14.3253C5.12784 14.32 4.93339 14.2337 4.76673 14.0666C4.60006 13.9 4.51673 13.7026 4.51673 13.4746C4.51673 13.2466 4.60006 13.0495 4.76673 12.8833L9.65006 7.99996Z" fill="#182353"/>
    </svg>
  );
};