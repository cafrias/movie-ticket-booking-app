export interface Movie {
  id: string;
  title: string;
  subTitle: string;
  coverImg: string;
  thumbnailImg: string;
  synopsis: string;
}

export function matchesSearch(movie: Movie, term: string): boolean {
  const reg = new RegExp(term, "i");

  return (
    reg.test(movie.title) ||
    reg.test(movie.subTitle) ||
    reg.test(movie.synopsis)
  );
}
