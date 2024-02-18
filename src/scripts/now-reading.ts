const query = `
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
const args = {
  limit: 3,
  offset: 0,
  readingStatus: 'IS_READING',
  profileId: import.meta.env.LITERAL_ID as string,
};

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
    // mock on dev mode. ain't no time to wait
    return [
      {
        title: 'The Clean Coder',
        subtitle: 'A Code of Conduct for Professional Programmers',
        url: 'https://literal.club/book/the-clean-coder-bk300',
        cover: 'https://assets.literal.club/2/ckhfmm2h373260yabme04vn9s.jpg',
        author: ['Robert C. Martin'],
      },
    ];
  }

  const response = await fetch('https://literal.club/graphql/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: query,
      variables: args,
    }),
  });
  const { data } = await response.json() as CurrentBooks;
  const { booksByReadingStateAndProfile } = data;

  return booksByReadingStateAndProfile.map(book => ({
    title: book.title,
    subtitle: book.subtitle,
    url: `https://literal.club/book/${book.slug}`,
    cover: book.cover,
    author: book.authors.map(author => author.name),
  }));
}
