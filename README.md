# Coffee Chat

List of awesome people offering their time **for free** to have a "coffee chat" with others about different topics, mostly in a mentorship kind of way.

**Important**: this is not a list to promote your paid services. It is like free as in beer...

- **[Anthony Dellavecchia](https://calendly.com/anthonyjdella/chat) ([LinkedIn](https://www.linkedin.com/in/anthonydellavecchia), [Twitter](https://twitter.com/anthonyjdella)), Developer Evangelist, Staff at Twilio:** Software Engineering, Developer Relations, Developers Documentation, Community Building, Personal Branding, Starting in Tech, Job Search, Mental Health, Imposter Syndrome
- **[Baskar Rao Dandlamudi](https://calendly.com/baskarmib/30min) ([LinkedIn](https://www.linkedin.com/in/baskarrao-dandlamudi/), [Twitter](https://twitter.com/baskarmib)), Solutions Architect at Perficient:** Application Development, Starting in Tech, Job Searching, Mobile, Tech, Software Engineering
- **[Frédéric Harper](https://calendly.com/fharper/coffee) ([LinkedIn](https://www.linkedin.com/in/fredericharper), [Twitter](https://twitter.com/fharper)), Director of Developer Relations at Mindee:** Open-Source, SaaS Architecture, Developer Relations, Developers Documentation, Community Building, Personal Branding, Starting in Tech, Job Search, Cats, Coffee, Microbrewery Beer, Travelling, Mental Health, Anything else
- **[Josef Holzmayr](https://calendly.com/theyoctojester/mender-office-hour) ([LinkedIn](https://www.linkedin.com/in/josef-holzmayr), [Twitter](https://twitter.com/theyoctojester)), Head of Developer Relations at Northern.tech:** Open-Source, Embedded Linux, Yocto, OpenEmbedded, OTA Updates, Developer Relations, IoT, Livecoding, Beer, Heavy Metal, Anything else
- **[Julien Lengrand-Lambert](https://calendly.com/jlengrand) ([LinkedIn](https://www.linkedin.com/in/julienlengrand/), [Twitter](https://twitter.com/jlengrand)), Lead Developer Advocate at Adyen:** Software Engineering, Developer Relations, Developers Documentation, Community Building, Personal Branding, Starting in Tech, Job Search, Writing, Mentoring, Hiring, Meetups, Kotlin, Anything, really
- **[Mike Staffa](https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2ORDYuLhQBn4UgTLumBjC8UgC_lAIItfA3upgMX6TR-NlL-JkwZNz7z8aHy2n05ilPfycvPqkT) ([LinkedIn](https://www.linkedin.com/in/mikestaffa/), [Twitter](https://twitter.com/mtstaffa)), Product Manager at Zeals:** Cross-Cultural Communication, Community Building, Personal Branding, Starting in Tech, Job Search, Japan, Chatbots, Nutrition
- **[Rene Pot](https://calendar.google.com/calendar/appointments/schedules/AcZssZ2j2HSqAeHfTXLKLdq5VyE-3lCrbIBLtL7DWAk6VrAkJfC5GVFEFI8cHAhUeIkbqFe1l3hmhm6A) ([LinkedIn](https://www.linkedin.com/in/wraldpyk/), [Twitter](https://twitter.com/wraldpyk)), Senior Developer Advocate at Budibase:** Open-Source, Low-Code, No-Code, Twitch, Mobile Development, Developer Relations, Coffee, Wisky, Moving Abroad, Casual Conversation
- **[Ricardo Sueiras](https://calendly.com/ricardo-sueiras/you-are-amazing) ([LinkedIn](https://www.linkedin.com/in/ricardosueiras), [Twitter](https://twitter.com/094459)), Developer Advocate at AWS:** Open Source, Developer Relations, Innovation, Cloud, Mentoring, Education
- **[Richard Moot](https://calendar.google.com/calendar/appointments/schedules/AcZssZ3GTtVFlHeYvKVgbxeje5kvnNWdfz8NgP8veCST2A698ybgznKYLNUxZJHCVVAQS1mmqlhmS73n) ([LinkedIn](https://www.linkedin.com/in/richardmoot), [Twitter](https://twitter.com/wootmoot)), Head of Developer Advocacy at Square @ Block, Inc.:** Open-Source, Video, Developer Video, API Design, Developer Relations, Developers Content, Starting in Tech, Job Search, Cats, Coffee, Beer, Travel, Anything else
- **[Shannon Lal](https://calendly.com/shannonlal/30min) ([LinkedIn](https://www.linkedin.com/in/shannonlal), [Twitter](https://twitter.com/shannondlal)), Director, Journey Technical Lead at RBC:** Starting in Tech, Job Searching, Web, Dev Ops, React, Tech, NodeJS, Software Engineering
- **[Zachary Powell](https://calendar.google.com/calendar/appointments/schedules/AcZssZ2e3yzS9KLzlaRJHFpPg4_v6oIQb6P-WHYTxc1UuS5Zd1KqulrNK9aZwss92bCDOfnIhvym1/1vvmv) ([LinkedIn](https://www.linkedin.com/in/zachary-mg-powell), [Twitter](https://twitter.com/devwithzachary)), Sr Android Developer Advocate at Vonage:** DevRel, Developer Relations, Android, Starting in Tech, Job Searching, Mobile, Tech, Software Engineering

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

_The properties in bold are required_

## Future plans

I put this up quickly, and don't have more time this week to finalize what I had in mind, so here's some things left to do.

- Generate a second list by location (when we'll have more people)
- Generate a third list by discussion topics (when we'll have more people)
- Add GitHub Action for JSON linting & formating
- Add GitHub Action for automatic README generation
- Add GitHub Action for links validation
- Create pull request template
- Create a CONTRIBUTION.md
- Better formatting of the list including languages, website, city & country (suggestions welcome here)

## Acknoledgements

The idea of a coffee chat resource list is  coming from [Julien Lengrand-Lambert.](https://www.linkedin.com/in/julienlengrand/).
