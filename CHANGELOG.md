# People JSON Format Changelog

This changelog is only for `people.json`, not the entire repository with the Node.js application or the GitHub Actions.

Note that the properties in bold are required.

## 2022-04-28

- add `website` (String): the full URL of your website or portfolio

## 2022-04-22

- add **`languages`** (Array of String): the languages you can use for your coffee chat

## 2022-04-21

Initial JSON including:

- **`name`** (String): your full name
- `title` (String): your job title
- `company` (String): the name of the company that you work for. Freelancers can just write `freelance`
- `city` (String): the city where you live
- `country` (String): the country where you live
- **`linkedin`** (String): the full URL to your LinkedIn profile
- `twitter` (String): the full URL to your Twitter account
- **`scheduling`** (String): the full URL to your scheduling platform or a `mailto:your@email.com` link
- **`online-only`** (Boolean): `true` if you are open to meet people in your area in-person
- **`topics`** (Array of String): all the topics, tech or not, that you would be comfortable to discuss about or even giving tips and sharing your expertise
