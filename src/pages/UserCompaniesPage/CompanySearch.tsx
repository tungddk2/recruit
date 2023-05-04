import {ReactElement} from "react";
import SearchCompany from "../../components/Search/SearchCompany/SearchCompany";
import SearchResults from "../../components/Company/SearchResult/SearchResults";

export function CompanySearch(): ReactElement {
	return (
		<>
			<SearchCompany />
			<SearchResults />
		</>
	);
}