/* eslint-disable style/indent */
import { html } from 'satori-html';

interface OGProps {
  title: string;
  publishedAt: Date;
  timeToRead: number;
  tags: string[];
}

function buildTemplate(props: OGProps, imageBuffer: Buffer) {
  return `<div style="padding: 48px; margin: 0; display: flex; background-color: #FCFCFD; width: 100%; height: 100%; flex-flow: column; justify-content: space-between">
    <img width="64" height="64" src='data:image/png;base64,${imageBuffer.toString('base64')}' />

    <div style="display: flex;">
      <h1 style="font-size: 64px; font-weight: 600; lineHeight: 1; letter-spacing: -2px">
        ${props.title}
      </h1>
    </div>

    <div style="display: flex; align-items: center; justify-content: space-between; font-weight: 500; font-size: 20px;">
      <div style="display: flex; color: #535862;">
        <time style="display: flex; margin-right: 8px;">
          ${new Date(props.publishedAt).toLocaleString('en-GB', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time> — <span style="display: flex; margin-left: 8px;">${props.timeToRead} minutes read</span>
      </div>

      <div style="display: flex; gap: 8px;">
        ${props.tags.map(t => `<div style="display: flex; justify-content: center; align-items: center; color: #535862; background-color: #53586220; border-radius: 9999px; padding: 4px 12px; font-size: 18px;">${t[0].toUpperCase() + t.slice(1).toLowerCase()}</div>`).join('\n')}
      </div>
    </div>
  </div>`;
}

export const Template = (props: OGProps, imageBuffer: Buffer) => html(buildTemplate(props, imageBuffer))
