export function createSearchParam(searchParamsObject: any) {
  const searchParams = new URLSearchParams();
  console.log(searchParams);

  for (const key in searchParamsObject) {
    console.log(key);
    if (searchParamsObject.hasOwnProperty(key)) {
      searchParams.append(key, searchParamsObject[key]);
    }
  }

  return searchParams.toString();
}
