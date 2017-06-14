import _recursiveSort from "./internal/sort/_recursiveSort";
import _parseSortFields from "./internal/sort/_parseSortFields";

const byProps = (...fields) => {
	return _recursiveSort(_parseSortFields(fields));
};

export default byProps;
