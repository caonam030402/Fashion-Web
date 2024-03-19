export function createSearchParam(searchParamsObject: any) {
  const searchParams = new URLSearchParams();

  for (const key in searchParamsObject) {
    if (searchParamsObject.hasOwnProperty(key)) {
      searchParams.append(key, searchParamsObject[key]);
    }
  }

  return searchParams.toString();
}
