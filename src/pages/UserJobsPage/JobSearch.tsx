import {ReactElement} from "react";
import SearchJob from "../../components/Search/SearchJob/SearchJob";
import SearchResults from "../../components/Jobs/SearchResults/SearchResults";

export function JobSearch(): ReactElement {
	return (
		<>
			<SearchJob />
			<SearchResults />
		</>
	);
}