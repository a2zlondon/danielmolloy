import {
  COMPANIES_HOUSE_URL,
  COMPANY_NUMBER,
  LEGAL_COMPANY_NAME,
  REGISTERED_OFFICE_ADDRESS,
  VAT_NUMBER,
} from "@/lib/constants";

export function CompanyLegalDetails({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <div className={compact ? "space-y-1" : "space-y-2"}>
      <p>
        {LEGAL_COMPANY_NAME} is a company registered in England and Wales.
      </p>
      <p>
        Company number:{" "}
        <a
          href={COMPANIES_HOUSE_URL}
          className="underline-offset-4 hover:underline"
          rel="noreferrer"
          target="_blank"
        >
          {COMPANY_NUMBER}
        </a>
      </p>
      <p>Registered office: {REGISTERED_OFFICE_ADDRESS}</p>
      <p>VAT number: {VAT_NUMBER}.</p>
    </div>
  );
}
