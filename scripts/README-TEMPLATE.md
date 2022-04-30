# Coffee Chat

List of awesome people offering their time **for free** to have a "coffee chat" with others about different topics, mostly in a mentorship kind of way.

**Important**: this is not a list to promote your paid services. It is like free as in beer...

PLACEHOLDER

## Add yourself to this list

To add your name to this list, you simply need to add another person object in [people.json](people.json). You can simply copy someone else, and change the information. If you don't want to share a piece of information, just leave the value of the field empty. Once done, please do a pull request. If you have no idea how all this works, you can simply send me your information by [email](mailto:hi@fred.dev), and I'll add you to the list myself with pleasure.

**Warning**: only add yourself to this list!

## Remove yourself from this list

Simply create a pull request by removing your people definition from [people.json](people.json). As for adding yourself to the list if you are not a technical person, just send me an [email](mailto:hi@fred.dev) and I'll do it for you.

## People JSON Format Changelog

### 2022-04-28

- add `website` (String): the full URL of your website or portfolio

### 2022-04-22

- add **`languages`** (Array of String): the languages you can use for your coffee chat

### 2022-04-21

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

_The properties in bold are required_.

## Future plans

I put this up quickly, and don't have more time this week to finalize what I had in mind, so here's some things left to do.

- Generate a second list by location (when we'll have more people)
- Generate a third list by discussion topics (when we'll have more people)
- Add GitHub Action for JSON linting & formating
- Add GitHub Action for links validation
- Create pull request template
- Create a CONTRIBUTION.md
- Better formatting of the list including languages, website, city & country (suggestions welcome here)

## Acknoledgements

The idea of a coffee chat resource list is  coming from [Julien Lengrand-Lambert.](https://www.linkedin.com/in/julienlengrand/).

P.S.: `README.md` is generated from `scripts/TEMPLATE-README.md`
