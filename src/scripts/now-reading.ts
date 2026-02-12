import { BookCover, DevMock } from '@/constant/books';

const bookQuery = `
  query booksByReadingStateAndProfile(
    $limit: Int!
    $offset: Int!
    $readingStatus: ReadingStatus!
    $profileId: String!
  ) {
    booksByReadingStateAndProfile(
      limit: $limit
      offset: $offset
      readingStatus: $readingStatus
      profileId: $profileId
    ) {
      title
      subtitle
      slug
      cover
      authors {
        name
      }
    }
}
`;

interface CurrentBooks {
  data: {
    booksByReadingStateAndProfile: {
      title: string;
      subtitle: string;
      slug: string;
      cover: string;
      authors: {
        name: string;
      }[];
    }[];
  };
}

interface Book {
  title: string;
  subtitle: string;
  url: string;
  cover: string;
  author: string[];
}

export async function getCurrentlyReadBooks(): Promise<Book[]> {
  if (import.meta.env.DEV) {
    return DevMock;
  }

  const args = {
    limit: 3,
    offset: 0,
    readingStatus: 'IS_READING',
    profileId: import.meta.env.LITERAL_ID as string,
  };

  const response = await fetch('https://api.literal.club/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: bookQuery,
      variables: args,
    }),
  });

  const { data } = await response.json() as CurrentBooks;
  const { booksByReadingStateAndProfile } = data;

  return booksByReadingStateAndProfile.map(book => ({
    title: book.title,
    subtitle: book.subtitle,
    url: `https://literal.club/book/${book.slug}`,
    // eslint-disable-next-line typescript/no-unsafe-assignment
    cover: book.cover || BookCover[book.slug],
    author: book.authors.map(author => author.name),
  }));
}
