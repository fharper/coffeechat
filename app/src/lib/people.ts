import people from '../../../people.json' with { type: 'json' };

export interface Person {
  /**
   * Full name
   */
  name: string;
  /**
   * Professional title
   */
  title: string;
  /**
   * Employer's company name
   */
  company: string;
  /**
   * City where you live
   */
  city?: string;
  /**
   * Country where you live
   */
  country?: string;
  /**
   * Languages spoken well enough for a coffee chat
   */
  languages: [string, ...string[]];
  /**
   * Website URL
   */
  website?: string;
  /**
   * LinkedIn profile URL
   */
  linkedin: string;
  /**
   * Twitter account URL
   */
  twitter?: string;
  /**
   * Mastodon account URL
   */
  mastodon?: string;
  /**
   * GitHub Profile URL
   */
  github?: string;
  /**
   * Scheduling platform URL or mailto link
   */
  scheduling: string;
  /**
   * Whether you are open to in-person Coffee Chat (default: false)
   */
  'online-only'?: boolean;
  /**
   * List of every topics you are de factor comfortable to discuss or give tips about
   */
  topics: [string, ...string[]];
}

export function fetchAll(): Person[] {
  return (people.people as Person[])
    .map((item) => {
      item.topics = item.topics.sort();
      return item;
    })
    .sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
}

export function fetch(): Person | undefined {
  return;
}
