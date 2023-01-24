import CompanyCard from "./companyCard";
import { Company } from "@prisma/client";

interface CompanyListProps {
  companies: Company[];
}

const CompanyList: React.FC<CompanyListProps> = ({ companies }) => {
  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="col-span-4 col-start-2">
        {companies.map((c) => (
          <CompanyCard key={c.id} company={c} />
        ))}
      </div>
    </div>
  );
};

export default CompanyList;
