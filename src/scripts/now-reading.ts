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

const loginQuery = `
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      email
      languages
      profile {
        id
        handle
        name
        bio
        image
      }
    }
  }
`;

const args = {
  limit: 3,
  offset: 0,
  readingStatus: 'IS_READING',
  profileId: '@namchee' as string,
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

const coverOverride = {
  'tom-greenwood-sustainable-web-design-90039': 'https://sustainablewebdesign.org/wp-content/uploads/2021/01/SWD-Tom-Greenwood-Cover.jpg',
};

async function getProfileId() {
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

  const text = await response.text();
  console.log(text);

  const { data } = await response.json() as CurrentBooks;
  const { booksByReadingStateAndProfile } = data;

  return booksByReadingStateAndProfile.map(book => ({
    title: book.title,
    subtitle: book.subtitle,
    url: `https://literal.club/book/${book.slug}`,
    // eslint-disable-next-line typescript/no-unsafe-assignment
    cover: book.cover || coverOverride[book.slug],
    author: book.authors.map(author => author.name),
  }));
}
