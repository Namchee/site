/* eslint-disable style/indent */
import { html } from 'satori-html';

interface OGProps {
  host: string;

  title: string;
  publishedAt: Date;
  timeToRead: number;
  tags: string[];
}

export const Template = (props: OGProps) => html`
  <div style="padding: 48px; margin: 0; display: flex; background-color: #FCFCFD; width: 100%; height: 100%; flex-flow: column; justify-content: space-between">
    <img width="64" height="64" src='${props.host}/og-logo.png' />

    <div style="display: flex;">
      <h1 style="font-size: 56px; font-weight: 600; lineHeight: 1; letter-spacing: -2px">
        ${props.title}
      </h1>
    </div>

    <div style="display: flex; justify-content: space-between; font-weight: 500; font-size: 20px;">
      <div style="display: flex; color: #697586;">
        <time style="display: flex; margin-right: 8px;">
          ${new Date(props.publishedAt).toLocaleString('en-GB', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time> — <span style="display: flex; margin-left: 8px;">Namchee</span>
      </div>

      <div style="display: flex; color: #444CE7;">
        ${props.tags.map(t => t[0].toUpperCase() + t.slice(1).toLowerCase()).join(', ')}
      </div>
    </div>
  </div>
`;
