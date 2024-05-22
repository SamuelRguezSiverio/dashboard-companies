import { CompanyList } from "./components/CompanyList";
import { HeaderCompanies } from "./components/HeaderCompanies";

export default function page() {
  return (
    <div>
      <HeaderCompanies/>
      <CompanyList/>
    </div>
  )
}
