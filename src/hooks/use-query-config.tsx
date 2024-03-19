import { useSearchParams } from "next/navigation";
import omitBy from "lodash/omitBy";
import isUndefined from "lodash/isUndefined";

export type QueryConfig = {
  [key in keyof ProductListConfig]: string;
};

export default function UserQueryConfig() {
  const searchParams = useSearchParams();

  const searchEntries = Array.from(searchParams.entries());

  const queryParams: QueryConfig = Object.fromEntries([...searchEntries]);

  const queryConfig: QueryConfig = omitBy(
    {
      sortBy: queryParams.sortBy,
      search: queryParams.search,
      color: queryParams.color,
      size: queryParams.size,
      order: queryParams.order,
      material: queryParams.material,
    },
    isUndefined
  );

  return queryConfig;
}
