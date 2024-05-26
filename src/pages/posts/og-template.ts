interface OGProps {
  host: string;

  title: string;
  publishedAt: Date;
  tags: string[];
}

export const Template = (props: OGProps) => (
  {
    type: 'div',
    props: {
      style: {
        padding: '48px',
        display: 'flex',
        backgroundColor: '#FCFCFD',
        width: '100%',
        height: '100%',
        flexFlow: 'column',
        justifyContent: 'space-between',
      },
      children: [
        {
          type: 'img',
          props: {
            width: '80',
            height: '80',
            src: `${props.host}/og-logo.png`,
          },
        },
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    flexFlow: 'column',
                  },
                  children: [
                    {
                      type: 'time',
                      props: {
                        style: {
                          display: 'block',
                          fontWeight: 500,
                          marginBottom: '16px',
                          fontSize: '20px',
                          color: '#697586',
                          lineHeight: 1,
                        },
                        children: new Date(props.publishedAt).toLocaleString('en-GB', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        }),
                      },
                    },
                    {
                      type: 'p',
                      props: {
                        style: {
                          fontSize: '56px',
                          fontWeight: 600,
                          lineHeight: 1,
                          letterSpacing: '-2.5px',
                        },
                        children: props.title,
                      },
                    },
                  ],
                },
              },
              {
                type: 'p',
                props: {
                  style: {
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#444CE7',
                  },
                  children: props.tags.map(t => t[0].toUpperCase() + t.slice(1).toLowerCase()).join(', '),
                },
              },
            ],
          },
        },
      ],
    },
  }
);
